import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView, FlatList, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import axiosInstance from '../../config/axiosConfig';
import { useAppContext } from '../../context/AppContext';

const ProductDetailScreen = ({ route }) => {
  const { userInfo} = useAppContext()
  const isUserLogin= Boolean(userInfo?._id)
  const isFocused = useIsFocused();

  const { id } = route.params;
  const navigation = useNavigation();
  //state
  const [product, setProduct] = React.useState()
  const [loading, setLoading] =React.useState(false)
  const [isPurchased, setIsPurchased]=React.useState(false)
  const [listComments, setListComment]= React.useState()

  //render
  const renderRating1 = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const iconName = i <= rating ? 'star' : 'star-outline';
      const starColor = i <= rating ? 'gold' : 'gray';
      stars.push(
        <Ionicons
          key={i}
          name={iconName}
          size={20}
          color={starColor}
          style={{ marginRight: 5 }}
        />
      );
    }

    return stars;
  };

  const renderRating = (ratingResponse) => {
    let ratingSum= 0
    ratingResponse.forEach((ratingItem)=> {
      ratingSum+= ratingItem.rating
    })
    const rating = Math.round(ratingSum/ratingResponse.length)

    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const iconName = i <= rating ? 'star' : 'star-outline';
      const starColor = i <= rating ? 'gold' : 'gray';
      stars.push(
        <Ionicons
          key={i}
          name={iconName}
          size={20}
          color={starColor}
          style={{ marginRight: 5 }}
        />
      );
    }

    return stars;
  };

  // function
  const handleAddToCart = () => {
    axiosInstance.post("cart", {
      id_user:userInfo._id,
      id_product:product._id
    }).then((res)=>{
      console.log(res.data);
    })
  };

  const handleComment = () => {
    // Xử lý khi người dùng nhấp vào nút "Comment"
    navigation.navigate('Comment', { 
      productId: product._id,
      productName: product.name,
      productImage: product.image_url,
      productPrice: product.price,
    });
  };

  //useEffect
  React.useEffect(()=>{
    if(!isFocused) return 
    setLoading(true)
    axiosInstance.get(`product/${id}`).then((res)=>{
      setProduct(res.data)
      setListComment(res.data?.rating)
    })
    if(!userInfo) return
    axiosInstance.get(`purchase/${userInfo._id}`).then((res)=>{
      if(res.data){
        setIsPurchased(Boolean(res.data.some((purchase)=>Boolean(purchase.product.some((productItem)=>productItem._id===id)))))
      }
    })
  }, [isFocused])

  React.useEffect(()=>{
    if(!product) return
    setLoading(false)
  }, [product])


  if(loading){
    return <ActivityIndicator size="large" />
  }
  if(!product) return <View></View>
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{
          uri: product.image_url
        }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.quantity}>Category: {product.quantity}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>rating:</Text>
          {renderRating(product.rating)}
        </View>
        {isUserLogin && <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonLabel}>Add to cart</Text>
        </TouchableOpacity> }
        
        {isUserLogin && isPurchased && <TouchableOpacity style={styles.commentButton} onPress={handleComment}>
          <Text style={styles.commentButtonLabel}>Comment</Text>
        </TouchableOpacity> }
        
        <Text style={styles.commentTitle}>Comments:</Text>
        { listComments &&  <FlatList
          data={listComments}
          renderItem={({ item }) => (
            <View key={item._id} style={styles.commentContainer}>
              <Text style={styles.commentText}>{item?.comment}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>Rating:</Text>
                {renderRating1(item.rating)}
              </View>
              <Text style={styles.commentAuthor}>By: {item.user.email}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.commentList}
        />}
       
      </View>
    </ScrollView>
  );
};

// CSS styles
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 5,
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  commentButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20
  },
  commentText: {
    fontSize: 16,
  },
  commentAuthor: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
  },
  commentList: {
    width: '100%',
  },
};

export default ProductDetailScreen;
