import React from 'react';
import { View, Text } from 'react-native';
import cartData from '../../data/cartData';
import ProductData from '../../data/productData';

const CartScreen = () => {
  return (
    <View>
      {cartData.map((product) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
          <Text>{product.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

export default CartScreen;
