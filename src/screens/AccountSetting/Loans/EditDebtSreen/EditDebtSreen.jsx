import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import styles from './editDebtSreen.styles.js';
import background from '../../../../../assets/bg-img.png';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { useRoute } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import EditMoney from '../../../../components/common/EditMoney/EditMoney.component.js';
import EnterMoney from '../../../../components/common/EnterMoney/EnterMoney.component.js';
import theme from '../../../../config/theme.js';

const EditDebtScreen = ({ navigation }) => {
  const route = useRoute();
  const { debtDetailData } = route.params;
  const [pressed, setPressed] = useState(false);
  const currentDate = new Date(debtDetailData.dateTime);
  const [modalNote, setModalNote] = useState(false);

  //Friend
  const friend = debtDetailData.debtor[0]?.name;
  const friendAvatar = debtDetailData.debtor[0]?.image;
  //Calendar
  const [modalCalendar, setModalCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(moment(currentDate).format('YYYY-MM-DD'));

  //Time
  const [modalTime, setModalTime] = useState(false);
  const [time, setTime] = useState(currentDate);

  //Image from library
  const [image, setImage] = useState(null);
  const openImagePicker = async () => {
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

  //Camera
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [openedCamera, setOpenedCamera] = useState(false);
  const [takenImage, setTakenImage] = useState(null);

  const toggleCameraType = async () => {
    setCameraType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    if (cameraPermission.status !== 'granted') {
      alert('Permission for media access needed.');
    } else {
      setOpenedCamera(true);
    }
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      setOpenedCamera(false);
    }
  };

  return (
    <ImageBackground source={background} style={styles.wrapper}>
      <View style={styles.money_amount_container}>
        <View style={styles.money_container}>
          <EditMoney
            placeholder="Nhập số tiền"
            amount={
              debtDetailData.moneySpend >= 0
                ? debtDetailData.moneySpend.toString()
                : Math.abs(debtDetailData.moneySpend).toString()
            }
          />
        </View>
        <TouchableOpacity style={styles.btn_create}>
          <Text style={styles.btn_create_text}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.category_scroll_view} contentContainerStyle={styles.category_scroll_view_content}>
        <View style={styles.category_sub_container1}>
          <View style={styles.btn_category}>
            <View style={styles.category}>
              {!friendAvatar && <Ionicons style={styles.category_icon} name="people-outline" size={24} />}
              {friendAvatar && (
                <Image
                  style={styles.friend_img_display}
                  source={{
                    uri: friendAvatar,
                  }}
                />
              )}
              <Text style={styles.category_title}>{friend}</Text>
              <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
            </View>
          </View>
          <TouchableOpacity style={styles.btn_category} onPress={() => setModalCalendar(true)}>
            <View style={styles.category}>
              <Ionicons style={styles.category_icon} name="calendar-outline" size={24} />
              <Text style={styles.category_title}>{moment(selectedDay).format('DD/MM/YYYY')}</Text>
              <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_category} onPress={() => setModalTime(true)}>
            <View style={styles.category}>
              <Ionicons style={styles.category_icon} name="alarm-outline" size={24} />
              <Text style={styles.category_title}>{moment(time).format('HH:mm')}</Text>
              <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_category} onPress={() => setModalNote(true)}>
            <View style={styles.category}>
              <Ionicons style={styles.category_icon} name="pencil-outline" size={24} />
              <Text style={styles.category_title}>{debtDetailData.note}</Text>
            </View>
          </TouchableOpacity>
          <Modal transparent={true} visible={modalNote} animationType="fade">
            <View style={styles.modal_container}>
              <EnterMoney title="Nhập ghi chú" modalState={setModalNote}></EnterMoney>
            </View>
          </Modal>
        </View>
        <TouchableOpacity style={styles.btn_more} onPress={() => setPressed(!pressed)}>
          {!pressed && <Text style={styles.btn_more_text}>Thêm thông tin</Text>}
          {pressed && <Text style={styles.btn_more_text}>Ẩn bớt</Text>}
          {!pressed && <Ionicons style={styles.btn_more_icon} name="caret-down-outline" size={14} />}
          {pressed && <Ionicons style={styles.btn_more_icon} name="caret-up-outline" size={14} />}
        </TouchableOpacity>
        {pressed && (
          <View style={[styles.more_category_container, {}]}>
            <View style={styles.category_sub_container2}>
              <TouchableOpacity style={styles.btn_category}>
                <View style={styles.category}>
                  <Ionicons style={styles.category_icon} name="location-outline" size={24} />
                  <Text style={styles.category_title}>{debtDetailData.location}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {image && (
              <View style={styles.chosen_image_container}>
                <Image source={{ uri: image }} style={styles.chosen_image} />
              </View>
            )}
            <View style={styles.btn_more_category_container}>
              <TouchableOpacity style={styles.btn_more_category} onPress={openImagePicker}>
                <Ionicons style={styles.btn_more_category_icon} name="cloud-upload-outline" size={24} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_more_category} onPress={permisionFunction}>
                <Ionicons style={styles.btn_more_category_icon} name="camera-outline" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
      <Modal transparent={true} visible={modalCalendar} animationType="fade">
        <View style={styles.modal_background}>
          <View style={styles.model_calendar_container}>
            <View style={styles.modal_calendar_header}>
              <Text style={styles.modal_calendar_header_text}>Chọn ngày chi tiêu</Text>
              <TouchableOpacity onPress={() => setModalCalendar(false)}>
                <Ionicons style={styles.btn_more_category_icon} name="close-outline" size={28} />
              </TouchableOpacity>
            </View>
            <Calendar
              style={styles.calendar}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: theme.colors.quaternary,
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#2d4150',
                dayTextColor: '#2d4150',
                arrowColor: theme.colors.quaternary,
              }}
              onDayPress={(day) => {
                setSelectedDay(day.dateString);
                setModalCalendar(false);
              }}
              markedDates={{
                [selectedDay]: { selected: true },
              }}
            />
          </View>
        </View>
      </Modal>
      <DateTimePickerModal
        date={time}
        isVisible={modalTime}
        mode="time"
        onConfirm={(time) => {
          setModalTime(false);
          setTime(time);
        }}
        onCancel={() => setModalTime(false)}
        isDarkModeEnabled={true}
      />
      <Modal transparent={true} visible={openedCamera} animationType="fade">
        <View style={styles.camera_container}>
          <Camera ref={(ref) => setCamera(ref)} style={styles.camera} type={cameraType}>
            <View style={styles.button_camera_container}>
              <TouchableOpacity style={styles.button_close_camera} onPress={() => setOpenedCamera(false)}>
                <Ionicons style={styles.camera_icon} name="close-outline" size={42} />
              </TouchableOpacity>
              <View style={styles.bottom_button_camera_container}>
                <TouchableOpacity style={styles.button_capture_camera} onPress={takePicture}>
                  <Ionicons style={styles.camera_icon} name="ellipse-outline" size={90} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_flip_camera} onPress={toggleCameraType}>
                  <Ionicons style={styles.camera_icon} name="camera-reverse-outline" size={42} />
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default EditDebtScreen;
