import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './scheduleDetail.styles.js';
import theme from '../../../config/theme.js';
import OneDaySpending from '../../../components/common/OneDaySpending/OneDaySpending.component.js';
import SpendDetail from '../../../components/common/SpendDetail/SpendDetail.component.js';
import DateInMonth from '../../../components/common/DateInMonth/DateInMonth.component.js';
import background from '../../../../assets/bg-img.png';
import formatNumber from '../../../utils/formatNumber.js';
const ScheduleDetailScreen = ({ navigation, route }) => {
  const { month, year, currentSchedule } = route.params;

  const [listDate, setListDate] = useState(getAllDaysAndWeekdays(month, year));

  const [scrollView1Ref, setScrollView1Ref] = useState(null);
  const [scrollView2Ref, setScrollView2Ref] = useState(null);

  useEffect(() => {
    if (month == new Date().getMonth() && year == new Date().getFullYear()) {
      scrollView1Ref?.scrollTo({
        y: 0,
        x: width * (new Date().getDate() - 1),
        animated: false,
      });
      scrollView2Ref?.scrollTo({
        y: 0,
        x: (width / 8) * (new Date().getDate() - 1),
        animated: false,
      });
    }
  }, [scrollView1Ref]);

  function getAllDaysAndWeekdays(month, year) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const allDays = [];

    let currentDate = startDate;
    let weekDay;
    if (month == new Date().getMonth() && year == new Date().getFullYear()) {
      while (currentDate <= endDate) {
        switch (currentDate.getDay()) {
          case 0:
            weekDay = 'CN';
            break;
          case 1:
            weekDay = 'Hai';
            break;
          case 2:
            weekDay = 'Ba';
            break;
          case 3:
            weekDay = 'Tư';
            break;
          case 4:
            weekDay = 'Năm';
            break;
          case 5:
            weekDay = 'Sáu';
            break;
          case 6:
            weekDay = 'Bảy';
            break;
        }
        const day = {
          id: currentDate.getDate(),
          date: currentDate.getDate(),
          weekDay: weekDay,
          isPressed: currentDate.getDate() == new Date().getDate() ? true : false,
        };
        allDays.push(day);

        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else {
      while (currentDate <= endDate) {
        switch (currentDate.getDay()) {
          case 0:
            weekDay = 'CN';
            break;
          case 1:
            weekDay = 'Hai';
            break;
          case 2:
            weekDay = 'Ba';
            break;
          case 3:
            weekDay = 'Tư';
            break;
          case 4:
            weekDay = 'Năm';
            break;
          case 5:
            weekDay = 'Sáu';
            break;
          case 6:
            weekDay = 'Bảy';
            break;
        }
        const day = {
          id: currentDate.getDate(),
          date: currentDate.getDate(),
          weekDay: weekDay,
          isPressed: currentDate.getDate() == 1 ? true : false,
        };
        allDays.push(day);

        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    return allDays;
  }

  const width = Dimensions.get('window').width;

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
    scrollView1Ref.scrollTo({
      y: 0,
      x: width * (item.date - 1),
      animated: false,
    });
  };

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    setListDate(
      listDate.map((date) => {
        if (date.id === Math.round(contentOffset.x / width) + 1) {
          scrollView2Ref?.scrollTo({
            y: 0,
            x: (width / 8) * (date.id - 1),
            animated: false,
          });
          return { ...date, isPressed: true };
        } else {
          return { ...date, isPressed: false };
        }
      }),
    );
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.overview_container}>
          <Text style={styles.overview_title_text}>Dự định chi tiêu tháng này</Text>
          <Text style={styles.overview_money_text}>
            {Object.keys(currentSchedule).length === 0
              ? '0K'
              : `${formatNumber(currentSchedule.scheduleMoney ? currentSchedule.scheduleMoney / 1000 : 0)}K`}
          </Text>
          <View style={styles.overview_desc_container}>
            {/* <Feather name="chevrons-down" size={16} color={theme.colors.tertiary} /> */}
            <Text style={styles.overview_desc_text}></Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.one_day_spending_scrollview}
            pagingEnabled
            ref={(ref) => {
              setScrollView1Ref(ref);
            }}
            onScroll={handleScroll}
          >
            {listDate.map((date) => {
              if (currentSchedule.spends !== undefined) {
                for (const [index, value] of currentSchedule.spends.entries()) {
                  if (value._id.substring(8) == date.date) {
                    return (
                      <OneDaySpending
                        key={date.id}
                        date={`${date.date}/${month + 1}/${year}`}
                        limitMoney={`${formatNumber(
                          currentSchedule.moneyLimit && new Date(year, month, date.date + 1) >= new Date()
                            ? currentSchedule.moneyLimit / 1000
                            : 0,
                        )}K`}
                        spentMoney={`${formatNumber(value.spended ? value.spended / 1000 : 0)}K`}
                      />
                    );
                  }
                }
              }
              return (
                <OneDaySpending
                  key={date.id}
                  date={`${date.date}/${month + 1}/${year}`}
                  limitMoney={`${formatNumber(currentSchedule.moneyLimit / 1000)}K`}
                  spentMoney="0K"
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.date_scroll_view_container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={(ref) => {
              setScrollView2Ref(ref);
            }}
          >
            {listDate.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => changeBackground(item)}>
                <DateInMonth date={item.date} weekDay={item.weekDay} isPressed={item.isPressed} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.detail_container}>
          <SpendDetail
            value1={
              Object.keys(currentSchedule).length === 0
                ? '0K'
                : `${formatNumber(currentSchedule.remainingMoney / 1000)}K`
            }
            desc1="Tiền còn lại"
            value2={Object.keys(currentSchedule).length === 0 ? '0' : `${currentSchedule.remainingDate}`}
            desc2="Ngày còn lại"
            value3={
              Object.keys(currentSchedule).length === 0 ? '0K' : `${formatNumber(currentSchedule.fixedMoney / 1000)}K`
            }
            desc3="Các khoản cố định"
            backgroundColor3={theme.colors.tertiary}
            textColor3={theme.colors.white}
            value4={
              Object.keys(currentSchedule).length === 0 ? '0K' : `${formatNumber(currentSchedule.totalSpended / 1000)}K`
            }
            desc4="Đã tiêu hết"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ScheduleDetailScreen;
