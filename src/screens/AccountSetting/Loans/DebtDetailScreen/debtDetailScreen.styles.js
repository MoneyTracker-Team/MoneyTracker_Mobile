import { StyleSheet } from 'react-native';
import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    margin: '5%',
  },
  itemAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: '3%',
  },
  imageContainer: {
    width: '80%',
    height: '40%',
    borderRadius: 22,
    overflow: 'hidden',
    marginHorizontal: '10%',
  },
  itemImage: {
    width: '100%',
    height: '100%',
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
  title: {
    color: theme.colors.quaternary,
    fontSize: theme.fontSizes.text_body,
    marginHorizontal: '10%',
    marginVertical: '3%',
  },
  content: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  btnEditDetail: {
    backgroundColor: 'rgba(135, 22, 124, 0.2)',
    width: '35%',
    marginLeft: '50%',
    marginVertical: '3%',
    height: '8%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    borderColor: theme.colors.quaternary,
    borderWidth: 1,
  },
  textEditDetail: { color: theme.colors.quaternary, textAlign: 'center' },
});

export default styles;
