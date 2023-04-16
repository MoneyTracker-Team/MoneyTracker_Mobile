import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './spendSchedule.styles.js';

const SpendScheduleScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.example}>This is SpendSchedule Screen</Text>
      <Button title="Xem chi tiết" onPress={() => navigation.navigate('ScheduleDetail')} />
    </View>
  );
};

export default SpendScheduleScreen;
