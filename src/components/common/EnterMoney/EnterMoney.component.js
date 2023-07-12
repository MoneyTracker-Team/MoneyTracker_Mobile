import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './EnterMoney.style';
import { ScrollView } from 'react-native-gesture-handler';

const EnterMoney = (props) => {
  const { title, modalState, scheduleMoney, setScheduleMoney } = props;

  const [money, setMoney] = useState();

  const handleTextChange = (text) => {
    setMoney(text);
  };

  const handleMoneyChange = () => {
    const a = parseFloat(money);
    if (title == 'Thêm trợ cấp') {
      setScheduleMoney(scheduleMoney + a);
    } else {
      setScheduleMoney(scheduleMoney - a);
    }
    modalState(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.close_button} onPress={() => modalState(false)}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.input_money}
            textAlign="center"
            inputMode="numeric"
            placeholder="Nhập số tiền"
            value={money}
            onChangeText={handleTextChange}

          ></TextInput>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.cancel_button} onPress={() => modalState(false)}>
              <Text style={styles.cancel_text}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.save_button} onPress={() => handleMoneyChange()}>
              <Text style={styles.save_text}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnterMoney;
