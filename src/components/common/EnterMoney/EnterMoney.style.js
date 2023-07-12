import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '30%',
    marginHorizontal: '8%',
    paddingBottom: 28,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  close_button: {
    alignSelf: 'flex-end',
    marginTop: 14,
    marginRight: 14,
  },
  title: {
    fontSize: theme.fontSizes.text_body,
    alignSelf: 'flex-start',
    marginTop: 18,
    marginLeft: 28,
  },
  input_money: {
    marginTop: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: theme.colors.quaternary,
    borderRadius: 20,
    backgroundColor: 'rgba(217, 217, 217, 0.7)',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  cancel_button: {
    backgroundColor: '#BC1331',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  cancel_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  save_button: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: theme.colors.quaternary,
    borderWidth: 1,
  },
  save_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.quaternary,
  },
});

export default styles;
