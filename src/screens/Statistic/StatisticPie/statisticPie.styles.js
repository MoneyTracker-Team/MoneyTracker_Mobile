import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statistic_container: {
    height: '75%',
    marginTop: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pie_chart_text: {
    color: theme.colors.white,
    fontSize: 20,
  },
  spending_type_container: {
    height: '25%',
    width: '100%',
    backgroundColor: 'red',
  },
  select_month_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '8%',
  },
  select_month_text: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
});

export default styles;
