import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ImageBackground } from 'react-native';
import styles from './savings.styles.js';
import background from '../../../../assets/bg-img.png';
import theme from '../../../config/theme.js';
import EnterMoney from '../../../components/common/EnterMoney/EnterMoney.component.js';
import DisplayMoney from '../../../components/common/DisplayMoney/DisplayMoney.component.js';
import moment from 'moment';
import { AuthContext } from '../../../context/AuthContext/AuthContext.js';
import formatNumber from '../../../utils/formatNumber.js';
function SavingsScreen({ navigation }) {
  const userId = useContext(AuthContext).userId;
  const [currentMoney, setCurrentMoney] = useState(0);
  const [modalAddMoney, setModalAddMoney] = useState(false);
  const [modalSubMoney, setModalSubMoney] = useState(false);
  const [savingsData, setSavingsData] = useState([]);
  const [scheduleMoney, setScheduleMoney] = useState(0);

  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    const fetchData = async () => {
      try {
        const url = `https://moneytrackerserver-production.up.railway.app/adjust-moneys/all-of-user/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        setCurrentMoney(data.data.currentMoney.currentMoney);
        setSavingsData(data.data.histories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);

  useEffect(() => {
    if (Object.keys(savingsData).length !== 0 && scheduleMoney !== 0) {
      const updatedScheduleMoney = {
        displace: scheduleMoney,
      };
      fetch(`https://moneytrackerserver-production.up.railway.app/users/update-current-money/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedScheduleMoney),
      })
        .then((response) => response.json())
        .then((data) => {
          setCurrentMoney(scheduleMoney + currentMoney);
          const updateData = [
            {
              ajustMoney: data.data.historyAdjustMoney.ajustMoney,
              createdAt: data.data.historyAdjustMoney.createdAt,
            },
            ...savingsData,
          ];
          setSavingsData([...updateData]);
          setScheduleMoney(0);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [scheduleMoney]);

  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={styles.money_amount_wrapper}>
        <View style={styles.money_amount_container}>
          <Text style={styles.normal_text}>Tiền tiết kiệm hiện tại:</Text>
          <View style={styles.money_container}>
            <DisplayMoney moneyAmount={currentMoney} />
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.add_button} onPress={() => setModalAddMoney(true)}>
              <Text style={styles.add_button_text}>thêm tiền tiết kiệm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subtract_button} onPress={() => setModalSubMoney(true)}>
              <Text style={styles.subtract_button_text}>giảm tiền tiết kiệm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal transparent={true} visible={modalAddMoney} animationType="fade">
        <View style={styles.modal_container}>
          <EnterMoney
            title="Thêm tiền tiết kiệm"
            modalState={setModalAddMoney}
            scheduleMoney={scheduleMoney}
            setScheduleMoney={setScheduleMoney}
          ></EnterMoney>
        </View>
      </Modal>
      <Modal transparent={true} visible={modalSubMoney} animationType="fade">
        <View style={styles.modal_container}>
          <EnterMoney
            title="Giảm tiền tiết kiệm"
            modalState={setModalSubMoney}
            scheduleMoney={scheduleMoney}
            setScheduleMoney={setScheduleMoney}
          ></EnterMoney>
        </View>
      </Modal>
      <Text style={{ fontSize: theme.fontSizes.text_body, color: theme.colors.white, margin: '3%' }}>
        Lịch sử điều chỉnh tiền tiết kiệm
      </Text>
      {/* <View style={styles.container}> */}
      <ScrollView>
        <View style={styles.chartContainer}>
          {savingsData?.map((item, index) => (
            <View key={index}>
              <View style={styles.line} />
              <View style={[styles.timelines]}>
                <View
                  style={[
                    styles.circle,
                    {
                      backgroundColor: item.ajustMoney >= 0 ? theme.colors.primary : theme.colors.tertiary,
                    },
                  ]}
                />
                <View style={{ flexDirection: 'column', padding: '5%' }}>
                  <Text
                    style={{
                      color: item.ajustMoney >= 0 ? theme.colors.light_primary : theme.colors.tertiary,
                      fontSize: theme.fontSizes.text_body,
                    }}
                  >
                    {formatNumber(item.ajustMoney ? item.ajustMoney : 0)} vnđ
                  </Text>
                  <Text
                    style={{
                      color: theme.colors.text_blur,
                      fontSize: theme.fontSizes.text_small,
                    }}
                  >
                    {moment(item.createdAt).format('YYYY-MM-DD')}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
    // </View>
  );
}

export default SavingsScreen;
