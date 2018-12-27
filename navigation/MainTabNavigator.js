import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DetailMenuScreen from '../screens/DetailMenuScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';

import FormInput1 from '../screens/subscreen/FormInput1';
import FormInput2 from '../screens/subscreen/FormInput2';
import FormInput3 from '../screens/subscreen/FormInput3';
import FormInput4 from '../screens/subscreen/FormInput4';
import FormInput5 from '../screens/subscreen/FormInput5';
import FormInput6 from '../screens/subscreen/FormInput6';
import FormInput7 from '../screens/subscreen/FormInput7';
import FormInput8 from '../screens/subscreen/FormInput8';
import FormInput9 from '../screens/subscreen/FormInput9';
import FormInput10 from '../screens/subscreen/FormInput10';
import FormInput11 from '../screens/subscreen/FormInput11';



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home': 'md-home'}
    />
  ),
};

const DetailMenuStack = createStackNavigator({
  DetailScreen:{
    screen: DetailMenuScreen
  },
  FormInput1: {
    screen: FormInput1,
   },
  FormInput2:{
    screen: FormInput2
  },
  FormInput3:{
    screen: FormInput3
  },
  FormInput4:{
    screen: FormInput4
  },
  FormInput5:{
    screen: FormInput5
  },
  FormInput6:{
    screen: FormInput6
  },
  FormInput7:{
    screen: FormInput7
  },
  FormInput8:{
    screen: FormInput8
  },
  FormInput9:{
    screen: FormInput9
  },
  FormInput10:{
    screen: FormInput10
  },
  FormInput11:{
    screen: FormInput11
  },
});

DetailMenuStack.navigationOptions = {
  screen: DetailMenuScreen,
  tabBarLabel: 'จัดการข้อมูล',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'ข้อมูลส่วนตัว',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const NotificationStack = createStackNavigator({
  NotificationTab: NotificationScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: 'แจ้งเตือน',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
    /> 
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  DetailMenuStack,
  NotificationStack,
  SettingsStack,
},{
  tabBarVisible:false,
});
