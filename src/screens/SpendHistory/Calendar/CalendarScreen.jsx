import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './calendar.styles.js';
import checkToDay from '../../../utils/checkToDay.js';
import bgImg from '../../../../assets/bg-img.png';
// import icon
import Entypo from 'react-native-vector-icons/Entypo';

const dayOfWeeks = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];

function CalendarScreen() {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [statisticData, setStatictisData] = useState({});
  const [spends, setSpends] = useState([]);

  // ngày đầu tiên tháng hiện tại thuộc thứ mấy trong tuần => [1,2,3,4,5,6,0]
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  // số ngày trong tháng hiện tại => 0->31
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  // số ngày trong tháng trước
  let lastDateOfPrevMonth = new Date(currYear, currMonth, 0).getDate();
  // ngày cuối cùng trong tháng hiện tại thuộc thứ mấy trong tuần
  let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();

  //* fetch data
  useEffect(() => {
    const fetchDataInMonth = async () => {
      fetch(
        `https://moneytrackerserver-production.up.railway.app/spends/in-month/6476fc3968a24efaacf90dc6?month=${
          currMonth + 1
        }&year=${currYear}`,
      )
        .then((response) => response.json())
        .then((data) => {
          //* set data to state
          const { totalMoney, fixedMoney, maxTotalMoney, minTotalMoney } = data.data;
          const newStatistic = { totalMoney, fixedMoney, maxTotalMoney, minTotalMoney };
          setStatictisData(newStatistic);
          setSpends(data?.data?.spends);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchDataInMonth();
  }, [currMonth, currYear]);

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

  const renderQntSpendInDate = (day) => {
    let isToday = checkToDay(day, currMonth, currYear);
    const formatDate = `${currYear}-${currMonth + 1 <= 9 ? '0' + (currMonth + 1) : currMonth + 1}-${
      day <= 9 ? '0' + day : day
    }`;
    let qnt = 0;
    if (spends && Array.isArray(spends)) {
      spends.forEach((element) => {
        if (element._id === formatDate) {
          qnt = Number(element.totalSpend);
          return;
        }
      });
    }
    return qnt > 0 ? (
      <View style={[styles.quantitySpendWrap, isToday ? styles.bgGreen : '']}>
        <Text style={styles.quantitySpendText}>{qnt}</Text>
      </View>
    ) : (
      <></>
    );
  };

  const renderDate = () => {
    // date of last month
    let dateOfCalendars = [];
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
        <TouchableOpacity
          onPress={() => handleShowSpendInDate(i)}
          key={'currentdateofmonth' + i}
          style={[styles.calendarItemWrap, isToday ? styles.todayItemWrap : '']}
        >
          <Text style={styles.calendarItemText}>{i}</Text>
          {renderQntSpendInDate(i)}
        </TouchableOpacity>,
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

  const handleShowSpendInDate = (date) => {
    // handle show spend in pick date
  };

  const handleViewSpendMonthly = () => {
    // handle show spend monthly here
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

        {/* STATISTIC */}
        <View style={styles.statisticContainer}>
          <View style={styles.statisticWrap}>
            {/* Grid Item */}
            <View style={styles.statisticItem}>
              <Text style={styles.itemlargeText}>{Number(statisticData?.totalMoney ?? 0) / 1000}K</Text>
              <Text style={styles.itemSmallText}>Tổng tiền đã chi tiêu</Text>
            </View>

            <TouchableOpacity
              style={[styles.statisticItem, styles.statisticItemPressable]}
              onPress={handleViewSpendMonthly}
            >
              <Text style={[styles.itemlargeText, styles.itemlargeTextPressable]}>
                {Number(statisticData?.fixedMoney ?? 0) / 1000}K
              </Text>
              <Text style={[styles.itemSmallText, styles.itemlargeTextPressable]}>Các khoản cố định</Text>
            </TouchableOpacity>

            <View style={styles.statisticItem}>
              <Text style={styles.itemlargeText}>{Number(statisticData?.maxTotalMoney ?? 0) / 1000}K</Text>
              <Text style={styles.itemSmallText}>Ngày tiêu nhiều nhất</Text>
            </View>

            <View style={styles.statisticItem}>
              <Text style={styles.itemlargeText}>{Number(statisticData?.minTotalMoney ?? 0) / 1000}K</Text>
              <Text style={styles.itemSmallText}>Ngày tiêu ít nhất</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default CalendarScreen;
