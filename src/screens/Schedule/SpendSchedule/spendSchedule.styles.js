import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  money_amount_container: {
    margin: '5%',
    height: '30%',
  },
  normal_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  money_container: {
    height: '30%',
    marginVertical: '4%',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
  },
  add_button: {
    backgroundColor: theme.colors.quaternary,
    paddingVertical: '3%',
    paddingHorizontal: '8%',
    borderRadius: 10,
  },
  subtract_button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: '3%',
    paddingHorizontal: '8%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.quaternary,
  },
  disabled_add_button: {
    backgroundColor: theme.colors.quaternary,
    paddingVertical: '3%',
    paddingHorizontal: '8%',
    borderRadius: 10,
    opacity: 0.4,
  },
  disabled_subtract_button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: '3%',
    paddingHorizontal: '8%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.quaternary,
    opacity: 0.4,
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
    marginHorizontal: '7%',
    // flex: 1,
    height: '30%',
  },
  select_month_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: '7%',
    paddingVertical: 30,
    flexShrink: 0,
  },
  select_month_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  create_spend_schedule_container: {
    alignItems: 'center',
  },
  create_spend_schedule_button: {
    backgroundColor: theme.colors.quaternary,
    alignItems: 'center',
    width: '70%',
    paddingVertical: 25,
    borderRadius: 40,
  },
  create_spend_schedule_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
});

export default styles;
