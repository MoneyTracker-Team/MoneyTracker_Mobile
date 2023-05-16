import React from 'react';
import { View, Text } from 'react-native';
import styles from './DisplayMoney.style';
import theme from '../../../config/theme';

const DisplayMoney = (props) => {
  const { moneyAmount } = props;

  return (
    <View style={styles.money_container}>
      <Text style={styles.money_text}>{moneyAmount} vnđ</Text>
    </View>
  );
};

export default DisplayMoney;
