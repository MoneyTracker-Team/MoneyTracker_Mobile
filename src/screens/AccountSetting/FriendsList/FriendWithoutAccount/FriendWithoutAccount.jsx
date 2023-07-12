import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Keyboard, Image } from 'react-native';
import styles from './friendWithoutAccount.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import theme from '../../../../config/theme.js';
import * as ImagePicker from 'expo-image-picker';

function FriendWithoutAccount({ data, rerender, setRerender }) {
  const [base64Image, setBase64Image] = useState('');
  const [image, setImage] = useState(null);
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

  function getCharactersAfterLastDot(str) {
    const lastDotIndex = str.lastIndexOf('.');
    if (lastDotIndex !== -1 && lastDotIndex < str.length - 1) {
      return str.substring(lastDotIndex + 1);
    }
    return '';
  }

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

  const onSave = async (id) => {
    if (inputValue !== '') {
      if (base64Image) {
        try {
          const response = await fetch(`https://moneytrackerserver-production.up.railway.app/friends/update/${id}`, {
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
          setShowModal(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await fetch(`https://moneytrackerserver-production.up.railway.app/friends/update/${id}`, {
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
          setShowModal(false);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  const onDelete = () => {
    setInputValue('');
  };
  const [showModal, setShowModal] = useState(false);
  const openModal = (item) => {
    if (item != null) {
      setImage(item.image);
      setInputValue(item.name);
    }
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const editFriend = (data) => {
    openModal(data);
    setInputValue(data.name);
    // Call API edit here
  };
  const deleteFriend = async (id) => {
    try {
      const response = await fetch(`https://moneytrackerserver-production.up.railway.app/friends/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setRerender(!rerender);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.frienddata}>
      <View style={styles.friendAvatarContainer}>
        <Image source={{ uri: data.image }} style={styles.friendAvatar} />
      </View>
      <Text style={styles.friendName}>{data.name}</Text>
      <TouchableOpacity style={styles.edit_button} onPress={() => editFriend(data)}>
        <Ionicons style={styles.delete_icon} name="pencil-outline" size={20} color={theme.colors.quaternary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete_button} onPress={() => deleteFriend(data._id)}>
        <Ionicons style={styles.delete_icon} name="trash-outline" size={20} color="red" />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
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
              <View style={styles.action}>
                <TouchableOpacity style={styles.btnDelete} onPress={onDelete}>
                  <Text style={styles.textDelete}>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSave} onPress={() => onSave(data._id)}>
                  <Text style={styles.textSave}>Lưu</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default FriendWithoutAccount;
