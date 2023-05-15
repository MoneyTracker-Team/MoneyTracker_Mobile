import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../../config/theme';
const imageHeight = Dimensions.get('window').width * 0.12;
const styles = StyleSheet.create({
  frienddata: {
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: '2%',
    marginHorizontal: '8%',
    height: imageHeight,
  },
  friendAvatarContainer: {},
  friendAvatar: {
    marginEnd: '5%',
    width: imageHeight,
    height: imageHeight,
    borderRadius: 50,
  },
  friendName: {
    flex: 1,
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
    fontWeight: 600,
    marginVertical: '3%',
  },
  delete_button: {
    margin: '1%',
  },
  delete_icon: {
    padding: 10,
    // margin: '1%',
    backgroundColor: '#29322e',
    borderRadius: 14,
  },
});

export default styles;
