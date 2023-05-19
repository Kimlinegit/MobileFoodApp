import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import userData from '../../data/userData';

const AccountScreen = () => {
  // Lấy thông tin người dùng từ dữ liệu userData
  const user = userData.find((item) => item.id === 1); // Giả sử người dùng có id là 1

  // State để lưu trữ thông tin cá nhân và quản lý việc chỉnh sửa
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [avatar, setAvatar] = useState(user.avatar);

  //xử lý khi người dùng thay đổi thông tin cá nhân
  const handleUpdateProfile = () => {

    const updatedUser = { ...user, name, password, address, phone, avatar };
    console.log('Updated user:', updatedUser);
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} />

      <Text>Phone:</Text>
      <TextInput value={phone} onChangeText={setPhone} />

        <Text>Avatar:</Text>
        <Image source={{ uri: avatar }} style={{ width: 100, height: 100 }} />

        <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
    );
};

export default AccountScreen;

