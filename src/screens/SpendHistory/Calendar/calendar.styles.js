import { StyleSheet } from 'react-native';

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
    backgroundColor: 'grey',
    paddingTop: 12,
    paddingBottom: 12,
    margin: '0.5%',
  },

  calendarItemWrap: {
    width: '13.285%',
    backgroundColor: 'blue',
    paddingTop: 12,
    paddingBottom: 12,
    margin: '0.5%',
  },

  calendarItemText: {
    color: '#fff',
    textAlign: 'center',
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

  example: {
    color: '#000',
  },
});

export default styles;
