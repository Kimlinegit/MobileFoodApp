
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '../common/ProductCard';
import menuData from '../../data/menuData';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {

  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetailScreen', { product });
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productList: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default MenuScreen;

