import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: '5%',
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: theme.fontSizes.headline_two,
    color: theme.colors.white,
  },
  friend: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  listDebt: {
    flex: 1,
    marginHorizontal: '8%',
    marginVertical: '3%',
  },
  title: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  btnPayment: {
    backgroundColor: theme.colors.quaternary,
    width: Dimensions.get('window').width * 0.7,
    marginHorizontal: '14%',
    marginVertical: 20,
    height: 64,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  textPayment: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  positiveAmount: {
    color: theme.colors.light_primary,
    fontWeight: 700,
  },
  negativeAmount: {
    color: theme.colors.tertiary,
    fontWeight: 700,
  },
});

export default styles;
