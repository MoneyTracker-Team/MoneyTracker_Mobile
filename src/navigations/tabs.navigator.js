import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as stack from './stacks.navigator.js';

import Ionicons from 'react-native-vector-icons/Ionicons.js';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5.js';

const Tab = createBottomTabNavigator();

const MainAppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#223F30',
        tabBarInactiveBackgroundColor: '#223F30',
        tabBarActiveTintColor: '#87167C',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: { height: 60 },
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="HomeStack"
        component={stack.StackFromHomeTag}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => <Ionicons name="home-sharp" size={22} color={color} />,
        }}
      />

      {/* History Tab */}
      <Tab.Screen
        name="SpendHistoryStack"
        component={stack.StackFromSpendHistoryTag}
        options={{
          tabBarLabel: 'Lịch sử chi tiêu',
          tabBarIcon: ({ color }) => <AntDesign name="clockcircle" size={22} color={color} />,
        }}
      />

      {/* Statistic Tab */}
      <Tab.Screen
        name="StatisticStack"
        component={stack.StackFromStatisticTag}
        options={{
          tabBarLabel: 'Thống kê',
          tabBarIcon: ({ color }) => <Ionicons name="md-stats-chart" size={22} color={color} />,
        }}
      />

      {/* Setting Tab */}
      <Tab.Screen
        name="SettingStack"
        component={stack.StackFromAccountTag}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={22} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainAppNavigator;
