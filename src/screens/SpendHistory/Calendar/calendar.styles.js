import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const ThemeColor = theme.colors;

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

  example: {
    color: '#fff',
  },
});

export default styles;
