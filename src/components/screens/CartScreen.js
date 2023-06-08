import React from 'react';
import { View, Text, Image } from 'react-native';
import cartData from '../../data/cartData';
import axiosInstance from '../../config/axiosConfig';

const CartScreen = () => {
  const [dataCart, setDataCart] =React.useState()
  
  //* lưu ý là sau khi user login xong thì mới có id user nhé!
  const idUser= "6471dc1b2297c72f1b4a156c"

React.useEffect(()=>{
  axiosInstance.get(`cart/${idUser}`).then((res)=> {
    setDataCart(res.data)
  })
}, [])

  if(!dataCart){
    return <></>
  }
  return (
    <View>
     {dataCart.map((data)=>(
      <View key={data._id}>
        <Text>{data.product.name}</Text>
        <Image source={{uri: data.product.image_url}} style= {{
            width: '100%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 8,
            marginBottom: 8,
          }}
        />
        <Text>Quantity: {data.quantity}</Text>
        <Text>Ngày thêm vào giỏ hàng: {data.createdAt.split("T")[0]}</Text>
      </View>
     ))}
    </View>
  );
};

export default CartScreen;
