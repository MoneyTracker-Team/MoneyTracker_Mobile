import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import background from '../../../../../assets/bg-img.png';
import theme from '../../../../config/theme.js';
import { useRoute } from '@react-navigation/native';
import styles from './debtDetailScreen.styles';
import formatNumber from '../../../../utils/formatNumber';
const DebtDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { debtId, rerender, setRerender } = route.params;
  const [debtDetailData, setDebtDetailData] = useState({});
  const onEdit = () => {
    navigation.navigate('EditDebt', { debtId: debtId, rerender: rerender, setRerender: setRerender });
  };

  function formatDatetime(datetimeStr) {
    // Chuyển đổi chuỗi thành đối tượng Date
    const datetime = new Date(datetimeStr);

    // Lấy giờ, phút, giây
    const hours = datetime.getHours();
    const minutes = datetime.getMinutes();
    const seconds = datetime.getSeconds();

    // Lấy ngày, tháng, năm
    const day = datetime.getDate();
    const month = datetime.getMonth() + 1;
    const year = datetime.getFullYear();

    // Định dạng lại ngày giờ
    const formattedDatetime = `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;

    return formattedDatetime;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://moneytrackerserver-production.up.railway.app/loans/${debtId}`;
        const response = await fetch(url);
        const data = await response.json();
        setDebtDetailData(data.data[0]);
        // console.log(data.data[0].debtor[0].image);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [rerender]);
  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={styles.info}>
        {debtDetailData?.debtor && (
          <>
            <Image
              style={styles.itemAvatar}
              source={{
                uri: debtDetailData.debtor[0].image,
              }}
            />
            <View style={styles.nameCotainer}>
              <Text style={styles.itemName}>{debtDetailData.debtor[0].name}</Text>
              <Text style={styles.isFriendText}>Bạn bè</Text>
            </View>
          </>
        )}
        <View
          style={[
            styles.moneyContainer,
            { backgroundColor: debtDetailData?.isDebt === true ? theme.colors.tertiary : theme.colors.light_primary },
          ]}
        >
          <Text style={styles.moneyAmount}>
            {formatNumber(debtDetailData?.moneySpend ? debtDetailData?.moneySpend / 1000 : 0)}K
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {debtDetailData?.image && (
          <Image
            style={styles.itemImage}
            source={{
              uri: debtDetailData?.image,
            }}
          />
        )}
        {!debtDetailData?.image && (
          <Text style={[styles.content, { marginHorizontal: '26%', marginVertical: '20%' }]}>Không có hình ảnh</Text>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          Ghi chú: <Text style={styles.content}>{debtDetailData?.note}</Text>
        </Text>
        <Text style={styles.title}>
          Tại: <Text style={styles.content}>{debtDetailData?.location}</Text>
        </Text>
        <Text style={styles.title}>
          Vào lúc: <Text style={styles.content}>{formatDatetime(debtDetailData?.dateTime)}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.btnEditDetail} onPress={onEdit}>
        <Text style={styles.textEditDetail}>Sửa</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default DebtDetailScreen;
