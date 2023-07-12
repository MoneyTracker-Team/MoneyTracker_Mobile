import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './personalAccount.styles.js';
import moment from 'moment/moment.js';
import background from '../../../../assets/bg-img.png';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../../../context/AuthContext/AuthContext.js';

function PersonalAccountScreen({ navigation, route }) {
  const { rerender, setRerender } = route.params;
  const userId = useContext(AuthContext).userId;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setRerender(!rerender);
    setUserData({});
    const fetchData = async () => {
      try {
        const url = `https://moneytrackerserver-production.up.railway.app/users/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        setUserData(data.data);
        setImage(data.data.avatar);
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

  const handlePressEdit = () => {
    navigation.navigate('UpdateInfo', {
      rerender: rerender,
      setRerender: setRerender,
    });
  };

  function getCharactersAfterLastDot(str) {
    const lastDotIndex = str.lastIndexOf('.');
    if (lastDotIndex !== -1 && lastDotIndex < str.length - 1) {
      return str.substring(lastDotIndex + 1);
    }
    return '';
  }

  const [image, setImage] = useState('');
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
      handleUpdateAvatar('data:image/' + charactersAfterLastDot + ';base64,' + result.assets[0].base64);
    }
  };
  const handleUpdateAvatar = (base64) => {
    fetch(`https://moneytrackerserver-production.up.railway.app/users/update/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: base64,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRerender(rerender);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={styles.avatar} />}
        <TouchableOpacity style={styles.cameraButton} onPress={openImagePicker}>
          <Ionicons style={styles.cameraIcon} name="camera-outline" size={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{userData?.name}</Text>
        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Khẩu hiệu:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{userData?.slogan}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Ngày sinh:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{moment(userData?.dateOfBirth).format('DD/MM/YYYY')}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Giới tính</Text>
            </View>
            {userData.gender ? (
              <View style={styles.cell}>
                <Text style={styles.cellText}>Nam</Text>
              </View>
            ) : (
              <View style={styles.cell}>
                <Text style={styles.cellText}>Nữ</Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.btnEdit} onPress={handlePressEdit}>
          <Ionicons style={styles.editIcon} name="pencil-outline" size={30} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default PersonalAccountScreen;
