import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../../config/axiosConfig';
import { useAppContext } from '../../context/AppContext';

const CommentScreen = ({ route }) => {
  const { userInfo} = useAppContext()

  const { productId, productName, productImage, productPrice } = route.params;
  const navigation = useNavigation();

  const [rating, setRating] = React.useState(4);
  const [comment, setComment] = React.useState('');
  const handleCommentSubmit = () => {
    axiosInstance.post("rating", {
      id_user: userInfo._id,
      id_product: productId,
      rating: rating,
      comment: comment
    }).then((res)=>{
      if(res.data){
        navigation.navigate('ProductDetailScreen', {id: productId });
      }
    })
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: productImage }} style={styles.image} />
      <Text style={styles.name}>{productName}</Text>
      <Text style={styles.price}>Price: ${productPrice}</Text>
      <Rating
        showRating
        fractions={1}
        startingValue={rating}
        onFinishRating={(value)=> setRating(value)}
        style={styles.rating}
      />
      <Input
        placeholder="Write a comment"
        onChangeText={(text)=> setComment(text)}
        value={comment}
        containerStyle={styles.commentInputContainer}
        inputStyle={styles.commentInput}
      />
      <TouchableOpacity title="Submit" style={styles.submitButton} onPress={handleCommentSubmit}>
        <Text style={styles.submitButtonLabel}>Submit</Text>
      </TouchableOpacity>
      {/* <Button title="Submit" onPress={handleCommentSubmit} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginBottom: 20,
  },
  rating: {
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentInputContainer: {
    marginBottom: 20,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    height: 100,
  },
});

export default CommentScreen;
