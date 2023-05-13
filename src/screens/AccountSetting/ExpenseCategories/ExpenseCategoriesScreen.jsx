import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Modal, TextInput, Keyboard } from 'react-native';
import styles from './expenseCategories.styles.js';
import categories from '../../../static/categories.js';
import ScreenTab from '../../../components/ScreenTab/ScreenTab.component.js';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import theme from '../../../config/theme';
// import EditCategoryScreen from './EditCategory';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
function ExpenseCategoriesScreen({ navigation }) {
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
          <Image
            style={styles.itemImage}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <Ionicons style={styles.action_icon} name="settings-outline" size={24} onPress={() => openModal(item)} />
      </View>
    );
  };
  const listTab = [
    { status: 'daily', title: 'Hằng ngày' },
    { status: 'monthly', title: 'Hằng tháng' },
  ];
  const [status, setStatus] = useState('daily');
  const [categoryList, setCategoryList] = useState([...categories.filter((category) => category.status === status)]);
  const setStatusFilter = (status) => {
    setCategoryList([...categories.filter((category) => category.status === status)]);
    setStatus(status);
  };

  const [showModal, setShowModal] = useState(false);
  const openModal = (item) => {
    setSelectedItem(item);
    if (item != null) {
      setImage(item.image);
      setInputValue(item.name);
    }
    setShowModal(true);
  };
  const onSave = () => {
    // Call API Save here
    setShowModal(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [keyboardStatus, setKeyboardStatus] = useState('');

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
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <FlatList data={categoryList} keyExtractor={(e, i) => i.toString()} renderItem={renderItem} />
      <TouchableOpacity style={styles.btnAddNewCategory} onPress={openModal}>
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

              <TouchableOpacity style={styles.btnSaveCategory} onPress={onSave}>
                <Text style={styles.textAddNewCategory}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default ExpenseCategoriesScreen;
