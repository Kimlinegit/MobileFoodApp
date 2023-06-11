import React from 'react';
import { View, Text, Image, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import axiosInstance from '../../config/axiosConfig';
import { Feather } from '@expo/vector-icons';
import { useAppContext } from '../../context/AppContext';

const CartScreen = () => {
  const { userInfo} = useAppContext()

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [dataCart, setDataCart] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleOrder = () => {
    navigation.navigate('OrderScreen');
  };

  const handleDelete = (itemId) => {
    axiosInstance.delete(`cart/${itemId}`).then((res)=>handleGetCart())
    
  };
  const handleGetCart = ()=>{
    setLoading(true);
    axiosInstance.get(`cart/${userInfo._id}`).then((res) => {
      setDataCart(res.data);
    });
  }

  React.useEffect(() => {
    if (!isFocused || !userInfo?._id) return;
    handleGetCart()
  }, [isFocused]);

  React.useEffect(() => {
    if (!dataCart) return;
    setLoading(false);
  }, [dataCart]);

  if(!Boolean(userInfo?._id)){
    return  <View style={styles.container}>
              <Text style={styles.name}>Bạn phải đăng nhập mới vào được giỏ hàng!</Text>
            </View>
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!dataCart) {
    return null;
  }
console.log({dataCart});
  return (
      <View style={styles.container}>
         {(!dataCart || dataCart.length===0) && <Text  style={styles.name}>Không có sản phẩm nào được thêm vào giỏ hàng</Text>}

        <FlatList
          data={dataCart}
          renderItem={({ item }) => {
            return (
              <View style={styles.cartItem}>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item._id)}>
                  <Feather name="trash-2" size={20} color="red" />
                </TouchableOpacity>
                <Text style={styles.name}>{item.product.name}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ProductDetailScreen', { id: item.product._id })}>
                  <Image
                    source={{ uri: item.product.image_url }}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                <Text style={styles.date}>Ngày thêm vào giỏ hàng: {item.createdAt.split("T")[0]}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.cartList}
        />
       
        {dataCart?.length>0 &&  <TouchableOpacity style={styles.orderButton} onPress={handleOrder }>
            <Text style={styles.orderButtonLabel}>Order</Text>
          </TouchableOpacity>}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartList: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  cartItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  orderButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  orderButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
});

export default CartScreen;

