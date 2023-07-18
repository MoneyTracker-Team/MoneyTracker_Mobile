import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import styles from './passwordInput.styles.js';

function PasswordInput({ navigation, label, placeholder, value, onChangeText }) {
  const [inputCurrentPasswordType, setInputCurrentPasswordType] = useState('password');
  const togglePasswordVisibility = () => {
    setInputCurrentPasswordType(inputCurrentPasswordType === 'password' ? 'text' : 'password');
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={inputCurrentPasswordType === 'password'}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <TouchableOpacity style={styles.eyeBtn} onPress={togglePasswordVisibility}>
        {inputCurrentPasswordType === 'password' ? (
          <Ionicons style={styles.eye_icon} name="eye-off-outline" size={24} />
        ) : (
          <Ionicons style={styles.eye_icon} name="eye-outline" size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default PasswordInput;
