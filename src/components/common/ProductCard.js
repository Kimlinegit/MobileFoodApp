// import React from 'react';
// import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

// const ProductCard = ({ product }) => {
//   return (
//     <TouchableOpacity style={styles.container}>
//       <Image source={product.image} style={styles.image} />
//       <Text style={styles.name}>{product.name}</Text>
//       <Text style={styles.price}>{product.price}</Text>
//       <Text style={styles.description}>{product.description}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   price: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//   },
// });

// export default ProductCard;


import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
    const navigation = useNavigation();

    const handleProductPress = () => {
      navigation.navigate('ProductDetailScreen', { product });
    };

    const renderRatingStars = () => {
    const rating = product.rating;
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <Ionicons
              key={`full-star-${index}`}
              name="star"
              size={16}
              color="gold"
            />
          ))}
        {Array(halfStars)
          .fill()
          .map((_, index) => (
            <Ionicons
              key={`half-star-${index}`}
              name="star-half"
              size={16}
              color="gold"
            />
          ))}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <Ionicons
              key={`empty-star-${index}`}
              name="star-outline"
              size={16}
              color="gold"
            />
          ))}
      </>
    );
  };

  return (
    <TouchableOpacity onPress={handleProductPress} style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>{renderRatingStars()}</Text>
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

