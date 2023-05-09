import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './spendSchedule.styles.js';
import SpendDetail from '../../../components/common/SpendDetail/SpendDetail.component.js';
import EnterMoney from '../../../components/common/EnterMoney/EnterMoney.component.js';
import theme from '../../../config/theme.js';
import { MaterialIcons } from '@expo/vector-icons';

const SpendScheduleScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);

  const [modalAddMoney, setModalAddMoney] = useState(false);
  const [modalSubMoney, setModalSubMoney] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.money_amount_container}>
        <Text style={styles.normal_text}>Số tiền dự định tháng này:</Text>
        <View style={styles.money_container}>
          <Text style={styles.money_text}>2,000,000 vnđ</Text>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.add_button} onPress={() => setModalAddMoney(true)}>
            <Text style={styles.add_button_text}>thêm trợ cấp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subtract_button} onPress={() => setModalSubMoney(true)}>
            <Text style={styles.subtract_button_text}>giảm trợ cấp</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detail_container}>
        <SpendDetail
          value1="2.000K"
          desc1="Tiền còn lại"
          value2="28"
          desc2="Ngày còn lại"
          value3="0K"
          desc3="Các khoản cố định"
          backgroundColor3={theme.colors.tertiary}
          textColor3={theme.colors.white}
          value4="0K"
          desc4="Đã tiêu hết"
        />
      </View>
      <View style={styles.select_month_container}>
        <TouchableOpacity>
          <MaterialIcons name="navigate-before" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.select_month_text}>Tháng này</Text>
        <TouchableOpacity>
          <MaterialIcons name="navigate-next" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.create_spend_schedule_container}>
        <TouchableOpacity
          style={styles.create_spend_schedule_button}
          onPress={() => navigation.navigate('ScheduleDetail')}
        >
          <Text style={styles.create_spend_schedule_text}>Xem kế hoạch chi tiêu</Text>
        </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={modalAddMoney} animationType="fade">
        <View style={styles.modal_container}>
          <EnterMoney title="Thêm trợ cấp" modalState={setModalAddMoney}></EnterMoney>
        </View>
      </Modal>
      <Modal transparent={true} visible={modalSubMoney} animationType="fade">
        <View style={styles.modal_container}>
          <EnterMoney title="Giảm trợ cấp" modalState={setModalSubMoney}></EnterMoney>
        </View>
      </Modal>
    </View>
  );
};

export default SpendScheduleScreen;
