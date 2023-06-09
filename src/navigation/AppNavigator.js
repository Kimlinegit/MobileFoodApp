import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import MenuScreen from '../components/screens/MenuScreen';
import CartScreen from '../components/screens/CartScreen';
import OrderScreen from '../components/screens/OrderScreen';
import NotificationScreen from '../components/screens/NotificationScreen';
import AccountScreen from '../components/screens/AccountScreen';
import OrderHistoryScreen from '../components/screens/OrderHistoryScreen';
import CommentScreen from '../components/screens/CommentScreen';
import AuthNavigator from './AuthNavigator';
import ProductDetailScreen from '../components/screens/ProductDetailScreen';
import LoginScreen from '../components/screens/LoginScreen';
import RegisterScreen from '../components/screens/RegisterScreen';
import { AppContextProvider, useAppContext } from '../context/AppContext';
import HomeScreen from '../components/screens/home_screen/HomeScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

const OrderHistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const { userInfo} = useAppContext()

    const renderIcon = (focused, color, size, iconName) => {
    return <Ionicons name={iconName} size={size} color={color} />;
    };
    const userLogedIn = Boolean(userInfo?._id)
    return (
      <NavigationContainer>
        <AppContextProvider>
          <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Menu') {
                    iconName = focused ? 'restaurant' : 'restaurant-outline';
                  } else if (route.name === 'Cart') {
                    iconName = focused ? 'cart' : 'cart-outline';
                  } else if (route.name === 'OrderHistory') {
                    iconName = focused ? 'notifications' : 'notifications-outline';
                  } else if (route.name === 'Account') {
                    iconName = focused ? 'person' : 'person-outline';
                  }
      
                  return renderIcon(focused, color, size, iconName);
                },
              })}
            >
              <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeStack} />
              <Tab.Screen name="Menu" options={{ headerShown: false }} component={MenuStack} />
              <Tab.Screen name="Cart" options={{ headerShown: false }} component={CartStack} />
              {/* <Tab.Screen name="Notification" options={{ headerShown: false }} component={NotificationStack} /> */}
              <Tab.Screen name="OrderHistory" options={{ headerShown: false }} component={OrderHistoryStack} />
              <Tab.Screen name="Account" options={{ headerShown: false }} component={AccountStack} />
            </Tab.Navigator>
        </AppContextProvider>
      </NavigationContainer>
    );
};

export default AppNavigator;


