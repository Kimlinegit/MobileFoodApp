import React from 'react';
import { View, Text } from 'react-native';
import orderData from '../../data/orderData';

const OrderHistoryScreen = () => {
  return (
    <View>
      {orderData.map((order) => (
        <View key={order.id}>
          <Text>Date: {order.date}</Text>
          <Text>Total: ${order.total}</Text>
          <Text>Status: {order.status}</Text>
          {/* Hiển thị thông tin chi tiết về các món hàng trong đơn đặt hàng */}
          {order.items.map((item) => (
            <View key={item.id}>
              <Text>Name: {item.name}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default OrderHistoryScreen;
