import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, ImageBackground } from 'react-native';
import styles from './spendSchedule.styles.js';
import SpendDetail from '../../../components/common/SpendDetail/SpendDetail.component.js';
import EnterMoney from '../../../components/common/EnterMoney/EnterMoney.component.js';
import DisplayMoney from '../../../components/common/DisplayMoney/DisplayMoney.component.js';
import theme from '../../../config/theme.js';
import moment from 'moment';
import background from '../../../../assets/bg-img.png';
import { MaterialIcons } from '@expo/vector-icons';
import formatNumber from '../../../utils/formatNumber.js';
import { AuthContext } from '../../../context/AuthContext/AuthContext.js';
import { backend_url as baseUrl } from '../../../config/baseURL.js';

const SpendScheduleScreen = ({ navigation }) => {
  const userId = useContext(AuthContext).userId;

  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);

  const [currentSchedule, setCurrentSchedule] = useState({});

  const [compareDate, setCompareDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState('Tháng này');

  const [scheduleMoney, setScheduleMoney] = useState(0);

  useEffect(() => {
    fetch(
      `${baseUrl}/spends/schedule-in-month/${userId}?month=${
        currentMonth.getMonth() + 1
      }&year=${currentMonth.getFullYear()}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentSchedule(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedMonth]);

  useEffect(() => {
    if (Object.keys(currentSchedule).length !== 0) {
      const updatedScheduleMoney = {
        moneyAdjust: scheduleMoney,
      };
      fetch(`${baseUrl}/schedules/adjust-money/${currentSchedule.scheduleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedScheduleMoney),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data !== undefined) {
            setCurrentSchedule({
              ...currentSchedule,
              scheduleMoney: data.data.scheduleMoney,
            });
          }

          setScheduleMoney(0);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [scheduleMoney]);

  const [modalAddMoney, setModalAddMoney] = useState(false);
  const [modalSubMoney, setModalSubMoney] = useState(false);

  const switchToPreMonth = () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    let a = currentMonth;
    setScheduleMoney(0);
    setSelectedMonth(moment(a).format('MM/YYYY'));
    setCurrentMonth(a);
  };

  const switchToNextMonth = () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    let a = currentMonth;
    setScheduleMoney(0);
    setSelectedMonth(moment(a).format('MM/YYYY'));
    setCurrentMonth(a);
  };

  const createSpendSchedule = async () => {
    if (Object.keys(currentSchedule).length === 0) {
      if (scheduleMoney === 0) {
        Alert.alert('Invalid information', 'Please provide total money of schedule to create schedule', [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ]);
      } else {
        const newSchedule = {
          userId: userId,
          month: currentMonth.getMonth() + 1,
          year: currentMonth.getFullYear(),
          scheduleMoney,
        };
        await fetch(`${baseUrl}/schedules/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newSchedule),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('successful');
          })
          .catch((error) => {
            console.error('failed');
          });
        Alert.alert('Create schedule successfully', '', [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ]);
      }
    } else {
      navigation.navigate('ScheduleDetail', {
        month: currentMonth.getMonth(),
        year: currentMonth.getFullYear(),
        currentSchedule: currentSchedule,
      });
    }
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.money_amount_container}>
          <Text style={styles.normal_text}>Số tiền dự định tháng này:</Text>
          <View style={styles.money_container}>
            <DisplayMoney
              moneyAmount={Object.keys(currentSchedule).length === 0 ? scheduleMoney : currentSchedule.scheduleMoney}
            />
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity
              style={currentMonth < compareDate ? styles.disabled_add_button : styles.add_button}
              disabled={currentMonth < compareDate}
              onPress={() => setModalAddMoney(true)}
            >
              <Text style={styles.add_button_text}>Thêm trợ cấp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={currentMonth < compareDate ? styles.disabled_subtract_button : styles.subtract_button}
              disabled={currentMonth < compareDate}
              onPress={() => setModalSubMoney(true)}
            >
              <Text style={styles.subtract_button_text}>Giảm trợ cấp</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detail_container}>
          <SpendDetail
            value1={
              Object.keys(currentSchedule).length === 0
                ? '0K'
                : `${formatNumber(currentSchedule.remainingMoney ? currentSchedule.remainingMoney / 1000 : 0)}K`
            }
            desc1="Tiền còn lại"
            value2={Object.keys(currentSchedule).length === 0 ? '0' : `${currentSchedule.remainingDate}`}
            desc2="Ngày còn lại"
            value3={
              Object.keys(currentSchedule).length === 0
                ? '0K'
                : `${formatNumber(currentSchedule.fixedMoney ? currentSchedule.fixedMoney / 1000 : 0)}K`
            }
            desc3="Các khoản cố định"
            backgroundColor3={theme.colors.tertiary}
            textColor3={theme.colors.white}
            value4={
              Object.keys(currentSchedule).length === 0
                ? '0K'
                : `${formatNumber(currentSchedule.totalSpended ? currentSchedule.totalSpended / 1000 : 0)}K`
            }
            desc4="Đã tiêu hết"
          />
        </View>
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
        <View style={styles.create_spend_schedule_container}>
          <TouchableOpacity style={styles.create_spend_schedule_button} onPress={createSpendSchedule}>
            <Text style={styles.create_spend_schedule_text}>
              {Object.keys(currentSchedule).length === 0 ? 'Tạo kế hoạch chi tiêu' : 'Xem kế hoạch chi tiêu'}
            </Text>
          </TouchableOpacity>
        </View>
        <Modal transparent={true} visible={modalAddMoney} animationType="fade">
          <View style={styles.modal_container}>
            <EnterMoney
              title="Thêm trợ cấp"
              modalState={setModalAddMoney}
              scheduleMoney={scheduleMoney}
              setScheduleMoney={setScheduleMoney}
            ></EnterMoney>
          </View>
        </Modal>
        <Modal transparent={true} visible={modalSubMoney} animationType="fade">
          <View style={styles.modal_container}>
            <EnterMoney
              title="Giảm trợ cấp"
              modalState={setModalSubMoney}
              scheduleMoney={scheduleMoney}
              setScheduleMoney={setScheduleMoney}
            ></EnterMoney>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default SpendScheduleScreen;
