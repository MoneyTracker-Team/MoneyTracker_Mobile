import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  overview_container: {
    marginTop: '4%',
    marginLeft: '6%',
  },
  overview_title_text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: theme.fontSizes.text_body_small,
  },
  overview_money_text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.headline_two,
    fontWeight: 'bold',
  },
  overview_desc_container: {
    flexDirection: 'row',
  },
  overview_desc_text: {
    fontSize: theme.fontSizes.text_body_small,
    color: theme.colors.tertiary,
  },
  one_day_spending_scrollview: {
    paddingTop: '8%',
  },
  date_scroll_view_container: {
    marginTop: '6%',
    backgroundColor: theme.colors.white,
    paddingVertical: '4%',
  },
  detail_container: {
    marginHorizontal: '6%',
    marginVertical: '2.5%',
  },
});

export default styles;
