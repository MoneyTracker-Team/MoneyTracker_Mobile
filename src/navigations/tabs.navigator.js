import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as stack from './stacks.navigator.js';

const Tab = createBottomTabNavigator();

const MainAppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* <Tab.Screen name="Login" component={stack.StackFromAuth} /> */}
      <Tab.Screen name="Home" component={stack.StackFromHomeTag} />
      <Tab.Screen name="SpendHistory" component={stack.StackFromHistorySpendTag} />
    </Tab.Navigator>
  );
};

export default MainAppNavigator;
