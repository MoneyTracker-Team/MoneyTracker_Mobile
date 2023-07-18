import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Keyboard, TextInput, Pressable, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import styles from './changePassword.styles.js';
import theme from '../../../config/theme';
import background from '../../../../assets/bg-img.png';
import PasswordInput from './PasswordInput/PasswordInput.jsx';
import { AuthContext } from '../../../context/AuthContext/AuthContext.js';

function ChangePasswordScreen({ navigation }) {
  const userId = useContext(AuthContext).userId;
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
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
  const onSave = async () => {
    if (formReady) {
      //Call API  Check password here
      if (newPassword === confirmPassword && newPassword.length > 5) {
        try {
          const response = await fetch(
            `https://moneytrackerserver-production.up.railway.app/users/update-pass/${userId}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                oldPassword: currentPassword,
                newPassword: newPassword,
              }),
            },
          );
          const data = await response.json();
          if (data.status === 200 || data.status === 201) {
            setErrorMessage('');
            navigation.navigate('AccountSetting');
          } else {
            setErrorMessage('Đổi mật khẩu thất bại!');
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setErrorMessage('Đổi mật khẩu thất bại!');
      }
    }
  };
  return (
    <ImageBackground source={background} style={styles.wrapper}>
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
      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}
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
    </ImageBackground>
  );
}

export default ChangePasswordScreen;
