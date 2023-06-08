
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '../common/ProductCard';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from "../../config/axiosConfig"

const MenuScreen = () => {
  const [menuData, setMenuData]=React.useState()

  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetailScreen', { product });
  };

React.useEffect(()=>{
    axiosInstance.get("/product").then((res)=>{
      setMenuData(res.data)
    })
}, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleProductPress(item)}>
              <ProductCard product={item} />
            </TouchableOpacity>
          )
        }}
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

