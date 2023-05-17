import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './calendar.styles.js';
import checkToDay from '../../../utils/checkToDay.js';
import bgImg from '../../../../assets/bg-img.png';
// import icon
import Entypo from 'react-native-vector-icons/Entypo';

const mockData = [
  {
    date: new Date(2023, 5),
    data: '',
  },
];

const dayOfWeeks = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];

function CalendarScreen() {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());

  // ngày đầu tiên tháng hiện tại thuộc thứ mấy trong tuần => [1,2,3,4,5,6,0]
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  // số ngày trong tháng hiện tại => 0->31
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  // số ngày trong tháng trước
  let lastDateOfPrevMonth = new Date(currYear, currMonth, 0).getDate();
  // ngày cuối cùng trong tháng hiện tại thuộc thứ mấy trong tuần
  let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();

  useEffect(() => {}, []);

  const handlePressPreMonth = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear((prev) => prev - 1);
    } else {
      setCurrMonth((prev) => prev - 1);
    }
  };

  const handlePressNextMonth = () => {
    if (currMonth === 11) {
      setCurrYear((prev) => prev + 1);
      setCurrMonth(0);
    } else {
      setCurrMonth((prev) => prev + 1);
    }
  };

  const displayMonthOfYear = () => {
    if (currMonth === new Date().getMonth()) return <Text style={styles.textControlMonth}>Tháng này</Text>;
    return (
      <Text style={styles.textControlMonth}>
        {currMonth + 1} / {currYear}
      </Text>
    );
  };

  const renderDate = () => {
    // date of last month
    var dateOfCalendars = [];
    for (let i = 1; i < firstDayOfMonth; i++) {
      dateOfCalendars.push(
        <View key={'lastdateofmonth' + i} style={styles.calendarItemWrapNotCurrMonth}>
          <Text style={styles.calendarItemText}>{lastDateOfPrevMonth - firstDayOfMonth + i}</Text>
        </View>,
      );
    }
    // current date of month
    for (let i = 1; i <= lastDateOfMonth; i++) {
      let isToday = checkToDay(i, currMonth, currYear);
      dateOfCalendars.push(
        <View key={'currentdateofmonth' + i} style={[styles.calendarItemWrap, isToday ? styles.todayItemWrap : '']}>
          <Text style={styles.calendarItemText}>{i}</Text>
          <View style={[styles.quantitySpendWrap, isToday ? styles.bgGreen : '']}>
            <Text style={styles.quantitySpendText}>4</Text>
          </View>
        </View>,
      );
    }
    // date of next month
    if (lastDayOfMonth > 0) {
      for (let i = lastDayOfMonth; i <= 6; i++) {
        dateOfCalendars.push(
          <View key={'nextdateofmonth' + i} style={styles.calendarItemWrapNotCurrMonth}>
            <Text style={styles.calendarItemText}>{i - lastDayOfMonth + 1}</Text>
          </View>,
        );
      }
    }
    return dateOfCalendars;
  };

  return (
    <ImageBackground source={bgImg} style={{ height: '100%' }}>
      <View>
        {/* CALENDAR */}
        <View style={styles.calendarWrapper}>
          {/* Calendar Header */}
          <View style={styles.calendarHeader}>
            {dayOfWeeks.map((day, index) => {
              return (
                <Text key={index} style={styles.calendarHeaderText}>
                  {day}
                </Text>
              );
            })}
          </View>
          {/* Calendar Body */}
          <View style={styles.calendarBody}>{renderDate()}</View>
        </View>

        {/* CONTROL */}
        <View style={styles.controlMonth}>
          {/* Prev Button */}
          <TouchableOpacity onPress={handlePressPreMonth}>
            <Entypo style={styles.buttonControlMonth} name="chevron-left" />
          </TouchableOpacity>
          {/* Month display */}
          {displayMonthOfYear()}
          {/* Next Button */}
          <TouchableOpacity onPress={handlePressNextMonth}>
            <Entypo style={styles.buttonControlMonth} name="chevron-right" />
          </TouchableOpacity>
        </View>

        <Text style={styles.example}>This is Calendar Screen</Text>
      </View>
    </ImageBackground>
  );
}

export default CalendarScreen;
