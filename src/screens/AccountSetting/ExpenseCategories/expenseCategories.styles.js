import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 40,
  },
  itemLogo: {
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  listTab: {
    marginTop: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnTab: {
    width: Dimensions.get('window').width / 2.5,
    height: 44,
    borderRadius: 6,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  btnTabActive: {
    backgroundColor: theme.colors.quaternary,
  },
  textTab: {
    color: theme.colors.quaternary,
    fontSize: theme.fontSizes.text_body,
  },
  textTabActive: {
    color: theme.colors.white,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 500,
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  btnAddNewCategory: {
    backgroundColor: theme.colors.quaternary,
    width: Dimensions.get('window').width * 0.7,
    marginHorizontal: '14%',
    marginVertical: 20,
    height: 64,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  textAddNewCategory: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  action_icon: {
    color: theme.colors.white,
    padding: 22,
    backgroundColor: '#29322e',
    borderRadius: 14,
  },
  modalView: {
    width: '100%',
    height: 420,
    position: 'absolute',
    bottom: -Dimensions.get('window').height,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    elevation: 5,
  },
  modalViewTop: {
    width: '100%',
    height: 420,
    marginVertical: 10,
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    elevation: 5,
  },
  closeModal: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalLabel: {
    fontSize: theme.fontSizes.text_body,
    fontWeight: 500,
  },
  modalInput: {
    height: 50,
    backgroundColor: '#e5e5e5',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  btnSaveCategory: {
    backgroundColor: theme.colors.quaternary,
    width: Dimensions.get('window').width * 0.3,
    marginHorizontal: '8%',
    marginVertical: 0,
    height: 60,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chooseImage: {
    position: 'relative',
    backgroundColor: '#ccc',
    width: '70%',
    marginHorizontal: '15%',
    marginVertical: '3%',
    height: '40%',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: theme.colors.black,
    justifyContent: 'center',
  },
  choosedImage: {
    position: 'relative',
    width: '70%',
    marginHorizontal: '15%',
    marginVertical: '3%',
    height: '40%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  chooseImageBtn: {
    position: 'absolute',
    top: '35%',
    left: '40%',
    zIndex: 10,
  },
  action_icon_1: {
    color: theme.colors.quaternary,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 50,
  },
  btnContainer: {
    flexDirection: 'row',
  },
});

export default styles;
