import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './personalAccount.styles.js';
import account from '../../../static/account.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import * as ImagePicker from 'expo-image-picker';

function PersonalAccountScreen({ navigation }) {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);
  const handlePressEdit = () => {
    navigation.navigate('UpdateInfo'); // chuyển đến màn hình Chỉnh sửa thông tin
  };
  const [image, setImage] = useState(account[5].avatar);
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
      // Call API update Image here
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraButton} onPress={openImagePicker}>
          <Ionicons style={styles.cameraIcon} name="camera-outline" size={28} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{account[5].name}</Text>
        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Số định danh:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{account[5].idNumber}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Ngày sinh:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{account[5].dateOfBirth}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Giới tính</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{account[5].gender}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnEdit} onPress={handlePressEdit}>
          <Ionicons style={styles.editIcon} name="pencil-outline" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PersonalAccountScreen;
