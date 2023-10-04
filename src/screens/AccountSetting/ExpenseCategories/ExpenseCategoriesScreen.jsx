import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Keyboard,
  ImageBackground,
  Alert,
} from 'react-native';
import styles from './expenseCategories.styles.js';
import categories from '../../../static/categories.js';
import ScreenTab from '../../../components/ScreenTab/ScreenTab.component.js';
import background from '../../../../assets/bg-img.png';
import * as ImagePicker from 'expo-image-picker';
import theme from '../../../config/theme';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { AuthContext } from '../../../context/AuthContext/AuthContext.js';
import { backend_url as baseUrl } from '../../../config/baseURL.js';

function ExpenseCategoriesScreen({ navigation }) {
  const userId = useContext(AuthContext).userId;
  const [categoryData, setCategoryData] = useState([]);
  const [base64Image, setBase64Image] = useState();
  const [rerender, setRerender] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/type-spends/all-of-user/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        setCategoryData(data.data.typeSpends);
        setStatusFilter(status);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [rerender]);
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          {item.image && (
            <Image
              style={styles.itemImage}
              source={{
                uri: item.image,
              }}
            />
          )}
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <Ionicons
          style={[styles.action_icon, { opacity: item.isDefault ? 0 : 1 }]}
          name="settings-outline"
          size={24}
          onPress={() => openModal(item)}
        />
      </View>
    );
  };
  const listTab = [
    { status: true, title: 'Hằng ngày' },
    { status: false, title: 'Hằng tháng' },
  ];
  const [status, setStatus] = useState(true);
  const [categoryList, setCategoryList] = useState([...categoryData.filter((category) => category.isDaily === status)]);
  const setStatusFilter = (status) => {
    setCategoryList([...categoryData.filter((category) => category.isDaily === status)]);
    setStatus(status);
  };
  useEffect(() => {
    setCategoryList([...categoryData.filter((category) => category.isDaily === status)]);
  }, [categoryData]);
  const [showModal, setShowModal] = useState(false);
  const openModal = (item) => {
    if (item !== null) {
      if (!item.isDefault) {
        setSelectedItem(item);
        setImage(item.image);
        setInputValue(item.name);
        setShowModal(true);
      }
    } else {
      setImage(null);
      setShowModal(true);
    }
  };

  const onDelete = async () => {
    Alert.alert('Xác nhận xóa', 'Bạn có chắc chắn muốn xóa danh mục này không?', [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {
        text: 'Có',
        onPress: async () =>
          await fetch(`${baseUrl}/type-spends/delete/${selectedItem._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setRerender(!rerender);
              Alert.alert('Xóa danh mục chi tiêu thành công', '', [
                {
                  text: 'Ok',
                  onPress: () => {
                    setInputValue('');
                    setShowModal(false);
                  },
                  style: 'cancel',
                },
              ]);
            })
            .catch((error) => {
              console.error(error);
            }),
      },
    ]);
  };

  const onSave = async () => {
    if (selectedItem) {
      if (base64Image) {
        try {
          const response = await fetch(`${baseUrl}/type-spends/update/${selectedItem._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: inputValue,
              image: base64Image,
            }),
          });
          const data = await response.json();
          setRerender(!rerender);
          if (data.status === 200 || data.status === 201) {
            setInputValue('');
            setShowModal(false);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await fetch(`${baseUrl}/type-spends/update/${selectedItem._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: inputValue,
            }),
          });
          const data = await response.json();
          setRerender(!rerender);
          if (data.status === 200 || data.status === 201) {
            setInputValue('');
            setShowModal(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      if (base64Image) {
        try {
          const response = await fetch(`${baseUrl}/type-spends/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: userId,
              name: inputValue,
              image: base64Image,
              isDaily: status,
              isDefault: false,
            }),
          });
          const data = await response.json();
          setRerender(!rerender);
          if (data.status === 200 || data.status === 201) {
            setInputValue('');
            setShowModal(false);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await fetch(`${baseUrl}/type-spends/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: userId,
              name: inputValue,
              isDaily: status,
              isDefault: false,
            }),
          });
          const data = await response.json();
          setRerender(!rerender);
          if (data.status === 200 || data.status === 201) {
            setInputValue('');
            setShowModal(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  const closeModal = () => {
    setSelectedItem(null);
    setImage(null);
    setInputValue(null);
    setShowModal(false);
  };
  const [keyboardStatus, setKeyboardStatus] = useState('');

  function getCharactersAfterLastDot(str) {
    const lastDotIndex = str.lastIndexOf('.');
    if (lastDotIndex !== -1 && lastDotIndex < str.length - 1) {
      return str.substring(lastDotIndex + 1);
    }
    return '';
  }

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
  const [image, setImage] = useState(null);
  const openImagePicker = async () => {
    // No permissions request is necessary for launching the image library
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
      {<FlatList data={categoryList} keyExtractor={(e, i) => i.toString()} renderItem={renderItem} />}
      <TouchableOpacity style={styles.btnAddNewCategory} onPress={() => openModal(null)}>
        <Text style={styles.textAddNewCategory}>Thêm danh mục</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={keyboardStatus == '' ? styles.modalView : styles.modalViewTop}>
            <TouchableOpacity style={styles.closeModal} onPress={closeModal}>
              <Ionicons name="close-outline" size={24} />
            </TouchableOpacity>
            <View style={styles.modalContent}>
              <Text style={styles.modalLabel}>Tên danh mục:</Text>
              <TextInput
                style={styles.modalInput}
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder="Enter text here"
              />
              <Text style={styles.modalLabel}>Ảnh danh mục:</Text>
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
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnSaveCategory} onPress={onDelete}>
                  <Text style={styles.textAddNewCategory}>Xoá</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSaveCategory} onPress={onSave}>
                  <Text style={styles.textAddNewCategory}>Lưu</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

export default ExpenseCategoriesScreen;
