import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './EditMoney.style';
import theme from '../../../config/theme';

const DisplayMoney = (props) => {
  const { placeholder } = props;

  return (
    <View style={styles.money_container}>
      <TextInput style={styles.money_text} placeholder={placeholder} inputMode="numeric" />
    </View>
  );
};

export default DisplayMoney;
