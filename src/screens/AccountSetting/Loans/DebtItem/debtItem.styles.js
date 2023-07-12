import { StyleSheet } from 'react-native';
import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: '2%',
    marginHorizontal: '4%',
  },
  itemBody: {
    backgroundColor: 'rgba(166, 185, 185,0.39)',
    borderRadius: 12,
    flex: 1,
    flexDirection: 'column',
    padding: '3%',
  },
  info: {
    flexDirection: 'row',
  },
  itemImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: '3%',
  },
  nameCotainer: {
    flexDirection: 'column',
    flex: 1,
  },
  itemName: {
    fontWeight: 500,
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  isFriendText: {
    fontWeight: 400,
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body_small,
  },
  moneyContainer: {
    alignSelf: 'center',
    padding: '3%',
    width: '23%',
    alignItems: 'center',
    borderRadius: 10,
  },
  moneyAmount: {
    fontWeight: 500,
    color: '#ccc',
    fontSize: theme.fontSizes.text_body,
  },
  noteContainer: {
    flex: 1,
    marginHorizontal: '15%',
    marginVertical: '5%',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  noteText: {
    fontWeight: 400,
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
});

export default styles;
