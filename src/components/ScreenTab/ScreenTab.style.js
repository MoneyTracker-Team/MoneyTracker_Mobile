import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  listTab: {
    marginTop: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnTab2: {
    width: Dimensions.get('window').width / 2.5,
    height: 44,
    borderRadius: 6,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  btnTab3: {
    width: Dimensions.get('window').width / 3.5,
    height: 44,
    borderRadius: 6,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  btnTabActive: {
    backgroundColor: theme.colors.quaternary,
  },
  textTab: {
    color: theme.colors.quaternary,
    fontSize: theme.fontSizes.text_body,
  },
  textTabActive: {
    color: theme.colors.white,
  },
});

export default styles;
