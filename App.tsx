import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginScreen from './app/screen/auth/LoginScreen';
import OTPScreen from './app/screen/auth/OTPScreen';
import RegisterScreen from './app/screen/auth/RegisterScreen';
import HomeScreen from './app/screen/main/HomeScreen';
export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
  OTPScreen: {
    user: string;
    password: string;
  };
};
const stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="LoginScreen" component={LoginScreen} />
        <stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="OTPScreen" component={OTPScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
