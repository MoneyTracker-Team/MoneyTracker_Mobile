import React from 'react';
import { View, Text } from 'react-native';
import styles from './OneDaySpending.style';

const OneDaySpending = (props) => {
  const { date, limitMoney, spentMoney } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.limit_money_container}>
          <Text style={styles.limit_money_text}>{limitMoney}</Text>
          <Text style={styles.desc_text}>Giới hạn</Text>
        </View>
        <View style={styles.spent_money_container}>
          <Text style={styles.spent_money_text}>{spentMoney}</Text>
          <Text style={styles.desc_text}>Đã tiêu</Text>
        </View>
      </View>
    </View>
  );
};

export default OneDaySpending;
