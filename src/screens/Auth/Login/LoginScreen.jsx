import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './login.styles.js';
import { StatusBar } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Text style={styles.example}>This is Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('app')} />
      <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default LoginScreen;
