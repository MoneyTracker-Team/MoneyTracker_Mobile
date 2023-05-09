import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  money_amount_container: {
    margin: 24,
  },
  normal_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  money_container: {
    marginVertical: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 70,
  },
  money_text: {
    fontSize: theme.fontSizes.headline_one,
    color: 'white',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  add_button: {
    backgroundColor: theme.colors.quaternary,
    paddingVertical: 10,
    paddingHorizontal: 38,
    borderRadius: 10,
  },
  subtract_button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.quaternary,
  },
  add_button_text: {
    fontSize: theme.fontSizes.text_body,
    color: 'white',
  },
  subtract_button_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.quaternary,
  },
  modal_container: {
    flex: 1,
    backgroundColor: 'rgba(54, 54, 54, 0.75)',
  },
  detail_container: {
    marginHorizontal: 24,
    marginVertical: 30,
  },
  select_month_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 20,
  },
  select_month_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  create_spend_schedule_container: {
    marginTop: 36,
    alignItems: 'center',
  },
  create_spend_schedule_button: {
    backgroundColor: theme.colors.quaternary,
    alignItems: 'center',
    width: '70%',
    paddingVertical: 18,
    borderRadius: 40,
  },
  create_spend_schedule_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
});

export default styles;
