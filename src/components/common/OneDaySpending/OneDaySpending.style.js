import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../config/theme';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: windowWidth,
    height: 300,
    alignItems: 'center',
    //marginHorizontal: -50,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(85, 103, 104, 0.38)',
    width: windowWidth - 120,
    alignItems: 'center',
    borderRadius: 30,
  },
  date: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.headline_two,
    marginTop: 12,
  },
  limit_money_container: {
    backgroundColor: 'rgba(75, 222, 81, 0.23)',
    width: 224,
    height: 62,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
  },
  limit_money_text: {
    color: '#4FE525',
    fontSize: theme.fontSizes.headline_two,
    alignSelf: 'center',
    lineHeight: 60,
    fontWeight: 'bold',
  },
  spent_money_container: {
    backgroundColor: 'rgba(224, 121, 25, 0.23)',
    width: 224,
    height: 62,
    borderRadius: 10,
    marginTop: 40,
  },
  spent_money_text: {
    color: theme.colors.tertiary,
    fontSize: theme.fontSizes.headline_two,
    alignSelf: 'center',
    lineHeight: 62,
    fontWeight: 'bold',
  },
  desc_text: {
    color: theme.colors.light_white,
    fontSize: theme.fontSizes.text_body_small,
    alignSelf: 'flex-end',
    marginTop: '-10%',
    marginRight: '5%',
  },
});

export default styles;
