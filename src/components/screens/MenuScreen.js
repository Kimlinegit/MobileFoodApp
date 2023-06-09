import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from "../../config/axiosConfig";
import ProductCard from '../common/ProductCard';

const MenuScreen = () => {
  const [menuData, setMenuData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetailScreen', { product });
  };

  const handleSearch = () => {
    // Xử lý tìm kiếm với searchText
  };

  React.useEffect(() => {
    setLoading(true);
    axiosInstance.get("/product").then((res) => {
      setMenuData(res.data);
    });
  }, []);

  React.useEffect(() => {
    if (!menuData) return;
    setLoading(false);
  }, [menuData]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  productList: {
    paddingBottom: 16,
  },
});

export default MenuScreen;

