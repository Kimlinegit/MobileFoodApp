// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Xử lý việc đăng ký tài khoản
    console.log('Registered:', username, password);

    // Chuyển đến màn hình đăng nhập sau khi đăng ký thành công
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />

      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Register" onPress={handleRegister} />

      <Button title="Back" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;

