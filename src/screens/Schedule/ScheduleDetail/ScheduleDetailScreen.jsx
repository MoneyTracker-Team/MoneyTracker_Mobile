import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './scheduleDetail.styles.js';
import theme from '../../../config/theme.js';
import OneDaySpending from '../../../components/common/OneDaySpending/OneDaySpending.component.js';
import SpendDetail from '../../../components/common/SpendDetail/SpendDetail.component.js';
import DateInMonth from '../../../components/common/DateInMonth/DateInMonth.component.js';

const ScheduleDetailScreen = ({ navigation }) => {
  const [listDate, setListDate] = useState([
    { id: 1, date: '1', weekDay: 'Hai', isPressed: true },
    { id: 2, date: '2', weekDay: 'Ba', isPressed: false },
    { id: 3, date: '3', weekDay: 'Tư', isPressed: false },
    { id: 4, date: '4', weekDay: 'Năm', isPressed: false },
    { id: 5, date: '5', weekDay: 'Sáu', isPressed: false },
    { id: 6, date: '6', weekDay: 'Bảy', isPressed: false },
    { id: 7, date: '7', weekDay: 'CN', isPressed: false },
    { id: 8, date: '8', weekDay: 'Hai', isPressed: false },
    { id: 9, date: '9', weekDay: 'Ba', isPressed: false },
    { id: 10, date: '10', weekDay: 'Tư', isPressed: false },
    { id: 11, date: '11', weekDay: 'Năm', isPressed: false },
    { id: 12, date: '12', weekDay: 'Sáu', isPressed: false },
  ]);

  const changeBackground = (item) => {
    setListDate(
      listDate.map((date) => {
        if (date.id === item.id) {
          return { ...date, isPressed: true };
        } else {
          return { ...date, isPressed: false };
        }
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.overview_container}>
        <Text style={styles.overview_title_text}>Dự định chi tiêu tháng này</Text>
        <Text style={styles.overview_money_text}>2.000K</Text>
        <View style={styles.overview_desc_container}>
          <Feather name="chevrons-down" size={16} color={theme.colors.tertiary} />
          <Text style={styles.overview_desc_text}>500k ít hơn tháng trước</Text>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.one_day_spending_scrollview}
          pagingEnabled
        >
          <OneDaySpending date="Hôm nay" limitMoney="75K" spentMoney="15K" />
          <OneDaySpending date="Hôm nay" limitMoney="75K" spentMoney="15K" />
          <OneDaySpending date="Hôm nay" limitMoney="75K" spentMoney="15K" />
          <OneDaySpending date="Hôm nay" limitMoney="75K" spentMoney="15K" />
          <OneDaySpending date="Hôm nay" limitMoney="75K" spentMoney="15K" />
          <OneDaySpending date="Hôm nay" limitMoney="75K" spentMoney="15K" />
        </ScrollView>
      </View>
      <View style={styles.date_scroll_view_container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listDate.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => changeBackground(item)}>
              <DateInMonth date={item.date} weekDay={item.weekDay} isPressed={item.isPressed} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.detail_container}>
        <SpendDetail
          value1="2.000K"
          desc1="Tiền còn lại"
          value2="28"
          desc2="Ngày còn lại"
          value3="0K"
          desc3="Các khoản cố định"
          backgroundColor3={theme.colors.tertiary}
          textColor3={theme.colors.white}
          value4="0K"
          desc4="Đã tiêu hết"
        />
      </View>
    </View>
  );
};

export default ScheduleDetailScreen;
