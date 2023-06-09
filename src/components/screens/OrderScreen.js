import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axiosInstance from '../../config/axiosConfig';
import { useAppContext } from '../../context/AppContext';

const OrderScreen = () => {
  const { userInfo} = useAppContext()
  const navigation = useNavigation();
  const [address, setAddress] = useState(userInfo?.address || "");
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = React.useState(false)

  const handlePlaceOrder = () => {
    if(!address || !cardNumber || !expiryDate || !cvv) {
      setError(true)
      return 
    }
    axiosInstance.post("purchase", {
      id_user: userInfo._id,
      shipping_address: address,
      credit_card_number: cardNumber,
      expired_date: expiryDate,
      cvv: cvv
    }).then((res)=> {
      if(res.data){
        setError(false)
        navigation.navigate("OrderHistoryScreen")
      }
    })
  };
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Order</Text>

      <Text style={styles.label}>Shipping Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your shipping address"
      />

      <Text style={styles.label}>Credit Card Number</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="Enter your credit card number"
      />

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput
            style={styles.input}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="MM/YY"
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={styles.input}
            value={cvv}
            onChangeText={setCvv}
            placeholder="CVV"
            secureTextEntry
          />
        </View>
      </View>
      {error && <Text style={{
        color:"red",
        marginBottom: 8,
        fontSize: 16
      }}>Vui lòng nhập đầy đủ các thông tin</Text>}
      

      <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
        <Text style={styles.buttonLabel}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
