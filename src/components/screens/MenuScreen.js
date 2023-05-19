import React from 'react';
import { View, Text, Image } from 'react-native';
import menuData from '../../data/menuData';

const MenuScreen = () => {
  return (
    <View>
      {menuData.map((menuItem) => (
        <View key={menuItem.id}>
          <Image source={menuItem.image} />
          <Text>Name: {menuItem.name}</Text>
          <Text>Description: {menuItem.description}</Text>
          <Text>Price: ${menuItem.price}</Text>
          {/* Hiển thị các thuộc tính khác của món ăn */}
        </View>
      ))}
    </View>
  );
};

export default MenuScreen;
