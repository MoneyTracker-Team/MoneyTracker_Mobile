import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  button: {
    paddingVertical: '4%',
    width: '25%',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.black,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: '10%',
  },
});

export default styles;
