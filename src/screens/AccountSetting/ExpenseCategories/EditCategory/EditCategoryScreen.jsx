import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './editCategory.styles.js';

function EditCategoryScreen({ closeModal }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const onSave = () => {
    if (!name || !image) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }
    // Call API save here
    closeModal();
  };
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalHeaderText}>Thêm danh mục</Text>
        {/* <TouchableOpacity onPress={closeModal}>
          <Image style={styles.modalHeaderIcon} source={require('../../../assets/icons/close.png')} />
        </TouchableOpacity> */}
      </View>
      <View style={styles.modalContent}>
        <Text style={styles.modalLabel}>Tên danh mục:</Text>
        <TextInput style={styles.modalInput} value={name} onChangeText={setName} />
        <Text style={styles.modalLabel}>Hình ảnh:</Text>
        <TextInput style={styles.modalInput} value={image} onChangeText={setImage} />
        <TouchableOpacity style={styles.btnSave} onPress={onSave}>
          <Text style={styles.btnSaveText}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EditCategoryScreen;
