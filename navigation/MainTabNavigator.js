import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DetailMenuScreen from '../screens/DetailMenuScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';


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
  Links: DetailMenuScreen,
});

DetailMenuStack.navigationOptions = {
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
