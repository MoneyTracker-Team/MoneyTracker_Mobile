import React from 'react';
import { StyleSheet, StatusBar, View, Text, SafeAreaView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigator from '../navigations/tabs.navigator.js';
import { StackFromAuth } from '../navigations/stacks.navigator.js';

const Stack = createStackNavigator();

export default RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={StackFromAuth} />
        <Stack.Screen name="app" component={MainAppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <Text>This is Root Component</Text>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
