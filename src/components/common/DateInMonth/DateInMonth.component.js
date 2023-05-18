import React from 'react';
import { View, Text } from 'react-native';
import styles from './DateInMonth.style';
import theme from '../../../config/theme';

const DateInMonth = (props) => {
  const { date, weekDay, isPressed } = props;

  if (isPressed) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.quaternary }]}>
        <Text style={[styles.date_text, { color: theme.colors.white }]}>{date}</Text>
        <Text style={[styles.week_day_text, { color: theme.colors.white }]}>{weekDay}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.date_text}>{date}</Text>
        <Text style={styles.week_day_text}>{weekDay}</Text>
      </View>
    );
  }
};

export default DateInMonth;
