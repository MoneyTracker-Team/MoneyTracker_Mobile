import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screen
import LoginScreen from '../screens/Auth/Login';
import SignupScreen from '../screens/Auth/Signup';

import HomeScreen from '../screens/Home';
import Calendar from '../screens/HistorySpend/Calendar';

const Stack = createStackNavigator();

const StackFromAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const StackFromHomeTag = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const StackFromHistorySpendTag = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HistoryCalendar" component={Calendar} />
    </Stack.Navigator>
  );
};

const StackFromStatisticTag = () => {
  return {};
};

const StackFromAccountTag = () => {
  return {};
};

export { StackFromAuth, StackFromHomeTag, StackFromHistorySpendTag, StackFromStatisticTag, StackFromAccountTag };
