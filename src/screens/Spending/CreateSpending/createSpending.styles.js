import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  money_amount_container: {
    height: '35%',
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
    alignItems: 'center',
  },
  money_container: {
    height: '28%',
    width: '85%',
    marginTop: '22%',
  },
  btn_create: {
    backgroundColor: theme.colors.quaternary,
    height: '20%',
    borderRadius: 10,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8%',
    marginLeft: '50%',
  },
  btn_create_text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  //   category_container: {
  //     flex: 1,
  //     alignItems: 'center',
  //   },
  category_scroll_view: {
    width: '100%',
  },
  category_scroll_view_content: {
    alignItems: 'center',
  },
  category_sub_container1: {
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
    height: 270,
    width: '90%',
    marginTop: '3%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_category: {
    flex: 1,
    width: '88%',
    backgroundColor: '#424A44',
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: '2.5%',
  },
  category: {
    marginVertical: '1%',
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  category_icon: {
    color: theme.colors.quaternary,
    padding: 8,
    backgroundColor: theme.colors.black,
    borderRadius: 50,
    marginEnd: '8%',
  },
  category_title: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.white,
    textAlignVertical: 'center',
    flex: 1,
  },
  next_icon: {
    color: theme.colors.quaternary,
    padding: 8,
  },
  btn_more: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn_more_text: {
    color: theme.colors.quaternary,
    marginRight: '2%',
    fontSize: theme.fontSizes.text_body,
  },
  btn_more_icon: {
    color: theme.colors.quaternary,
  },
  more_category_container: {
    width: '100%',
    alignItems: 'center',
  },
  category_sub_container2: {
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
    height: 135,
    width: '90%',
    marginTop: '3%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_more_category_container: {
    marginVertical: '4%',
    flexDirection: 'row',
  },
  btn_more_category: {
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
    height: 80,
    width: '43%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: '2%',
  },
  btn_more_category_icon: {
    color: theme.colors.white,
  },
  modal_background: {
    flex: 1,
    backgroundColor: 'rgba(54, 54, 54, 0.75)',
    marginTop: '14%',
    justifyContent: 'center',
  },
  modal_spending_type_container: {
    marginHorizontal: '8%',
    marginVertical: '25%',
    borderRadius: 50,
  },
  modal_spending_type_header: {
    backgroundColor: theme.colors.quaternary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '9%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modal_spending_type_header_text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  modal_spending_type_content: {
    backgroundColor: theme.colors.white,
    height: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modal_spending_type_scroll_view_content: {
    alignItems: 'center',
    marginTop: '2%',
    paddingBottom: '5%',
  },
  btn_spending_type: {
    flex: 1,
    width: '88%',
    backgroundColor: theme.colors.white,
    elevation: 4,
    shadowColor: theme.colors.black,
    borderRadius: 25,
    justifyContent: 'center',
    marginVertical: '2%',
    paddingVertical: '2%',
  },
  spending_type: {
    marginVertical: '1%',
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  spending_type_img: {
    padding: 16,
    borderRadius: 50,
    marginEnd: '8%',
  },
  spending_type_img_display: {
    paddingHorizontal: '7%',
    height: '90%',
    borderRadius: 50,
    marginEnd: '8%',
    alignSelf: 'center',
  },
  spending_type_name: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.black,
    textAlignVertical: 'center',
    flex: 1,
    fontWeight: '400',
  },
  spending_type_icon: {
    color: theme.colors.quaternary,
    padding: 8,
  },
  modal_friend_container: {
    marginHorizontal: '8%',
    marginVertical: '42%',
  },
  modal_friend_header: {
    backgroundColor: theme.colors.quaternary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modal_friend_header_text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  search_friend_container: {
    height: '13%',
    backgroundColor: theme.colors.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  search_friend_text_input: {
    backgroundColor: '#D9D9D9',
    height: '75%',
    width: '65%',
    borderRadius: 23,
    paddingLeft: 15,
  },
  btn_search_friend: {
    color: theme.colors.quaternary,
    backgroundColor: 'rgba(217, 217, 217, 0.39)',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 15,
  },
  modal_friend_content: {
    backgroundColor: theme.colors.white,
    height: '73%',
    paddingBottom: '2%',
  },
  modal_friend_scroll_view_content: {
    alignItems: 'center',
    marginTop: '2%',
    paddingBottom: '5%',
  },
  btn_friend: {
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
  friend: {
    marginVertical: '1%',
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  friend_img: {
    padding: 20,
    borderRadius: 50,
    marginEnd: '8%',
  },
  friend_img_display: {
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
  friend_name: {
    fontSize: theme.fontSizes.text_body,
    color: theme.colors.black,
    textAlignVertical: 'center',
    fontWeight: '400',
  },
  friend_text: {
    color: '#6F6F6F',
    fontSize: theme.fontSizes.text_body_small,
  },
  friend_icon: {
    color: theme.colors.quaternary,
    padding: 8,
  },
  line: {
    height: 1,
    backgroundColor: theme.colors.quaternary,
  },
  new_friend_container: {
    height: '20%',
    backgroundColor: theme.colors.white,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  add_friend_input_container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_friend_text: {
    fontSize: theme.fontSizes.text_body_small,
    marginVertical: '1%',
    marginLeft: '10%',
  },
  add_friend_text_input: {
    backgroundColor: '#D9D9D9',
    height: '100%',
    width: '70%',
    borderRadius: 10,
    marginRight: '2%',
    paddingLeft: 15,
  },
  btn_add_friend: {
    color: theme.colors.quaternary,
    backgroundColor: 'rgba(217, 217, 217, 0.39)',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 15,
  },
  model_calendar_container: {
    borderRadius: 20,
    width: '95%',
    alignSelf: 'center',
  },
  modal_calendar_header: {
    backgroundColor: theme.colors.quaternary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '12 %',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modal_calendar_header_text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.text_body,
  },
  calendar: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 370,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default styles;
