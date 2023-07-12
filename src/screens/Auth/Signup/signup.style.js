import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../config/theme';
const styles = StyleSheet.create({
  example: {
    color: '#000',
  },
  wrapper: {
    flex: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 'auto',
  },
  appInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appInfo: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: '5%',
  },
  name: {
    fontSize: theme.fontSizes.headline_two,
    color: theme.colors.white,
    textAlign: 'center',
  },
  slogan: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
    marginHorizontal: '8%',
  },
  inputContainer: {
    marginVertical: '2.4%',
  },
  label: {
    marginBottom: '2%',
    marginStart: '5%',
    color: theme.colors.white,
  },
  input: {
    backgroundColor: '#ccc',
    width: '80%',
    marginHorizontal: '10%',
    padding: '3%',
    borderRadius: 20,
    color: theme.colors.black,
    fontSize: theme.fontSizes.text_body,
  },
  eyeBtn: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '50%',
    right: '12%',
  },
  btnAuth: {
    backgroundColor: theme.colors.tertiary,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    marginVertical: 20,
    height: 54,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  textAuth: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  forget_container: {
    flexDirection: 'row',
    marginLeft: '10%',
  },
  forget_title: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  forget_button: {
    color: theme.colors.quaternary,
    textDecorationLine: 'underline',
    fontSize: theme.fontSizes.text_body,
    fontWeight: 600,
    marginLeft: '2%',
  },
  forget_button1: {
    color: theme.colors.quaternary,
    textDecorationLine: 'underline',
    fontSize: theme.fontSizes.text_body,
    fontWeight: 600,
    marginVertical: '3%',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: '10%',
  },
});

export default styles;
