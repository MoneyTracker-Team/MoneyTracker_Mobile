import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  money_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: '100%',
  },
  money_text: {
    fontSize: theme.fontSizes.headline_one,
    color: 'white',
  },
});

export default styles;
