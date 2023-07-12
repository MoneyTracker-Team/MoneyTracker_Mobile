import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: '4%',
    position: 'relative',
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
});

export default styles;
