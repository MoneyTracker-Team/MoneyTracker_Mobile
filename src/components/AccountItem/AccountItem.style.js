import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.white,
    width: '95%',
    height: Dimensions.get('window').height * 0.09,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '0.8%',
  },
  AvatarContainer: {
    marginHorizontal: '5%',
  },
  Avatar: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  Name: {
    flex: 1,
    color: theme.colors.black,
    fontSize: theme.fontSizes.text_body,
    fontWeight: 700,
  },
  add_icon: {
    color: theme.colors.quaternary,
    marginHorizontal: '2%',
  },
});

export default styles;
