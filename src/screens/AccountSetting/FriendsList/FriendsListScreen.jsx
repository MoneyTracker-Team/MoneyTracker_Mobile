import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from './friendsList.styles.js';
import FriendWithAccount from './FriendWithAccount/FriendWithAccount.jsx';
import FriendWithoutAccount from './FriendWithoutAccount/FriendWithoutAccount.jsx';
import AccountItem from '../../../components/AccountItem/AccountItem.component.js';
import friendWithAccount from '../../../static/friendWithAccount.js';
import friendWithoutAccount from '../../../static/friendWithoutAccount.js';
import account from '../../../static/account.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';

function FriendsListScreen({ navigation }) {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const [inputSearchValue, setInputSearchValue] = useState('');
  const [filteredAccount, setFilteredAccount] = useState(account);
  const handleInputSearchChange = (text) => {
    setInputSearchValue(text);
    const filtered = account.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredAccount(filtered);
  };
  const onSave = () => {
    // Call API Save here
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);
  const openModal = (item) => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const addFriend = () => {
    openModal();
  };

  const [showAddFriendWithAccountModal, setShowAddFriendWithAccountModal] = useState(false);
  const openAddFriendWithAccountnModal = (item) => {
    setShowAddFriendWithAccountModal(true);
  };
  const closeAddFriendWithAccountModal = () => {
    setInputSearchValue('');
    setFilteredAccount(account);
    setShowAddFriendWithAccountModal(false);
  };

  const addFriendWithAccount = () => {
    openAddFriendWithAccountnModal();
  };

  const renderItem1 = ({ item, index }) => {
    return (
      <View key={index}>
        <FriendWithoutAccount data={item} />
      </View>
    );
  };
  const renderItem2 = ({ item, index }) => {
    return (
      <View key={index}>
        <FriendWithAccount data={item} />
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.listFriendWithoutAccount}>
        <View style={styles.header}>
          <Text style={styles.title}>Không có tài khoản</Text>
          <TouchableOpacity style={styles.btnAdd} onPress={addFriend}>
            <Text style={styles.textAddFriend}>Thêm</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={friendWithoutAccount} keyExtractor={(e, i) => i.toString()} renderItem={renderItem1} />
      </View>
      <View style={styles.listFriendWithAccount}>
        <View style={styles.header}>
          <Text style={styles.title}>Có tài khoản</Text>
          <TouchableOpacity style={styles.btnAdd} onPress={addFriendWithAccount}>
            <Text style={styles.textAddFriend}>Thêm</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={friendWithAccount} keyExtractor={(e, i) => i.toString()} renderItem={renderItem2} />
      </View>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.bottomView}>
          <View style={keyboardStatus == '' ? styles.modalView : styles.modalViewTop}>
            <TouchableOpacity style={styles.closeModal} onPress={closeModal}>
              <Ionicons name="close-outline" size={24} />
            </TouchableOpacity>
            <View style={styles.modalContent}>
              <Text style={styles.modalLabel}>Nhập tên:</Text>
              <TextInput
                style={styles.modalInput}
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder="Enter text here"
              />
              <TouchableOpacity style={styles.btnSave} onPress={onSave}>
                <Text style={styles.textAddNew}>Tạo mới</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        onBackdropPress={() => {
          console.log('hey');
        }}
        animationType="slide"
        transparent={true}
        visible={showAddFriendWithAccountModal}
      >
        <View style={styles.bottomView}>
          <View style={keyboardStatus == '' ? styles.modalView1 : styles.modalViewTop1}>
            <TouchableOpacity style={styles.closeModal} onPress={closeAddFriendWithAccountModal}>
              <Ionicons name="close-outline" size={24} />
            </TouchableOpacity>
            <View style={styles.modalContent1}>
              <View style={styles.searchContainer}>
                <Ionicons name="search-outline" style={styles.searchIcon} />
                <TextInput
                  style={styles.modalInput1}
                  value={inputSearchValue}
                  onChangeText={handleInputSearchChange}
                  placeholder="Tìm kiếm bạn bè"
                />
              </View>
              <FlatList
                style={{ width: '100%', marginVertical: '2%', marginRight: '9%' }}
                data={filteredAccount}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.centeredComponent}>
                    <AccountItem data={item} />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default FriendsListScreen;
