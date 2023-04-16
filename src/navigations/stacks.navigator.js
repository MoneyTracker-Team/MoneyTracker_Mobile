import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Screen
import LoginScreen from '../screens/Auth/Login';
import SignupScreen from '../screens/Auth/Signup';

import HomeScreen from '../screens/Home';
import SpendScheduleScreen from '../screens/Schedule/SpendSchedule/SpendScheduleScreen';
import ScheduleDetailScreen from '../screens/Schedule/ScheduleDetail';

import Calendar from '../screens/SpendHistory/Calendar';

import StatisticScreen from '../screens/Statistic/StatisticPie';
import AccountSettingScreen from '../screens/AccountSetting';

const Stack = createStackNavigator();

// Auth Stack
const StackFromAuth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

// Home Stack
const StackFromHomeTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => <></>, title: 'Trang chủ' }} />
      <Stack.Screen name="SpendSchedule" component={SpendScheduleScreen} options={{ title: 'Kế hoạch chi tiêu' }} />
      <Stack.Screen name="ScheduleDetail" component={ScheduleDetailScreen} options={{ title: 'Chi tiết kế hoạch' }} />
    </Stack.Navigator>
  );
};

// History Stack
const StackFromSpendHistoryTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen name="HistoryCalendar" component={Calendar} options={{ headerLeft: () => <></> }} />
    </Stack.Navigator>
  );
};

// Statistic Stack
const StackFromStatisticTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen name="Statistic" component={StatisticScreen} options={{ headerLeft: () => <></> }} />
    </Stack.Navigator>
  );
};

// Setting Stack
const StackFromAccountTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen name="AccountSetting" component={AccountSettingScreen} options={{ headerLeft: () => <></> }} />
    </Stack.Navigator>
  );
};

export { StackFromAuth, StackFromHomeTag, StackFromSpendHistoryTag, StackFromStatisticTag, StackFromAccountTag };
