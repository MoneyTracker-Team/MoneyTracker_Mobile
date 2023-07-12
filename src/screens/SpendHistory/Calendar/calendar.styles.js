import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const ThemeColor = theme.colors;
const ThemFontSize = theme.fontSizes;

const styles = StyleSheet.create({
  // CALENDAR
  calendarWrapper: {
    minHeight: 300,
    padding: 4,
  },

  calendarHeader: {
    display: 'flex',
    flexDirection: 'row',
  },

  calendarHeaderText: {
    color: '#fff',
    opacity: 0.5,
    width: '14.285%',
    textAlign: 'center',
  },

  // calendar body
  calendarBody: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },

  calendarItemWrapNotCurrMonth: {
    width: '13.285%',
    backgroundColor: 'rgb(128, 128, 128)',
    paddingTop: 12,
    paddingBottom: 12,
    margin: '0.5%',
    opacity: 0.3,
    borderRadius: 4,
  },

  calendarItemWrap: {
    position: 'relative',
    width: '13.285%',
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    // paddingTop: 12,
    // paddingBottom: 12,
    margin: '0.5%',
    borderRadius: 4,
  },

  calendarItemText: {
    color: '#fff',
    textAlign: 'center',
  },

  todayItemWrap: {
    backgroundColor: ThemeColor.quaternary,
  },

  quantitySpendWrap: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -2,
    right: -2,
    width: 18,
    height: 18,
    backgroundColor: ThemeColor.tertiary,
    borderRadius: 100,
  },

  quantitySpendText: {
    fontWeight: '600',
  },

  bgGreen: {
    backgroundColor: ThemeColor.light_green,
  },

  // CONTROL MONTH
  controlMonth: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },

  buttonControlMonth: {
    padding: 25,
    fontSize: 30,
    color: '#fff',
  },

  textControlMonth: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  // STATISTIC
  statisticContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  statisticWrap: {
    backgroundColor: 'white',
    width: '90%',
    height: 200,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  statisticItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    flexDirection: 'column',
    gap: 4,
    borderRadius: 20,
  },

  statisticItemPressable: {
    backgroundColor: ThemeColor.tertiary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  itemlargeTextPressable: {
    color: 'white',
  },

  itemlargeText: {
    fontSize: ThemFontSize.headline_two,
    fontWeight: '600',
  },

  itemSmallText: {},

  example: {
    color: '#fff',
  },

  // MODAL:
  modal_background: {
    flex: 1,
    backgroundColor: 'rgba(54, 54, 54, 0.75)',
    marginTop: '14%',
    justifyContent: 'center',
  },

  friend_item_container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.text_blur,
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 0.8,
  },
  friend_item: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
    textAlignVertical: 'center',
  },
  btn_delete_friend_item_container: {
    justifyContent: 'center',
  },
  btn_delete_friend_item: {
    color: theme.colors.black,
  },
  modal_spend_container: {
    height: '65%',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 500,
  },
  modal_spend_header: {
    backgroundColor: theme.colors.quaternary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '14%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  modal_spend_content: {
    backgroundColor: theme.colors.white,
    height: '90%',
    paddingBottom: '2%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modal_spend_scroll_view_content: {
    alignItems: 'center',
    marginTop: '2%',
    paddingBottom: '5%',
  },
  btn_spend: {
    flex: 1,
    width: '88%',
    backgroundColor: theme.colors.white,
    elevation: 4,
    shadowColor: theme.colors.black,
    borderRadius: 25,
    justifyContent: 'center',
    marginVertical: '2%',
    paddingVertical: '3%',
  },
  spend: {
    marginVertical: '1%',
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  spend_img: {
    padding: 20,
    borderRadius: 50,
    marginEnd: '8%',
  },
  spend_img_display: {
    paddingHorizontal: '6%',
    height: '90%',
    marginLeft: '1%',
    borderRadius: 50,
    marginEnd: '8%',
    alignSelf: 'center',
  },
  text_container: {
    flex: 1,
  },
  spend_name: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.black,
    textAlignVertical: 'center',
    fontWeight: '400',
  },
  spend_text: {
    color: '#6F6F6F',
    fontSize: theme.fontSizes.text_body_small,
  },
  spend_icon: {
    color: theme.colors.quaternary,
    padding: 8,
  },
  line: {
    height: 1,
    backgroundColor: theme.colors.quaternary,
  },
});

export default styles;
