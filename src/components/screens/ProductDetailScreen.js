import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axiosInstance from '../../config/axiosConfig';

const ProductDetailScreen = ({ route }) => {
  const { id } = route.params;

  const [product, setProduct] = React.useState()
  const [loading, setLoading] =React.useState(false)

  React.useEffect(()=>{
    setLoading(true)
    axiosInstance.get(`product/${id}`).then((res)=>{
      setProduct(res.data)
    })
  }, [])

  React.useEffect(()=>{
    if(!product) return
    setLoading(false)
  }, [product])

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

  const handleAddToCart = () => {
    axiosInstance.post("cart", {
      id_user:"6471dc1b2297c72f1b4a156c",
      id_product:product._id
    }).then((res)=>{
      console.log(res.data);
    })
  };

  if(loading){
    return <ActivityIndicator size="large" />
  }
  if(!product) return <View></View>
  
  return (
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
      {/* <Text style={styles.commentTitle}>Comment:</Text> */}
      {/* Hiển thị danh sách comment */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonLabel}>Add to cart</Text>
      </TouchableOpacity>
    </View>
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
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default ProductDetailScreen;


