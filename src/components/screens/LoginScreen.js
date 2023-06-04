import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleRegister = () =>{
    navigation.navigate('Register')
  };

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput style={styles.input} placeholder='Email' value={username} onChangeText={setUsername} />

      <Text>Password:</Text>
      <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />

      <Button style={styles.button} title="Login" onPress={handleLogin} />
      <Text>Don't have an account?</Text>
      <Button  style={styles.button} title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'blue',
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10,
    }
  });

export default LoginScreen;


