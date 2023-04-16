import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './home.styles.js';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.example}>This is Home Screen</Text>
      <Button title="Tạo kế hoạch chi tiêu" onPress={() => navigation.navigate('SpendSchedule')} />
    </View>
  );
};

export default HomeScreen;
