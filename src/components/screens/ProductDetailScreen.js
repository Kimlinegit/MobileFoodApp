// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useDispatch } from 'react-redux';
// // import { addToCart } from '../redux/actions/cartActions';
// import { connect } from 'react-redux';


// const ProductDetailScreen = ({ route }) => {
//   const { product } = route.params;
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     <h1>Thêm vào sản phẩm vào giỏ hàng thành công</h1>
//     // dispatch(addToCart(product));
//     // Thực hiện các hành động khác liên quan đến việc thêm sản phẩm vào giỏ hàng
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={product.image} style={styles.image} />
//       <Text style={styles.name}>{product.name}</Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <Text style={styles.price}>Price: {product.price}</Text>
//       <Text style={styles.quantity}>Quantity: {product.quantity}</Text>
//       <Text style={styles.rating}>Rating: {product.rating}</Text>
//       <Text style={styles.comment}>Comment: {product.comment.join(', ')}</Text>
//       <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
//         <Ionicons name="cart-outline" size={24} color="white" />
//         <Text style={styles.cartButtonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 16,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   description: {
//     marginBottom: 8,
//   },
//   price: {
//     marginBottom: 8,
//   },
//   quantity: {
//     marginBottom: 8,
//   },
//   rating: {
//     marginBottom: 8,
//   },
//   comment: {
//     marginBottom: 16,
//   },
//   cartButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     padding: 8,
//     borderRadius: 8,
//   },
//   cartButtonText: {
//     color: 'white',
//     marginLeft: 8,
//     fontSize: 16,
//   },
// });

// export default ProductDetailScreen;

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const ProductDetailScreen = ({ route }) => {
//   const { product } = route.params;

//   return (
//     <View style={styles.container}>
//       <Image source={product.image} style={styles.image} />
//       <Text style={styles.name}>{product.name}</Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <Text style={styles.price}>Price: {product.price}</Text>
//       <Text style={styles.quantity}>Quantity: {product.quantity}</Text>
//       <Text style={styles.rating}>Rating: {product.rating}</Text>
//       <Text style={styles.comments}>Comments: {product.comment}</Text>
//       <Ionicons name="cart" size={24} color="blue" style={styles.cartIcon} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 16,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   quantity: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   rating: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   comments: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   cartIcon: {
//     marginTop: 16,
//   },
// });

// export default ProductDetailScreen;


import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  const renderRating = () => {
    const rating = product.rating;
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

  const handleAddToCart = () => {
    // Thêm sản phẩm vào giỏ hàng
    console.log('Thêm sản phẩm vào giỏ hàng:', product);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.quantity}>Category: {product.quantity}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>rating:</Text>
        {renderRating()}
      </View>
      <Text style={styles.commentTitle}>Comment:</Text>
      {/* Hiển thị danh sách comment */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonLabel}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

// CSS styles
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 5,
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default ProductDetailScreen;


