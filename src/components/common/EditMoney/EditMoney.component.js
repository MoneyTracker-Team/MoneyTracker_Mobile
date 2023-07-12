import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './EditMoney.style';
import theme from '../../../config/theme';

const DisplayMoney = (props) => {

  const { placeholder, moneySpend, setValue } = props;

  const [money, setMoney] = useState(0);

  const handleMoneyChange = (value) => {
    setMoney(value);
    setValue(value);
  };

  return (
    <View style={styles.money_container}>
      <TextInput
        style={styles.money_text}
        placeholder={placeholder}
        inputMode="numeric"
        value={money == 0 ? moneySpend?.toString() : money.toString()}
        onChangeText={handleMoneyChange}
      />
    </View>
  );
};

export default DisplayMoney;
