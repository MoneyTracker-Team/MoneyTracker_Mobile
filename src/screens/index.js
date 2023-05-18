import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigator from '../navigations/tabs.navigator.js';
import { StackFromAuth } from '../navigations/stacks.navigator.js';
import SpendScheduleScreen from './Schedule/SpendSchedule/SpendScheduleScreen.jsx';

const Stack = createStackNavigator();

export default RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={StackFromAuth} />
        <Stack.Screen name="app" component={MainAppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
