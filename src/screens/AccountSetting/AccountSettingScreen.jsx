import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './accountSetting.styles.js';

const AccountSettingScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.example}>This is AccountSetting Screen</Text>
      <Button title="Logout" onPress={() => navigation.navigate('auth', { screen: 'Login' })} />
    </View>
  );
};

export default AccountSettingScreen;
