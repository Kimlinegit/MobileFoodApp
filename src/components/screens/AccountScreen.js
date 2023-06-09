// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
// import userData from '../../data/userData';

// const AccountScreen = () => {
//   // Lấy thông tin người dùng từ dữ liệu userData
//   const user = userData.find((item) => item.id === 1); // Giả sử người dùng có id là 1

//   // State để lưu trữ thông tin cá nhân và quản lý việc chỉnh sửa
//   const [name, setName] = useState(user.name);
//   const [password, setPassword] = useState(user.password);
//   const [address, setAddress] = useState(user.address);
//   const [phone, setPhone] = useState(user.phone);
//   const [avatar, setAvatar] = useState(user.avatar);

//   //xử lý khi người dùng thay đổi thông tin cá nhân
//   const handleUpdateProfile = () => {
//     const updatedUser = { ...user, name, password, address, phone, avatar };
//     console.log('Updated user:', updatedUser);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Name:</Text>
//       <TextInput style={styles.input} value={name} onChangeText={setName} />

//       <Text style={styles.label}>Password:</Text>
//       <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

//       <Text style={styles.label}>Address:</Text>
//       <TextInput style={styles.input} value={address} onChangeText={setAddress} />

//       <Text style={styles.label}>Phone:</Text>
//       <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

//       <Text style={styles.label}>Avatar:</Text>
//       <Image source={{ uri: avatar }} style={styles.avatar} />

//       <Button title="Update Profile" onPress={handleUpdateProfile} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     marginBottom: 16,
//   },
// });

// export default AccountScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
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

  // Xử lý khi người dùng chọn ảnh từ thư viện ảnh
  const handleChooseImage = () => {
    const options = {
      title: 'Select Avatar',
      mediaType: 'photo',
      quality: 0.7,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else {
        setAvatar(response.uri);
      }
    });
  };

  // Xử lý khi người dùng thay đổi thông tin cá nhân
  const handleUpdateProfile = () => {
    const updatedUser = { ...user, name, password, address, phone, avatar };
    console.log('Updated user:', updatedUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <Text style={styles.label}>Address:</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />

      <Text style={styles.label}>Phone:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

      <Text style={styles.label}>Avatar:</Text>
      <View style={styles.avatarContainer}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <Text>No Avatar Selected</Text>
        )}
        <Button style={styles.imgButton} title="Choose Image" onPress={handleChooseImage} />
      </View>

      <Button style={styles.imgButton} title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 50,
  },
  imgButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'center',
  }
});

export default AccountScreen;

