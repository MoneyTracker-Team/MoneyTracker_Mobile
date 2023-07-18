import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Screen
import LoginScreen from '../screens/Auth/Login';
import SignupScreen from '../screens/Auth/Signup';

import HomeScreen from '../screens/Home';
import SpendScheduleScreen from '../screens/Schedule/SpendSchedule/SpendScheduleScreen';
import ScheduleDetailScreen from '../screens/Schedule/ScheduleDetail';
import CreateSpendingScreen from '../screens/Spending/CreateSpending';

import Calendar from '../screens/SpendHistory/Calendar';
import UpdateAndDeleteSpend from '../screens/SpendHistory/UpdateAndDeleteSpend';

import StatisticScreen from '../screens/Statistic/StatisticPie';

import AccountSettingScreen from '../screens/AccountSetting';
import PersonalAccountScreen from '../screens/AccountSetting/PersonalAccount';
import UpdateInfoScreen from '../screens/AccountSetting/PersonalAccount/UpdateInfo';
import ChangePasswordScreen from '../screens/AccountSetting/ChangePassword';
import ExpenseCategoriesScreen from '../screens/AccountSetting/ExpenseCategories';
import FriendsListScreen from '../screens/AccountSetting/FriendsList';
import LoansScreen from '../screens/AccountSetting/Loans';
import SavingsScreen from '../screens/AccountSetting/Savings';
import AboutScreen from '../screens/AccountSetting/About';
import PaymentScreen from '../screens/AccountSetting/Loans/PaymentScreen/PaymentScreen';
import DebtDetailScreen from '../screens/AccountSetting/Loans/DebtDetailScreen/DebtDetailScreen';
import CreateDebtScreen from '../screens/AccountSetting/Loans/CreateDebtSreen/CreateDebtSreen';
import EditDebtScreen from '../screens/AccountSetting/Loans/EditDebtSreen/EditDebtSreen';
const Stack = createStackNavigator();

// Auth Stack
const StackFromAuth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

// Home Stack
const StackFromHomeTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => <></>, title: 'Trang chủ' }} />
      <Stack.Screen name="SpendSchedule" component={SpendScheduleScreen} options={{ title: 'Lập kế hoạch chi tiêu' }} />
      <Stack.Screen name="ScheduleDetail" component={ScheduleDetailScreen} options={{ title: 'Chi tiết chi tiêu' }} />
      <Stack.Screen name="CreateSpending" component={CreateSpendingScreen} options={{ title: 'Tạo phiếu chi tiêu' }} />
    </Stack.Navigator>
  );
};

// History Stack
const StackFromSpendHistoryTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen name="Chi tiêu trong tháng" component={Calendar} options={{ headerLeft: () => <></> }} />
      <Stack.Screen
        name="UpdateAndDeleteSpend"
        component={UpdateAndDeleteSpend}
        options={{ title: 'Chi tiết chi tiêu' }}
      />
    </Stack.Navigator>
  );
};

// Statistic Stack
const StackFromStatisticTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen
        name="Statistics"
        component={StatisticScreen}
        options={{ headerLeft: () => <></>, title: 'Thống kê' }}
      />
    </Stack.Navigator>
  );
};

// Setting Stack
const StackFromAccountTag = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#223F30' },
        headerTintColor: '#fff',
        headerLeft: (props) => (
          <Ionicons {...props} name="chevron-back" color="#fff" size={30} style={{ paddingHorizontal: 20 }} />
        ),
      }}
    >
      <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{ headerLeft: () => <></>, title: 'Cài đặt tài khoản' }}
      />
      <Stack.Screen
        name="PersonalAccount"
        component={PersonalAccountScreen}
        options={{ title: 'Thông tin tài khoản' }}
      />
      <Stack.Screen name="UpdateInfo" component={UpdateInfoScreen} options={{ title: 'Cập nhật thông tin' }} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ title: 'Đổi mật khẩu' }} />
      <Stack.Screen
        name="ExpenseCategories"
        component={ExpenseCategoriesScreen}
        options={{ title: 'Danh mục chi tiêu' }}
      />
      <Stack.Screen name="FriendsList" component={FriendsListScreen} options={{ title: 'Danh sách bạn bè' }} />
      <Stack.Screen name="Loans" component={LoansScreen} options={{ title: 'Khoản vay nợ' }} />
      <Stack.Screen name="Savings" component={SavingsScreen} options={{ title: 'Điều chỉnh tiền tiết kiệm' }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Thông tin ứng dụng' }} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Thanh toán' }} />
      <Stack.Screen name="DebtDetail" component={DebtDetailScreen} options={{ title: 'Chi tiết phiếu nợ' }} />
      <Stack.Screen name="CreateDebt" component={CreateDebtScreen} options={{ title: 'Tạo phiếu nợ' }} />
      <Stack.Screen name="EditDebt" component={EditDebtScreen} options={{ title: 'Sửa phiếu nợ' }} />
    </Stack.Navigator>
  );
};

export { StackFromAuth, StackFromHomeTag, StackFromSpendHistoryTag, StackFromStatisticTag, StackFromAccountTag };
