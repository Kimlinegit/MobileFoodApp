import React from 'react';
import { View, Text, Image, ActivityIndicator, FlatList } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import axiosInstance from '../../config/axiosConfig';

const CartScreen = () => {
  const isFocused = useIsFocused();
  const [dataCart, setDataCart] =React.useState()
  const [loading, setLoading] =React.useState(false)

  //* lưu ý là sau khi user login xong thì mới có id user nhé!
  const idUser= "6471dc1b2297c72f1b4a156c"

  React.useEffect(()=>{
    if(!isFocused) return
    setLoading(true)
    axiosInstance.get(`cart/${idUser}`).then((res)=> {
      setDataCart(res.data)
    })
  }, [isFocused])

    React.useEffect(()=>{
      if(!dataCart) return
      setLoading(false)
    }, [dataCart])

  if(loading){
    return <ActivityIndicator size="large" />
  }
  
  if(!dataCart){
    return <></>
  }
  return (
    <View style= {{
      flex: 1,
      backgroundColor: '#fff',
    }}>
        <FlatList
        data={dataCart}
        renderItem={({ item }) => {
          return (
              <View key={item._id}>
              <Text>{item.product.name}</Text>
              <Image source={{uri: item.product.image_url}} style= {{
                width: '100%',
                height: 200,
                resizeMode: 'cover',
                borderRadius: 8,
                marginBottom: 8,
              }}
              />
              <Text>Quantity: {item.quantity}</Text>
              <Text>Ngày thêm vào giỏ hàng: {item.createdAt.split("T")[0]}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingVertical: 16,
          paddingHorizontal: 16,
        }}
      />
    </View>
  );
};

export default CartScreen;
