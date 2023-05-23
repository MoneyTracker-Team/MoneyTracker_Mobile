import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Keyboard, TextInput, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import styles from './changePassword.styles.js';
import theme from '../../../config/theme';
import PasswordInput from './PasswordInput/PasswordInput.jsx';

function ChangePasswordScreen({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('123abc');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formReady, setFormReady] = useState(false);
  const [inputCurrentPasswordType, setInputCurrentPasswordType] = useState('password');
  const togglePasswordVisibility = () => {
    setInputCurrentPasswordType(inputCurrentPasswordType === 'password' ? 'text' : 'password');
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
    setFormReady(currentPassword && newPassword && confirmPassword);
    return () => {
      setFormReady(false);
    };
  }, [currentPassword, newPassword, confirmPassword]);
  const onSave = () => {
    if (formReady) {
      //Call API  Check password here
      if (newPassword === confirmPassword && newPassword.length > 5) {
        // Call API save here
        navigation.navigate('AccountSetting'); // chuyển đến màn hình Cài đặt
      }
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        <PasswordInput
          label="Mật khẩu hiện tại"
          placeholder="Nhập mật khẩu hiện tại"
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <PasswordInput
          label="Mật khẩu mới"
          placeholder="Nhập mật khẩu mới"
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <PasswordInput
          label="Nhập lại mật khẩu mới"
          placeholder="Nhập lại mật khẩu mới"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
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
          <Text style={[styles.buttonText, { color: formReady ? theme.colors.white : theme.colors.black }]}>
            Xác nhận
          </Text>
        </Pressable>
      )}
    </View>
  );
}

export default ChangePasswordScreen;
