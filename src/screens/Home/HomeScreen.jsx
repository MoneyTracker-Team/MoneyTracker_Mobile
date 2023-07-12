import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
import styles from './home.styles.js';
import bgImg from '../../../assets/bg-img.png';
import theme from '../../config/theme.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import formatTime from '../../utils/formatTime.js';
import formatNumber from '../../utils/formatNumber.js';
// chart
import { LineChart } from 'react-native-chart-kit';
import { AuthContext } from '../../context/AuthContext/AuthContext.js';

const HomeScreen = ({ navigation }) => {
  const userId = useContext(AuthContext).userId;

  const [spends, setSpends] = useState([]);
  const [statistic, setStatistic] = useState('date');
  const [statisticData, setStatisticData] = useState([]);
  const [currMoney, setCurrMoney] = useState(0);

  useEffect(() => {
    const fetchSpends = async () => {
      const currDate = new Date();
      const day = currDate.getDate();
      const month = currDate.getMonth() + 1;
      const year = currDate.getFullYear();

      fetch(
        `https://moneytrackerserver-production.up.railway.app/spends/in-date/${userId}?day=${day}&month=${month}&year=${year}`,
      )
        .then((response) => response.json())
        .then((result) => {
          //* set data to state
          setSpends(result?.data?.spends);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const fetchCurrMoney = async () => {
      fetch(`https://moneytrackerserver-production.up.railway.app/users/${userId}`)
        .then((response) => response.json())
        .then((result) => {
          //* set data to state
          setCurrMoney(result.data?.currentMoney);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchSpends();
    fetchCurrMoney();
  }, []);

  const getStatisticData = async (type) => {
    return fetch(`https://moneytrackerserver-production.up.railway.app/spends/statistic/${userId}?type=${type}`)
      .then((response) => response.json())
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // fetch data statistic
  useEffect(() => {
    const setData = async () => {
      switch (statistic) {
        case 'week':
          const weekData = await getStatisticData('week');
          // setdata
          setStatisticData(weekData);
          break;
        case 'month':
          const monthData = await getStatisticData('month');
          // setData
          setStatisticData(monthData);
          break;
        default:
          const dayData = await getStatisticData('day');
          // setData
          setStatisticData(dayData);
          break;
      }
    };
    setData();
  }, [statistic]);

  // chart
  const data = {
    datasets: [
      {
        data: [0, ...statisticData],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <ImageBackground source={bgImg} style={{ height: '100%' }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <TouchableOpacity style={styles.spendButton} onPress={() => navigation.navigate('CreateSpending')}>
          <Text style={styles.spendButtonText}>Chi tiền</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20, display: 'flex' }}>
        <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.text_body }}>Tiền tiết kiệm</Text>
        <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.headline_one, fontWeight: '500' }}>
          {formatNumber(currMoney)} VND
        </Text>
      </View>
      {/* Bieu do */}
      <View style={{ marginTop: 10 }}>
        {/* Statistic control */}
        <View style={styles.statisticControlWrap}>
          <TouchableOpacity
            onPress={() => setStatistic('date')}
            style={{
              ...styles.statisticBtn,
              backgroundColor: statistic === 'date' ? theme.colors.quaternary : 'transparent',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStatistic('week')}
            style={{
              ...styles.statisticBtn,
              backgroundColor: statistic === 'week' ? theme.colors.quaternary : 'transparent',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Tuần</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStatistic('month')}
            style={{
              ...styles.statisticBtn,
              backgroundColor: statistic === 'month' ? theme.colors.quaternary : 'transparent',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Tháng</Text>
          </TouchableOpacity>
        </View>
        {/* Statistic Chart */}
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          withDots={!(statistic === 'month')}
          bezier
        />
      </View>

      <View style={{ display: 'flex', gap: 20, position: 'relative', top: -20 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ color: theme.colors.white, fontSize: 20 }}> Chi tiêu hôm nay</Text>
        </View>
        {/* List spending in date */}
        <ScrollView horizontal contentContainerStyle={styles.scrollViewSpend}>
          {spends &&
            spends.map((spend, index) => (
              <View key={index} style={styles.spendItem}>
                <Image
                  source={{
                    uri: spend?.image,
                  }}
                  style={styles.spendImage}
                />
                <View style={styles.spendContent}>
                  <Text style={{ fontWeight: '800', fontSize: 20, marginTop: 6 }}>{spend.name}</Text>
                  <Text style={{ flex: 1, fontSize: theme.fontSizes.text_body }}>{spend.note}</Text>
                  <View
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}
                  >
                    <Text style={{ fontWeight: '500' }}>{formatNumber(spend.moneySpend)} VND</Text>
                    <Text>{formatTime(spend.dateTime)}</Text>
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>

      <View style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity style={styles.scheduleWrapBtn} onPress={() => navigation.navigate('SpendSchedule')}>
          <View style={styles.cicleIconBtn}>
            <MaterialIcons style={{ color: theme.colors.white, fontSize: 24 }} name={'double-arrow'} />
          </View>
          <View style={styles.scheduleBtn}>
            <Text style={{ color: theme.colors.white, fontSize: 20, position: 'relative', top: -2 }}>
              Xem kế hoạch chi tiêu
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
