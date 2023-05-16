import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, Pressable, Keyboard } from 'react-native';
import styles from './updateInfo.styles.js';
import account from '../../../../static/account.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment.js';
import theme from '../../../../config/theme';

function UpdateInfoScreen({ navigation }) {
  const [fullName, setFullName] = useState(account[5].name);
  const [idNumber, setIdNumber] = useState(account[5].idNumber);
  const [dateOfBirth, setDateOfBirth] = useState(account[5].dateOfBirth);
  const [formReady, setFormReady] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedGender, setSelectedGender] = useState(account[5].gender);
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
    setFormReady(fullName && idNumber && dateOfBirth && selectedGender);
    return () => {
      setFormReady(false);
    };
  }, [fullName, idNumber, dateOfBirth, selectedGender]);
  const onSave = () => {
    if (formReady) {
      // Call API save here
      navigation.navigate('PersonalAccount'); // chuyển đến màn hình Thông tin
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Họ và tên:</Text>
          <TextInput style={styles.input} placeholder="Nhập họ tên" value={fullName} onChangeText={setFullName} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Số định danh:</Text>
          <TextInput
            placeholder="Nhập số định danh"
            inputMode="numeric"
            value={idNumber}
            onChangeText={setIdNumber}
            style={styles.input}
          />
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
            <TouchableOpacity onPress={() => handleGenderSelect('Nam')}>
              <Text style={styles.genderText}>{selectedGender === 'Nam' ? '●' : '○'} Nam</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelect('Nữ')}>
              <Text style={styles.genderText}>{selectedGender === 'Nữ' ? '●' : '○'} Nữ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelect('Khác')}>
              <Text style={styles.genderText}>{selectedGender === 'Khác' ? '●' : '○'} Khác</Text>
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
    </View>
  );
}

export default UpdateInfoScreen;
