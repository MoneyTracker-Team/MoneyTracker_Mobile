import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import background from '../../../../assets/bg-img.png';
import styles from './friendsList.styles.js';
import FriendWithAccount from './FriendWithAccount/FriendWithAccount.jsx';
import FriendWithoutAccount from './FriendWithoutAccount/FriendWithoutAccount.jsx';
import AccountItem from '../../../components/AccountItem/AccountItem.component.js';
// import account from '../../../static/account.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import { backend_url as baseUrl } from '../../../config/baseURL.js';

function FriendsListScreen({ navigation }) {
  const userId = useContext(AuthContext).userId;
  const [friendData, setFriendData] = useState([]);
  const [friendWithAccount, setFriendWithAccount] = useState([]);
  const [friendWithoutAccount, setFriendWithoutAccount] = useState([]);
  const [base64Image, setBase64Image] = useState('');
  const [image, setImage] = useState(null);
  const [rerender, setRerender] = useState(true);
  const [notFriendList, setNotFriendList] = useState([]);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/friends/all-of-user/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        setFriendData(data.data.friends);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [rerender]);

  const { friendWithAccountList, friendWithoutAccountList } = friendData.reduce(
    (result, friend) => {
      const { friendId, ...rest } = friend;
      if (friendId) {
        result.friendWithAccountList.push(rest);
      } else {
        result.friendWithoutAccountList.push(rest);
      }
      return result;
    },
    { friendWithAccountList: [], friendWithoutAccountList: [] },
  );

  useEffect(() => {
    setFriendWithAccount(friendWithAccountList);
    setFriendWithoutAccount(friendWithoutAccountList);
  }, [friendData]);

  useEffect(() => {
    setNotFriendList(notFriendList);
  }, [notFriendList]);

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const [inputSearchValue, setInputSearchValue] = useState('');
  const [filteredAccount, setFilteredAccount] = useState(notFriendList);
  const handleInputSearchChange = (text) => {
    setInputSearchValue(text);
    let filtered = [];
    if (notFriendList.length > 0) {
      filtered = notFriendList.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    }
    setFilteredAccount(filtered);
  };

  function getCharactersAfterLastDot(str) {
    const lastDotIndex = str.lastIndexOf('.');
    if (lastDotIndex !== -1 && lastDotIndex < str.length - 1) {
      return str.substring(lastDotIndex + 1);
    }
    return '';
  }

  const openImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const charactersAfterLastDot = getCharactersAfterLastDot(result.assets[0].uri);
      setBase64Image('data:image/' + charactersAfterLastDot + ';base64,' + result.assets[0].base64);
    }
  };

  const onSave = async () => {
    if (inputValue !== '') {
      if (base64Image) {
        try {
          const response = await fetch(`${baseUrl}/friends/create/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              isTemporaty: false,
              name: inputValue,
              image: base64Image,
            }),
          });
          const data = await response.json();
          setRerender(!rerender);
          setShowModal(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await fetch(`${baseUrl}/friends/create/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              isTemporaty: false,
              name: inputValue,
            }),
          });
          const data = await response.json();
          setRerender(!rerender);
          setShowModal(false);
        } catch (error) {
          console.log(error);
        }
      }
    }
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const [showAddFriendWithAccountModal, setShowAddFriendWithAccountModal] = useState(false);
  const openAddFriendWithAccountnModal = () => {
    setShowAddFriendWithAccountModal(true);
  };
  const closeAddFriendWithAccountModal = () => {
    setInputSearchValue('');
    setFilteredAccount(notFriendList);
    setShowAddFriendWithAccountModal(false);
  };

  const addFriendWithAccount = () => {
    const fetchData1 = async () => {
      try {
        const url = `${baseUrl}/users/user-not-friend/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        setNotFriendList(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData1();
    openAddFriendWithAccountnModal();
  };

  const renderItem1 = ({ item, index }) => {
    return (
      <View key={index}>
        <FriendWithoutAccount data={item} rerender={rerender} setRerender={setRerender} />
      </View>
    );
  };
  const renderItem2 = ({ item, index }) => {
    return (
      <View key={index}>
        <FriendWithAccount data={item} rerender={rerender} setRerender={setRerender} />
      </View>
    );
  };
  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={styles.listFriendWithoutAccount}>
        <View style={styles.header}>
          <Text style={styles.title}>Không có tài khoản</Text>
          <TouchableOpacity style={styles.btnAdd} onPress={openModal}>
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
              <Text style={styles.modalLabel}>Ảnh đại diện:</Text>
              {!image && (
                <View style={styles.chooseImage}>
                  <TouchableOpacity style={styles.chooseImageBtn} onPress={openImagePicker}>
                    <Ionicons style={styles.action_icon_1} name="camera-outline" size={30} />
                  </TouchableOpacity>
                </View>
              )}
              {image && (
                <View style={styles.choosedImage}>
                  <TouchableOpacity style={styles.chooseImageBtn} onPress={openImagePicker}>
                    <Ionicons style={styles.action_icon_1} name="camera-outline" size={30} />
                  </TouchableOpacity>
                  <Image source={{ uri: image }} style={styles.image} />
                </View>
              )}
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
              {notFriendList.length > 0 && (
                <FlatList
                  style={{ width: '100%', marginVertical: '2%', marginRight: '9%' }}
                  data={filteredAccount}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <View style={styles.centeredComponent}>
                      <AccountItem
                        data={item}
                        rerender={rerender}
                        setRerender={setRerender}
                        setShowAddFriendWithAccountModal={setShowAddFriendWithAccountModal}
                      />
                    </View>
                  )}
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

export default FriendsListScreen;
