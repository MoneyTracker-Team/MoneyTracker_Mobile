import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import styles from './about.styles.js';
import logo from '../../../../assets/money_tracking_logo.png';
import background from '../../../../assets/bg-img.png';
import theme from '../../../config/theme.js';
function AboutScreen({ navigation }) {
  return (
    <ImageBackground source={background} style={styles.background}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>
          Money Tracking là một công cụ hữu ích giúp người dùng theo dõi và quản lý các khoản chi tiêu của mình một cách
          dễ dàng và hiệu quả. Đây là một ứng dụng giúp người dùng tiết kiệm thời gian, nỗ lực và tiền bạc trong việc
          quản lý tài chính cá nhân. Được tạo ra bởi 3 lập trình viên năng động, sáng tạo, cùng với giao diện hiện đại,
          các tính năng nổi bật, ứng dụng hướng tới người dùng ở mọi lứa tuổi, ngành nghề trên khắp cả nước.{' '}
        </Text>
      </View>
      <View style={styles.contactContainer}>
        <Text style={{ fontSize: theme.fontSizes.text_body, color: theme.colors.white, marginLeft: '3%' }}>
          Thông tin liên hệ:
        </Text>
        <View style={styles.infoContainer}>
          <Ionicons style={styles.icon} name="logo-facebook" size={20} color="#3b5998" />
          <Text style={styles.contact}>https://www.facebook.com/khoi.duy.946954</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons style={styles.icon1} name="logo-twitter" size={20} color={theme.colors.white} />
          <Text style={styles.contact}>https://www.facebook.com/khoi.duy.946954</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons style={styles.icon} name="logo-youtube" size={20} color="#fd031b" />
          <Text style={styles.contact}>https://www.facebook.com/khoi.duy.946954</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons style={styles.icon} name="logo-linkedin" size={20} color="#0a66c2" />
          <Text style={styles.contact}>https://www.linkedin.com/in/tintran0101</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default AboutScreen;
