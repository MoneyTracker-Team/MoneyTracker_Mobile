import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, Pressable, Keyboard, ImageBackground } from 'react-native';
import styles from './updateInfo.styles.js';
import account from '../../../../static/account.js';
import background from '../../../../../assets/bg-img.png';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment.js';
import theme from '../../../../config/theme';
import { AuthContext } from '../../../../context/AuthContext/AuthContext.js';

function UpdateInfoScreen({ navigation, route }) {
  const userId = useContext(AuthContext).userId;
  const { rerender, setRerender } = route.params;

  const [fullName, setFullName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [formReady, setFormReady] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedGender, setSelectedGender] = useState(true);
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatePicker();
        setDateOfBirth(moment(currentDate).format('DD/MM/YYYY'));
      }
    } else {
      toggleDatePicker();
    }
  };
  const confirmIOSDate = () => {
    setDateOfBirth(moment(date).format('DD/MM/YYYY'));
    toggleDatePicker();
  };
  const [keyboardStatus, setKeyboardStatus] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://moneytrackerserver-production.up.railway.app/users/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        setFullName(data.data.name);
        setSlogan(data.data.slogan);
        setDateOfBirth(moment(data.data.dateOfBirth).format('DD/MM/YYYY'));
        setSelectedGender(data.data.gender);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  useEffect(() => {
    setFormReady(fullName && slogan && dateOfBirth);
    return () => {
      setFormReady(false);
    };
  }, [fullName, slogan, dateOfBirth, selectedGender]);
  const onSave = () => {
    if (formReady) {
      fetch(`https://moneytrackerserver-production.up.railway.app/users/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          slogan: slogan,
          gender: selectedGender,
          dateOfBirth: dateOfBirth,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          navigation.navigate('PersonalAccount', {
            rerender: !rerender,
            setRerender: setRerender,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Họ và tên:</Text>
          <TextInput style={styles.input} placeholder="Nhập họ tên" value={fullName} onChangeText={setFullName} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Khẩu hiệu:</Text>
          <TextInput placeholder="Nhập Khẩu hiệu" value={slogan} onChangeText={setSlogan} style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ngày sinh:</Text>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              style={styles.datePicker}
              textColor="#fff"
            />
          )}
          {showPicker && Platform.OS === 'ios' && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                style={[styles.button, styles.pickerButton, { backgroundColor: '#ccc' }]}
                onPress={toggleDatePicker}
              >
                <Text style={styles.buttonText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.pickerButton, { backgroundColor: theme.colors.quaternary }]}
                onPress={confirmIOSDate}
              >
                <Text
                  style={[styles.buttonText, { backgroundColor: theme.colors.quaternary, color: theme.colors.white }]}
                >
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {!showPicker && (
            <TouchableOpacity onPress={toggleDatePicker}>
              <TextInput
                placeholder="Nhập ngày sinh"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                style={styles.input}
                editable={false}
                onPressIn={toggleDatePicker}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Giới tính:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => handleGenderSelect(true)}>
              <Text style={styles.genderText}>{selectedGender ? '●' : '○'} Nam</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelect(false)}>
              <Text style={styles.genderText}>{!selectedGender ? '●' : '○'} Nữ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {keyboardStatus == '' && (
        <Pressable
          onPress={onSave}
          style={[
            styles.button,
            {
              backgroundColor: formReady ? theme.colors.quaternary : '#ccc',
              width: '70%',
              marginHorizontal: '15%',
              marginBottom: '5%',
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: formReady ? theme.colors.white : theme.colors.black }]}>Lưu</Text>
        </Pressable>
      )}
    </ImageBackground>
  );
}

export default UpdateInfoScreen;
