import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from './loans.styles.js';
import background from '../../../../assets/bg-img.png';
import theme from '../../../config/theme.js';
// import debts from '../../../static/debts.js';
// import debtAccounts from '../../../static/debtAccounts.js';
import ScreenTab from '../../../components/ScreenTab/ScreenTab.component.js';
import DebtItem from './DebtItem/DebtItem.jsx';
import DebtAccountItem from './DebtAccountItem/DebtAccountItem.jsx';
import { AuthContext } from '../../../context/AuthContext/AuthContext.js';
function LoansScreen({ navigation }) {
  const userId = useContext(AuthContext).userId;
  const [rerender, setRerender] = useState(true);
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);
  const [loanData, setLoanData] = useState([]);
  const [accountDetbData, setAccountDetbData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url1 = `https://moneytrackerserver-production.up.railway.app/loans/all-of-user/${userId}`;
        const response1 = await fetch(url1);
        const data1 = await response1.json();
        setLoanData(data1.data);

        const url2 = `https://moneytrackerserver-production.up.railway.app/loans/group-by-debtor/${userId}`;
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        setAccountDetbData(data2.data);

        setStatusFilter(status);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [rerender]);
  const listTab = [
    { status: true, title: 'Tiền nợ' },
    { status: false, title: 'Tiền cho nợ' },
    { status: 'payment', title: 'Thanh toán' },
  ];
  const [status, setStatus] = useState(true);
  const [debtLoanList, setDebtLoanList] = useState([...loanData.filter((debtLoan) => debtLoan.isDebt === status)]);
  const setStatusFilter = (status) => {
    setDebtLoanList([...loanData.filter((debtLoan) => debtLoan.isDebt === status)]);
    setStatus(status);
  };

  useEffect(() => {
    setDebtLoanList([...loanData.filter((debtLoan) => debtLoan.isDebt === status)]);
  }, [loanData]);

  const handleAddNewdebtLoan = () => {
    navigation.navigate('CreateDebt', { status: status });
    // Call API here
  };
  const renderDebtItem = ({ item, index }) => {
    const handleDebtItemPress = () => {
      navigation.navigate('DebtDetail', { debtId: item._id });
    };

    return (
      <TouchableOpacity onPress={handleDebtItemPress}>
        <DebtItem item={item} />
      </TouchableOpacity>
    );
  };
  const renderDebtAccountItem = ({ item, index }) => {
    const handleDebtAccountPress = () => {
      navigation.navigate('Payment', { debtAccountId: item._id, rerender: rerender, setRerender: setRerender });
    };

    return (
      <TouchableOpacity onPress={handleDebtAccountPress}>
        <DebtAccountItem item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <ScreenTab listTab={listTab} status={status} setStatusFilter={setStatusFilter} />
      <View
        style={{
          borderBottomColor: theme.colors.quaternary,
          borderBottomWidth: 1,
          width: '85%',
          marginTop: 4,
          marginStart: '8%',
        }}
      />
      {status === 'debt' && (
        <View style={{ flexDirection: 'column', margin: '3%' }}>
          <Text style={styles.isFriendText}>Số tiền đang nợ:</Text>
          <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.headline_one }}>350000 vnđ</Text>
        </View>
      )}
      {status === 'loan' && (
        <View style={{ flexDirection: 'column', margin: '3%' }}>
          <Text style={styles.isFriendText}>Số tiền đang cho nợ:</Text>
          <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.headline_one }}>500000 vnđ</Text>
        </View>
      )}
      {status !== 'payment' && (
        <FlatList data={debtLoanList} keyExtractor={(e, i) => i.toString()} renderItem={renderDebtItem} />
      )}
      {status === true && (
        <TouchableOpacity style={styles.btnAddNewdebtLoan} onPress={handleAddNewdebtLoan}>
          <Text style={styles.textAddNewdebtLoan}>Thêm phiếu nợ</Text>
        </TouchableOpacity>
      )}
      {status === false && (
        <TouchableOpacity style={styles.btnAddNewdebtLoan} onPress={handleAddNewdebtLoan}>
          <Text style={styles.textAddNewdebtLoan}>Thêm phiếu cho nợ</Text>
        </TouchableOpacity>
      )}
      {status === 'payment' && (
        <View style={{ flex: 1 }}>
          <FlatList data={accountDetbData} keyExtractor={(e, i) => i.toString()} renderItem={renderDebtAccountItem} />
        </View>
      )}
    </ImageBackground>
  );
}

export default LoansScreen;
