import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './signup.style.js';
import { StatusBar } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Text style={styles.signupText}>This is signup screen</Text>
      <Button title="Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SignupScreen;
