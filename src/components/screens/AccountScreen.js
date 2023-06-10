import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ActivityIndicator } from 'react-native';
import {launchImageLibraryAsync, MediaTypeOptions} from 'expo-image-picker';

import { useAppContext } from '../../context/AppContext';
import axiosInstance from '../../config/axiosConfig';

const AccountScreen = () => {
  const {setUserInfo, userInfo} = useAppContext()
  const [loading, setLoading] =React.useState(false)
 const [error, setError] = useState()
  const [name, setName] = useState(userInfo.fullname || "");
  const [userName, setUserName] = useState(userInfo.username || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [password, setPassword] = useState(userInfo.password);
  const [address, setAddress] = useState(userInfo.address|| "");
  const [phone, setPhone] = useState(userInfo.phone_number || "");
  const [avatar, setAvatar] = useState(userInfo.avatar_url || "");

  // Xử lý khi người dùng chọn ảnh từ thư viện ảnh
  const handleChooseImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [0,1],
      quality: 0,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0]);
    }
  };

  const handleUpdateProfile = () => {
    setLoading(true)
    const data = new FormData();
    data.append('username', userName);
    data.append('email',email);
    data.append('fullname', name);
    data.append('phone_number',phone);
    data.append('address',address);
    if(avatar!==userInfo.avatar_url && avatar ){
      data.append('file', {
       uri : avatar.uri,
       type: avatar.type,
       name: avatar.fileName? avatar.fileName: "default name"
      });
    }
    axiosInstance.patch(`/user/update_info/${userInfo._id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
       }
    }).then((res)=> {
        setError("")
        setUserInfo(res.data)
    }).catch((err)=> {
      setError("File bạn vừa upload có file size lớn hơn 1M, vui lòng upload với file size nhỏ hơn 1M")
      setLoading(false)
      setAvatar(userInfo.avatar_url)
    })
  };
  
  React.useEffect(()=>{
    setLoading(false)
  }, [userInfo])

  if(loading){
    return <ActivityIndicator size="large" />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>UserName:</Text>
      <TextInput style={styles.input} value={userName} onChangeText={setUserName} />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <Text style={styles.label}>Address:</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />

      <Text style={styles.label}>Phone:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

      <Text style={styles.label}>Avatar:</Text>
      <View style={styles.avatarContainer}>
        {avatar ? (
          <Image source={{ uri: avatar===userInfo?.avatar_url? avatar: avatar.uri }} style={styles.avatar} />
        ) : (
          <Text>No Avatar Selected</Text>
        )}
        <Button style={styles.imgButton} title="Choose Image" onPress={handleChooseImage} />
      </View>
      {error && <Text style={styles.labelError}>{error}</Text>}  
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
  labelError: {
    fontSize: 16,
    color: "red",
    fontWeight: 'normal',
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

