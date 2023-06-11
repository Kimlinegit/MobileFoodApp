import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
    const navigation = useNavigation();

    const handleProductPress = () => {
      navigation.navigate('ProductDetailScreen', { id: product._id });
    };

  const renderRating = (ratingResponse) => {
    let ratingSum= 0
    ratingResponse.forEach((ratingItem)=> {
      ratingSum+= ratingItem.rating
    })
    const rating = Math.round(ratingSum/ratingResponse.length)

    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const iconName = i <= rating ? 'star' : 'star-outline';
      const starColor = i <= rating ? 'gold' : 'gray';
      stars.push(
        <Ionicons
          key={i}
          name={iconName}
          size={20}
          color={starColor}
          style={{ marginRight: 5 }}
        />
      );
    }

    return stars;
  };

  return (
    <TouchableOpacity onPress={handleProductPress} style={styles.container}>
      <Image source={{
        uri:product.image_url 
      }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>{renderRating(product.rating)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProductCard;

