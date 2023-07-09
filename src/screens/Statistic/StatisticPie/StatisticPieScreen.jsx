import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import styles from './statisticPie.styles.js';
import ScreenTab from '../../../components/ScreenTab/ScreenTab.component.js';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import { BarChart, PieChart } from 'react-native-chart-kit';
import theme from '../../../config/theme.js';

const StatisticPieScreen = ({ navigation }) => {
  const listTab = [
    { status: 'pie', title: 'Theo danh mục' },
    { status: 'column', title: 'Theo lượng chi tiêu' },
  ];
  const [status, setStatus] = useState('pie');
  const setStatusFilter = (status) => {
    setStatus(status);
  };

  useEffect(() => {
    const b = getAllDaysAndWeekdays(currentMonth.getMonth(), currentMonth.getFullYear());
    setListDate(b);
  }, []);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState('Tháng này');
  const [listDate, setListDate] = useState([]);

  const [listSpendingTypeSpend, setListSpendingTypeSpend] = useState([]);
  const [listAmountSpend, setListAmountSpend] = useState([]);
  const [listAmountSpendResult, setListAmountSpendResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response1 = await fetch(
        //   'https://moneytrackerserver-production.up.railway.app/type-spends/all-of-user/6476fc3968a24efaacf90dc6',
        //   {
        //     method: 'GET',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   },
        // );
        // const data = await response1.json();
        // setListSpendingType(data.data.typeSpends);

        const response2 = await fetch(
          `https://moneytrackerserver-production.up.railway.app/spends/schedule-in-month/6476fc3968a24efaacf90dc6?month=${
            currentMonth.getMonth() + 1
          }&year=${currentMonth.getFullYear()}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const data2 = await response2.json();
        setListAmountSpend(data2.data.spends);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedMonth]);

  useEffect(() => {
    setListAmountSpendResult(
      listDate.map((date) => {
        if (listAmountSpend !== undefined) {
          for (const [index, value] of listAmountSpend.entries()) {
            if (parseInt(value._id.substring(8)) == parseInt(date)) {
              return value.spended / 1000;
            }
          }
        }
        return 0;
      }),
    );
  }, [listAmountSpend]);

  const switchToPreMonth = () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    let a = currentMonth;
    setSelectedMonth(moment(a).format('MM/YYYY'));
    setCurrentMonth(a);
    const b = getAllDaysAndWeekdays(a.getMonth(), a.getFullYear());
    setListDate(b);
  };

  const switchToNextMonth = () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    let a = currentMonth;
    setSelectedMonth(moment(a).format('MM/YYYY'));
    setCurrentMonth(a);
    const b = getAllDaysAndWeekdays(a.getMonth(), a.getFullYear());
    setListDate(b);
  };

  function getAllDaysAndWeekdays(month, year) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const allDays = [];

    let currentDate = startDate;
    while (currentDate <= endDate) {
      const day = currentDate.getDate().toString();
      allDays.push(day);

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return allDays;
  }

  // const pieChartData = [50, 50];
  // const colors = ['green', 'blue'];

  const pieChartData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'yellow',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const barChartData = {
    labels: listDate,
    datasets: [
      {
        data: listAmountSpendResult,
      },
    ],
  };
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const chartConfig = {
    backgroundColor: 'yellow',
    backgroundGradientFrom: 'black',
    backgroundGradientTo: 'black',
    fillShadowGradientFrom: theme.colors.light_primary,
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: theme.colors.light_primary,
    fillShadowGradientToOpacity: 0.5,
    decimalPlaces: 0,
    barPercentage: 0.3,
    color: () => theme.colors.light_primary,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: 'yellow',
    },
    propsForVerticalLabels: {
      fontSize: '9',
    },
    propsForHorizontalLabels: {
      fontSize: '14',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTab listTab={listTab} status={status} setStatusFilter={setStatusFilter} />
      {status === 'pie' ? (
        <View style={styles.statistic_container}>
          {/* <PieChart data={pieChartData} colors={colors} size={300} />
          <View style={styles.spending_type_container}>
            <Text>Haha</Text>
          </View> */}
          <PieChart
            data={pieChartData}
            width={screenWidth}
            height={screenHeight / 2.9}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'30'}
            center={[0, 0]}
            avoidFalseZero={true}
          />
        </View>
      ) : (
        <View style={styles.statistic_container}>
          <BarChart
            data={barChartData}
            width={screenWidth}
            height={screenHeight / 2}
            yAxisSuffix="K"
            chartConfig={chartConfig}
            fromZero={true}
            showBarTops={true}
            withInnerLines={true}
          />
        </View>
      )}
      <View style={styles.select_month_container}>
        <TouchableOpacity onPress={switchToPreMonth}>
          <MaterialIcons name="navigate-before" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.select_month_text}>
          {currentMonth.getMonth() == new Date().getMonth() && currentMonth.getFullYear() == new Date().getFullYear()
            ? 'Tháng này'
            : selectedMonth}
        </Text>
        <TouchableOpacity onPress={switchToNextMonth}>
          <MaterialIcons name="navigate-next" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StatisticPieScreen;
