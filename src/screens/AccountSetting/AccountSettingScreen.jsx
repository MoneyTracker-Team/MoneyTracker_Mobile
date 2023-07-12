import React, { useEffect, useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './accountSetting.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import background from '../../../assets/bg-img.png';
import { AuthContext } from '../../context/AuthContext/AuthContext.js';
const AccountSettingScreen = ({ navigation }) => {
  const userId = useContext(AuthContext).userId;
  const [userData, setUserData] = useState({});
  const [rerender, setRerender] = useState(true);
  const handlePressPersonalAccount = () => {
    navigation.navigate('PersonalAccount', {
      rerender: rerender,
      setRerender: setRerender,
    }); // chuyển đến màn hình Tài khoản cá nhân
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://moneytrackerserver-production.up.railway.app/users/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [rerender]);
  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={styles.user_info_container}>
        {userData?.avatar && (
          <Image
            style={styles.image}
            source={{
              uri: userData?.avatar,
            }}
          />
        )}
        <Text style={styles.fullname}>{userData?.name}</Text>
        <Text style={styles.money}>{userData?.currentMoney} vnđ</Text>
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
    </ImageBackground>
  );
};

export default AccountSettingScreen;
