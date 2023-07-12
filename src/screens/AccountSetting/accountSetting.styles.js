import { StyleSheet } from 'react-native';
import theme from '../../config/theme';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  user_info_container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '33%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  image: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  fullname: {
    fontWeight: 600,
    color: 'white',
    alignSelf: 'center',
    fontSize: theme.fontSizes.text_body,
  },
  money: {
    fontWeight: 600,
    color: theme.colors.quaternary,
    alignSelf: 'center',
    marginTop: 4,
    fontSize: theme.fontSizes.headline_one,
  },
  list_action: {
    display: 'flex',
    flexDirection: 'column',
    height: '66%',
  },
  action: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 40,
    marginRight: 40,
    display: 'flex',
    flexDirection: 'row',
  },
  actionBtn: {
    flex: 1,
  },
  action_icon: {
    color: theme.colors.quaternary,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 50,
    marginEnd: '8%',
  },
  action_title: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
    textAlignVertical: 'center',
    flex: 1,
  },
  next_icon: {
    color: theme.colors.white,
    padding: 8,
  },
});

export default styles;
