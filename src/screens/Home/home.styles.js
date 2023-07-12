import { StyleSheet } from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  spendButton: {
    width: 140,
    height: 50,
    backgroundColor: theme.colors.quaternary,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  spendButtonText: {
    color: theme.colors.white,
    fontSize: 20,
  },

  scrollViewSpend: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },

  // Spend Item

  spendItem: {
    backgroundColor: theme.colors.light_white,
    opacity: 0.8,
    width: 240,
    height: 110,
    padding: 4,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },

  spendImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    flexShrink: 0,
  },

  spendContent: {
    flex: 1,
  },

  // Schedule Button
  scheduleWrapBtn: {
    height: 64,
    width: 300,
    position: 'relative',
  },

  cicleIconBtn: {
    width: 58,
    height: 58,
    borderRadius: 50,
    backgroundColor: theme.colors.quaternary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 3,
    left: 3,
  },

  scheduleBtn: {
    paddingVertical: 20,
    paddingLeft: 58,
    height: 64,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: theme.colors.quaternary,
    borderColor: theme.colors.light_white,
    borderWidth: 0.5,
    opacity: 0.6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
