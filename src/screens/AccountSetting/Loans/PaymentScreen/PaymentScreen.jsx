import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import background from '../../../../../assets/bg-img.png';
import DebtItem from '../DebtItem/DebtItem';
import theme from '../../../../config/theme.js';
import styles from './paymentScreen.styles.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthContext } from '../../../../context/AuthContext/AuthContext';
import formatNumber from '../../../../utils/formatNumber';
import { backend_url as baseUrl } from '../../../../config/baseURL.js';

const PaymentScreen = ({ navigation, route }) => {
  const userId = useContext(AuthContext).userId;
  const [debtAccountData, setDebtAccountData] = useState({});
  const [debtList, setDebtList] = useState([]);
  const [loanList, setLoanList] = useState([]);
  const { debtAccountId, rerender, setRerender } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/loans/checkout-debtor/${userId}?debtorId=${debtAccountId}`;
        const response = await fetch(url);
        const data = await response.json();
        setDebtAccountData(data.data);
        setDebtList([...data.data.loanAndDebts.filter((debt) => debt.isDebt === true)]);
        setLoanList([...data.data.loanAndDebts.filter((debt) => debt.isDebt === false)]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderDebtItem = ({ item, index }) => {
    const handleDebtItemPress = () => {
      navigation.navigate('DebtDetail', { debtItem: item });
    };

    return (
      <TouchableOpacity onPress={handleDebtItemPress}>
        <DebtItem item={item} />
      </TouchableOpacity>
    );
  };

  const onPayment = async () => {
    try {
      const response = await fetch(`${baseUrl}/loans/checkout/${userId}?debtorId=${debtAccountId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setRerender(!rerender);
      navigation.navigate('Loans');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={styles.info}>
        {debtAccountData?.loanAndDebts && (
          <>
            <Image
              style={styles.itemImage}
              source={{
                uri: debtAccountData.loanAndDebts[0].debtor.image,
              }}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{debtAccountData.loanAndDebts[0].debtor.name}</Text>
              <Text style={styles.friend}>Bạn bè</Text>
            </View>
          </>
        )}
      </View>
      {debtList.length > 0 && (
        <View style={styles.listDebt}>
          <Text style={styles.title}>Khoản đã nợ</Text>
          <FlatList data={debtList} keyExtractor={(e, i) => i.toString()} renderItem={renderDebtItem} />
        </View>
      )}
      {loanList.length > 0 && (
        <View style={styles.listDebt}>
          <Text style={styles.title}>Khoản cho nợ</Text>
          <FlatList data={loanList} keyExtractor={(e, i) => i.toString()} renderItem={renderDebtItem} />
        </View>
      )}
      <TouchableOpacity style={styles.btnPayment} onPress={onPayment}>
        <Text style={styles.textPayment}>
          Thanh toán
          <Text style={debtAccountData?.checkoutMoney > 0 ? styles.positiveAmount : styles.negativeAmount}>
            {formatNumber(debtAccountData?.checkoutMoney ? debtAccountData?.checkoutMoney / 1000 : 0)}K
          </Text>
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default PaymentScreen;
