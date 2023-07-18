import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  money_amount_wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: '30%',
  },
  money_amount_container: {
    margin: '5%',
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
    paddingHorizontal: '5%',
    borderRadius: 10,
  },
  subtract_button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
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
  chartContainer: {
    width: 200,
    marginHorizontal: '5%',
  },
  line: {
    height: 60,
    overflow: 'scroll',
    width: 1,
    backgroundColor: theme.colors.quaternary,
  },
  timelines: {
    position: 'absolute',
    flexDirection: 'row',
  },
  circle: {
    marginTop: '15%',
    marginLeft: '-4%',
    marginRight: '15%',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.quaternary,
    zIndex: 10,
  },
});

export default styles;
