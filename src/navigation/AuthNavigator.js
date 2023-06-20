import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../components/screens/CartScreen';
import NotificationScreen from '../components/screens/NotificationScreen';
import { Menu } from '@material-ui/core';
import HomeScreen from '../components/screens/home_screen/HomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

