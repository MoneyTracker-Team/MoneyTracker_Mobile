import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    width: 40,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  day_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.text_blur,
  },
  week_day_text: {
    fontSize: theme.fontSizes.text_body_small,
    color: theme.colors.text_blur,
  },
});

export default styles;
