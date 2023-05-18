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
    paddingTop: 12,
    paddingBottom: 12,
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
});

export default styles;
