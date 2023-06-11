
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import orderData from '../../data/orderData';
import axiosInstance from '../../config/axiosConfig';
import { useAppContext } from '../../context/AppContext';
import { convertVNPrice } from '../../utils/convertVNPrice';
import { ScrollView } from 'react-native-gesture-handler';


const OrderHistoryScreen = () => {
  const { userInfo} = useAppContext()
  const [data, setData] =React.useState()
  React.useEffect(()=>{
    if(!userInfo?._id) return
    axiosInstance.get(`purchase/${userInfo._id}`).then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }, [])
 const countTotalPrice =(products)=>{
   let total = 0
    products.forEach((product)=> total+= product.price)
  return total
 }

 if(!Boolean(userInfo?._id)) {
  return <View style={{ flex: 1,  padding: 16,}}>
  <Text style={{ fontSize: 16, 
  fontWeight: "bold",

  }}>Bạn phải đăng nhập mới vào được lịch sử thanh toán!</Text>
</View>
}

  return (
    <ScrollView>
      <View style={styles.container}>
          {data && data?.map((order) => (
            <View key={order.id} style={styles.orderContainer}>
              <Text style={styles.date}>Date: {order.createdAt.split("T")[0]}</Text>
              <Text style={styles.total}>Total: {convertVNPrice(countTotalPrice(order.product))}</Text>
              <Text style={styles.status}>Status: {order.status}</Text>
              {order.product_info.map((item) => (
                <View key={item._id} style={styles.itemContainer}>
                  <Text style={styles.name}>Name: {item.name}</Text>
                  <Text style={styles.price}>Price: {convertVNPrice(item.price)}</Text>
                  <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  orderContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  total: {
    fontSize: 14,
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  itemContainer: {
    marginTop: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    marginBottom: 2,
  },
  quantity: {
    fontSize: 12,
    color: 'gray',
  },
});

export default OrderHistoryScreen;

