import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  container: {
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 16,
    width: 150,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 10,
    marginTop: 4,
  },
});

export default styles;
