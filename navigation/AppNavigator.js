import React, { Component} from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import ForgotPasswordScreen from './../screens/ForgotPasswordScreen';


const AuthStackNavigator = createStackNavigator({
 LoginScreen: LoginScreen,
 ForgotPassScreen: ForgotPasswordScreen,
})



export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
 // Main: MainTabNavigator,
 AuthLoading: AuthLoadingScreen,
 Auth: AuthStackNavigator,
 App: MainTabNavigator,
});