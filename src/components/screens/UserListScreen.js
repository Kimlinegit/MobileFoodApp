import React from 'react';
import { View, Text, FlatList } from 'react-native';
import userData from '../../data/userData';

const UserListScreen = () => {
  return (
    <View>
      <FlatList
        data={userData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            {/* Hiển thị các thuộc tính khác của người dùng */}
          </View>
        )}
      />
    </View>
  );
};

export default UserListScreen;
