import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  inputContainer: {
    marginVertical: '4%',
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
  datePicker: {
    height: '40%',
  },
  button: {
    paddingVertical: '4%',
    width: '25%',
    borderRadius: 30,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.black,
    textAlign: 'center',
  },
  genderText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
});

export default styles;
