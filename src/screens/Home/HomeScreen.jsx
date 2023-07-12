import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import styles from './home.styles.js';
import bgImg from '../../../assets/bg-img.png';
import theme from '../../config/theme.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import formatTime from '../../utils/formatTime.js';

const HomeScreen = ({ navigation }) => {
  const [spends, setSpends] = useState([]);

  useEffect(() => {
    const fetchSpends = async () => {
      const currDate = new Date();
      const day = currDate.getDate();
      const month = currDate.getMonth() + 1;
      const year = currDate.getFullYear();

      fetch(
        `https://moneytrackerserver-production.up.railway.app/spends/in-date/6476fc3968a24efaacf90dc6?day=${day}&month=${month}&year=${year}`,
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
    fetchSpends();
  }, []);

  return (
    <ImageBackground source={bgImg} style={{ height: '100%' }}>
      <View style={{ padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity style={styles.spendButton} onPress={() => navigation.navigate('CreateSpending')}>
          <Text style={styles.spendButtonText}>Chi tiền</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20, display: 'flex' }}>
        <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.text_body }}>Tiền tiết kiệm</Text>
        <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.headline_one, fontWeight: '500' }}>
          3.500.000 VND
        </Text>
      </View>
      {/* Bieu do */}
      <View style={{ height: 230 }}></View>

      <View style={{ display: 'flex', gap: 20 }}>
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
                  <Text style={{ alignSelf: 'flex-end', marginRight: 10 }}>{formatTime(spend.dateTime)}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>

      <View style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
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
