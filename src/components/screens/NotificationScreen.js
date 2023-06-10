import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import axiosInstance from '../../config/axiosConfig';
import { useAppContext } from '../../context/AppContext';

const NotificationScreen = () => {
  const isFocused = useIsFocused();
  const {setUserInfo, userInfo} = useAppContext()
  const navigation = useNavigation();
  // const [notificationData, setNotificationData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

//------------fake Data---------------------
  const notificationData = [
    {
      message: "Đơn hàng đã được xác nhận!",
    },
    {
      message: "Đơn hàng đang được giao!",
    },
    {
      message: "Đơn hàng đã được giao!",
    },
    {
      message: "Đơn hàng đã được hủy!",
    }
  ]

  if(!Boolean(userInfo?._id)){
    // navigation.navigate('LoginScreen');
    return   <View style={{flex: 1,
      backgroundColor: '#fff'}}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
          }}>
           Bạn phải đăng nhập mới vào được thông báo!
           </Text>
      </View>
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {notificationData.length === 0 ? (
        <Text style={styles.emptyText}>No notifications found</Text>
      ) : (
        <FlatList
          data={notificationData}
          renderItem={({ item }) => (
            <View style={styles.notificationItem}>
              <Text style={styles.notificationText}>{item.message}</Text>
              <Text style={styles.notificationDate}>{new Date().toLocaleString()}</Text>
            </View>
          )}
          // keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.notificationList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 32,
  },
  notificationList: {
    paddingBottom: 16,
  },
  notificationItem: {
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
  notificationText: {
    fontSize: 16,
    marginBottom: 8,
  },
  notificationDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default NotificationScreen;


