import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './login.styles.js';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.example}>This is Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('app')} />
    </View>
  );
};

export default LoginScreen;
