import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './accountSetting.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import account from '../../static/account.js';
const AccountSettingScreen = ({ navigation }) => {
  const handlePressPersonalAccount = () => {
    navigation.navigate('PersonalAccount'); // chuyển đến màn hình Tài khoản cá nhân
  };
  const handlePressChangePassword = () => {
    navigation.navigate('ChangePassword'); // chuyển đến màn hình Thay đổi mật khẩu
  };

  const handlePressExpenseCategories = () => {
    navigation.navigate('ExpenseCategories'); // chuyển đến màn hình Danh mục chi tiêu
  };

  const handlePressFriendsList = () => {
    navigation.navigate('FriendsList'); // chuyển đến màn hình Danh sách bạn bè
  };

  const handlePressLoans = () => {
    navigation.navigate('Loans'); // chuyển đến màn hình Khoản vay nợ
  };

  const handlePressSavings = () => {
    navigation.navigate('Savings'); // chuyển đến màn hình Chỉnh sửa tiền tiết kiệm
  };

  const handlePressAbout = () => {
    navigation.navigate('About'); // chuyển đến màn hình Thông tin về ứng dụng
  };
  return (
    <View style={styles.wrapper}>
      {/* Header here */}
      <View style={styles.user_info_container}>
        <Image
          style={styles.image}
          source={{
            uri: account[5].avatar,
          }}
        />
        <Text style={styles.fullname}>{account[5].name}</Text>
        <Text style={styles.money}>2.000.000 vnđ</Text>
      </View>
      <View style={styles.list_action}>
        <TouchableOpacity style={styles.actionBtn} onPress={handlePressPersonalAccount}>
          <View style={styles.action}>
            <Ionicons style={styles.action_icon} name="person-circle-outline" size={24} />
            <Text style={styles.action_title}>Tài khoản cá nhân</Text>
            <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handlePressChangePassword}>
          <View style={styles.action}>
            <Ionicons style={styles.action_icon} name="key-outline" size={24} />
            <Text style={styles.action_title}>Thay đổi mật khẩu</Text>
            <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handlePressExpenseCategories}>
          <View style={styles.action}>
            <Ionicons style={styles.action_icon} name="reorder-four-outline" size={24} />
            <Text style={styles.action_title}>Danh mục chi tiêu</Text>
            <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handlePressFriendsList}>
          <View style={styles.action}>
            <Ionicons style={styles.action_icon} name="person-add-outline" size={24} />
            <Text style={styles.action_title}>Danh sách bạn bè</Text>
            <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handlePressLoans}>
          <View style={styles.action}>
            <Ionicons style={styles.action_icon} name="newspaper-outline" size={24} />
            <Text style={styles.action_title}>Khoản vay nợ</Text>
            <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handlePressSavings}>
          <View style={styles.action}>
            <Ionicons style={styles.action_icon} name="logo-bitcoin" size={24} />
            <Text style={styles.action_title}>Chỉnh sửa tiết kiệm</Text>
            <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handlePressAbout}>
          <View style={styles.action}>
            <Ionicons style={styles.action_icon} name="information-circle-outline" size={24} />
            <Text style={styles.action_title}>Thông tin ứng dụng</Text>
            <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountSettingScreen;
