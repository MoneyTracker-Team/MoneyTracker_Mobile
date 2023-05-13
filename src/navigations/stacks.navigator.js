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
import PersonalAccountScreen from '../screens/AccountSetting/PersonalAccount';
import ChangePasswordScreen from '../screens/AccountSetting/ChangePassword';
import ExpenseCategoriesScreen from '../screens/AccountSetting/ExpenseCategories';
import FriendsListScreen from '../screens/AccountSetting/FriendsList';
import LoansScreen from '../screens/AccountSetting/Loans';
import SavingsScreen from '../screens/AccountSetting/Savings';
import AboutScreen from '../screens/AccountSetting/About';
import EditCategoryScreen from '../screens/AccountSetting/ExpenseCategories/EditCategory';

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
      <Stack.Screen name="PersonalAccount" component={PersonalAccountScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="ExpenseCategories" component={ExpenseCategoriesScreen} />
      <Stack.Screen name="FriendsList" component={FriendsListScreen} />
      <Stack.Screen name="Loans" component={LoansScreen} />
      <Stack.Screen name="Savings" component={SavingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="EditCategoryScreen" component={EditCategoryScreen} />
    </Stack.Navigator>
  );
};

export { StackFromAuth, StackFromHomeTag, StackFromSpendHistoryTag, StackFromStatisticTag, StackFromAccountTag };
