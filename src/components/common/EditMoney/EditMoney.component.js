import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './EditMoney.style';
import theme from '../../../config/theme';

const DisplayMoney = (props) => {
  const { placeholder, amount } = props;
  const [amountMoney, setAmountMoney] = useState(amount);

  return (
    <View style={styles.money_container}>
      <TextInput
        style={styles.money_text}
        placeholder={placeholder}
        inputMode="numeric"
        value={amountMoney}
        onChangeText={setAmountMoney}
      />
    </View>
  );
};

export default DisplayMoney;
