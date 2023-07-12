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
  },
  select_month_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '8%',
    marginTop: '10%',
  },
  select_month_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  create_spend_schedule_container: {
    marginTop: '10%',
    alignItems: 'center',
  },
  create_spend_schedule_button: {
    backgroundColor: theme.colors.quaternary,
    alignItems: 'center',
    width: '70%',
    paddingVertical: '6%',
    borderRadius: 40,
  },
  create_spend_schedule_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
});

export default styles;
