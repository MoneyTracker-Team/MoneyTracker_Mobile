import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000',
    flexDirection: 'column',
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: '30%',
    position: 'relative',
    marginBottom: '5%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    position: 'absolute',
    bottom: '3%',
    right: '5%',
  },
  cameraIcon: {
    zIndex: 2,
    color: theme.colors.quaternary,
    padding: '2%',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 50,
  },
  infoContainer: {
    height: '45%',
    width: '80%',
    marginHorizontal: '10%',
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 10,
  },
  name: {
    fontSize: theme.fontSizes.headline_one,
    textAlign: 'center',
    color: theme.colors.white,
  },
  tableContainer: {
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
    marginStart: '5%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  cell: {
    flex: 1,
    padding: '4%',
  },
  cellText: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
  },
  editIcon: {
    color: theme.colors.white,
    margin: '4%',
    marginTop: '-4%',
    textAlign: 'right',
  },
});

export default styles;
