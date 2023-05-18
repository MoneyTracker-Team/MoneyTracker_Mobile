import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Keyboard } from 'react-native';
import styles from './friendWithoutAccount.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import theme from '../../../../config/theme.js';
function FriendWithoutAccount({ data }) {
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
  const onSave = () => {
    if (inputValue !== '') {
      // Call API Save here
      setShowModal(false);
    }
  };
  const onDelete = () => {
    setInputValue('');
  };
  const [showModal, setShowModal] = useState(false);
  const openModal = (item) => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const editFriend = (name, isAccount) => {
    openModal();
    setInputValue(name);
    // Call API edit here
  };
  const deleteFriend = (id, isAccount) => {
    // Call API delete here
  };
  return (
    <View style={styles.frienddata}>
      <Text style={styles.friendName}>{data.name}</Text>
      <TouchableOpacity style={styles.edit_button} onPress={() => editFriend(data.name, false)}>
        <Ionicons style={styles.delete_icon} name="pencil-outline" size={20} color={theme.colors.quaternary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete_button} onPress={() => deleteFriend(data.id, false)}>
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
              <View style={styles.action}>
                <TouchableOpacity style={styles.btnDelete} onPress={onDelete}>
                  <Text style={styles.textDelete}>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSave} onPress={onSave}>
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
