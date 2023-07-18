import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  btnAddNewdebtLoan: {
    backgroundColor: theme.colors.quaternary,
    width: Dimensions.get('window').width * 0.7,
    marginHorizontal: '14%',
    marginVertical: 20,
    height: 64,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  textAddNewdebtLoan: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  isFriendText: {
    color: theme.colors.white,
  },
});

export default styles;
