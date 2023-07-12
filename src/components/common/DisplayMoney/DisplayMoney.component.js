import React from 'react';
import { View, Text } from 'react-native';
import styles from './DisplayMoney.style';
import theme from '../../../config/theme';
import formatNumber from '../../../utils/formatNumber';
const DisplayMoney = (props) => {
  const { moneyAmount } = props;

  return (
    <View style={styles.money_container}>
      <Text style={styles.money_text}>{formatNumber(moneyAmount ? moneyAmount : 0)} vnđ</Text>
    </View>
  );
};

export default DisplayMoney;
