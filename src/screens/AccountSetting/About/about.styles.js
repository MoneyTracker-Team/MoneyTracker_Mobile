import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    flex: 1,
  },
  logo: {
    width: '36%',
    height: '26%',
    marginHorizontal: '32%',
    marginVertical: '1%',
  },
  aboutContainer: {
    flex: 1,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  about: {
    textAlign: 'justify',
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  contactContainer: {
    flexDirection: 'column',
    marginHorizontal: '3%',
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: '1%',
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: '2%',
    padding: '1%',
  },
  icon1: {
    backgroundColor: '#03a9f4',
    borderRadius: 20,
    marginHorizontal: '2%',
    padding: '1%',
  },
  contact: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
    alignSelf: 'center',
  },
});

export default styles;
