import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import styles from './calendar.styles.js';
import checkToDay from '../../../utils/checkToDay.js';
import bgImg from '../../../../assets/bg-img.png';
import theme from '../../../config/theme';
import formatNumber from '../../../utils/formatNumber.js';
import formatTime from '../../../utils/formatTime.js';
import { AuthContext } from '../../../context/AuthContext/AuthContext.js';
// import icon
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons.js';

const dayOfWeeks = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];
// ex: 2023-07-08 -> 08-07-2023
const formatDate = (date) => {
  if (date) {
    let splitDate = date.split('-');
    reverseDate = splitDate.reverse();
    return reverseDate.join('-');
  }
  return '';
};

function CalendarScreen({ navigation }) {
  const [rerender, setRerender] = useState(true);
  const userId = useContext(AuthContext).userId;
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [statisticData, setStatictisData] = useState({});
  const [spends, setSpends] = useState([]);
  // modal
  const [visibleModal, setVisibleModal] = useState(false);
  const [spendInDates, setSpendInDates] = useState({});

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
        `https://moneytrackerserver-production.up.railway.app/spends/in-month/${userId}?month=${
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
  }, [currMonth, currYear, rerender]);

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
      <TouchableOpacity
        style={{ position: 'relative', paddingTop: 12, paddingBottom: 12 }}
        onPress={() => handleShowSpendInDate(day)}
      >
        <Text style={styles.calendarItemText}>{day}</Text>
        <View style={[styles.quantitySpendWrap, isToday ? styles.bgGreen : '']}>
          <Text style={styles.quantitySpendText}>{qnt}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <View style={{ paddingTop: 12, paddingBottom: 12 }}>
        <Text style={styles.calendarItemText}>{day}</Text>
      </View>
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
        <View key={'currentdateofmonth' + i} style={[styles.calendarItemWrap, isToday ? styles.todayItemWrap : '']}>
          {renderQntSpendInDate(i)}
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

  const fetchSpendInDate = async (day, month, year) => {
    return fetch(
      `https://moneytrackerserver-production.up.railway.app/spends/in-date/${userId}?day=${day}&month=${month}&year=${year}`,
    )
      .then((response) => response.json())
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleShowSpendInDate = async (day) => {
    const data = await fetchSpendInDate(day, currMonth + 1, currYear);
    setSpendInDates(data);
    setVisibleModal(!visibleModal);
  };

  //* MODAL
  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const handleNavigateToDetailSpend = (spendId) => {
    // handle navigate with id
    navigation.navigate('UpdateAndDeleteSpend', { spendId: spendId, rerender: rerender, setRerender: setRerender });
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
              <Text style={styles.itemlargeText}>{formatNumber(Number(statisticData?.totalMoney ?? 0) / 1000)}K</Text>
              <Text style={styles.itemSmallText}>Tổng tiền đã chi tiêu</Text>
            </View>

            <View style={[styles.statisticItem, styles.statisticItemPressable]}>
              <Text style={[styles.itemlargeText, styles.itemlargeTextPressable]}>
                {formatNumber(Number(statisticData?.fixedMoney ?? 0) / 1000)}K
              </Text>
              <Text style={[styles.itemSmallText, styles.itemlargeTextPressable]}>Các khoản cố định</Text>
            </View>

            <View style={styles.statisticItem}>
              <Text style={styles.itemlargeText}>
                {formatNumber(Number(statisticData?.maxTotalMoney ?? 0) / 1000)}K
              </Text>
              <Text style={styles.itemSmallText}>Ngày tiêu nhiều nhất</Text>
            </View>

            <View style={styles.statisticItem}>
              <Text style={styles.itemlargeText}>
                {formatNumber(Number(statisticData?.minTotalMoney ?? 0) / 1000)}K
              </Text>
              <Text style={styles.itemSmallText}>Ngày tiêu ít nhất</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Modal detail spend in date */}
      <Modal transparent={true} visible={visibleModal} animationType="fade">
        <View style={styles.modal_background}>
          <View style={styles.modal_spend_container}>
            <View style={styles.modal_spend_header}>
              <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ color: theme.colors.white, fontSize: 20, fontWeight: '600' }}>
                  {formatNumber(spendInDates?.totalMoney ?? 0)} VND
                </Text>
                <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.text_body }}>
                  Ngày: {formatDate(spendInDates.date)}
                </Text>
              </View>
              {/* Close modal btn */}
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <Ionicons style={styles.btn_more_category_icon} name="close-outline" size={28} />
              </TouchableOpacity>
            </View>
            {/* Body modal */}
            <View style={styles.modal_spend_content}>
              <ScrollView contentContainerStyle={styles.modal_spend_scroll_view_content}>
                {spendInDates?.spends &&
                  spendInDates.spends.map((spend, index) => {
                    return (
                      //* Spend Item
                      <View key={index} style={styles.btn_spend}>
                        <View style={styles.spend}>
                          <Image
                            style={styles.spend_img}
                            source={{
                              uri: spend.image,
                            }}
                          />
                          <View style={styles.text_container}>
                            <Text style={styles.spend_name}>{spend.name}</Text>
                            <Text style={styles.spend_text}>{formatTime(spend.dateTime)}</Text>
                          </View>
                          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '500', fontSize: 17 }}>
                              {formatNumber(spend.moneySpend)} VND
                            </Text>
                            <TouchableOpacity onPress={() => handleNavigateToDetailSpend(spend._id)}>
                              <Ionicons style={styles.spend_icon} name="chevron-forward-sharp" size={24} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
            <View style={styles.line}></View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

export default CalendarScreen;
