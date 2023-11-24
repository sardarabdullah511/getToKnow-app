import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ForgotPassword2 from '../screens/ForgotPassword2';
import ForgotPassword3 from '../screens/ForgotPassword3';

import MainScreen from '../screens/MainScreen';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Footer from "../screens/Footer";



const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerShown: false
  }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="forgot_password" component={ForgotPassword} />
        <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
        <Stack.Screen name="ForgotPassword3" component={ForgotPassword3} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Footer" component={Footer} />


        
      



      </Stack.Navigator>
    </NavigationContainer>
  );
}
