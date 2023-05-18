import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Modal, Image, TextInput, Button } from 'react-native';
import styles from './createSpending.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import EditMoney from '../../../components/common/EditMoney/EditMoney.component.js';
import theme from '../../../config/theme.js';

const CreateSpendingScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, []);

  const [pressed, setPressed] = useState(false);

  // Spending type
  const [modalSpendingType, setModalSpendingType] = useState(false);
  const [spendingType, setSpendingType] = useState('Loại chi tiêu');
  const [spendingImage, setSpendingImage] = useState('');

  //Friend
  const [modalFriend, setModalFriend] = useState(false);
  const [friend, setFriend] = useState('Bạn bè');
  const [friendAvatar, setFriendAvatar] = useState('');

  const date = new Date();

  //Calendar
  const [modalCalendar, setModalCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(moment(date).format('YYYY-MM-DD'));

  //Time
  const [modalTime, setModalTime] = useState(false);
  const [time, setTime] = useState(date);

  const listSpendingType = [
    {
      id: '1',
      name: 'Ăn uống',
      image: 'https://cdn-icons-png.flaticon.com/512/2819/2819194.png',
    },
    {
      id: '2',
      name: 'Mua sắm',
      image: 'https://cdn-icons-png.flaticon.com/512/641/641813.png',
    },
    {
      id: '3',
      name: 'Đá banh',
      image:
        'https://static.vecteezy.com/system/resources/previews/004/693/432/original/simple-football-sport-icon-on-white-background-free-vector.jpg',
    },
    {
      id: '4',
      name: 'Tập gym',
      image: 'https://icon-library.com/images/gym-icon-png/gym-icon-png-25.jpg',
    },
    {
      id: '5',
      name: 'Đi lại',
      image: 'https://cdn.icon-icons.com/icons2/290/PNG/512/public_transport_30827.png',
    },
    {
      id: '6',
      name: 'Tiền trọ',
      image:
        'https://static.vecteezy.com/system/resources/previews/006/758/882/original/accommodation-icon-style-vector.jpg',
    },
    {
      id: '7',
      name: 'Tiền điện',
      image: 'https://icons-for-free.com/iconfiles/png/512/electricity+icon-1320087270769193842.png',
    },
    {
      id: '8',
      name: 'Tiền nước',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Circle-icons-water.svg/2048px-Circle-icons-water.svg.png',
    },
  ];

  const listFriend = [
    {
      id: '1',
      name: `Đức Ita'ss`,
      avatar:
        'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/336257853_1876743682685403_8223105330974248261_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DietpwLANecAX83CXPZ&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfAJHkvO05oj1xhTNBFwCV1WBZn-29gJgze5ugmoGgMonA&oe=6464F828',
    },
    {
      id: '2',
      name: 'Thanh Tâm',
      avatar:
        'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/326335124_1135157397200208_7272500106123140595_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OMgKNQgAQ7AAX9aNK09&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfACBDpwfXQkuR6Z5jiguO5rO2hbssi1saAqHuSGuWMRtg&oe=646516A9',
    },
    {
      id: '3',
      name: 'Kim Ngân',
      avatar: 'https://successacademy.edu.vn/wp-content/uploads/2022/12/999-Anh-Gai-Xinh-Viet-Nam-Hot-Girl-Cute-De.jpg',
    },
    {
      id: '4',
      name: 'Thanh Vy',
      avatar: 'https://huyhoangblog.com/wp-content/uploads/2021/09/hinh-anh-gai-xinh-25.jpg',
    },
    {
      id: '5',
      name: 'Bá Lộc',
      avatar: 'https://genzrelax.com/wp-content/uploads/2022/03/anh-gai-xinh-deo-mat-kinh-1.jpg',
    },
    {
      id: '6',
      name: 'Phương Thảo',
      avatar: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-gai-xinh-viet-nam.jpg',
    },
    {
      id: '7',
      name: 'Kim Điền',
      avatar: 'https://pgdtxthuanan.edu.vn/wp-content/uploads/gai-xinh-trung-quoc.jpg',
    },
    {
      id: '8',
      name: 'Hồng Ân',
      avatar: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-9-481x600.jpg',
    },
    {
      id: '9',
      name: 'Tăng Phúc',
      avatar:
        'https://1.bp.blogspot.com/-gkocTuieKgE/YPgdWekMONI/AAAAAAAA1h8/qybeyyEq6q4Cvfl1TOwFZEdCdwxwVMvAACLcBGAsYHQ/s2048/anh-girl-xinh-tuoi-18-1.jpg',
    },
    {
      id: '10',
      name: 'Cristiano Ronaldo',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
    },
    {
      id: '11',
      name: 'Leonel Messi',
      avatar: 'https://photo-cms-plo.epicdn.me/w850/Uploaded/2023/yqjvzdjwp/2023_05_10/psg-messi-4848.jpeg',
    },
  ];

  const handleSpendingType = (item) => {
    setSpendingType(item.name);
    setSpendingImage(item.image);
    setModalSpendingType(false);
  };

  const handleFriend = (item) => {
    setFriend(item.name);
    setFriendAvatar(item.avatar);
    setModalFriend(false);
  };

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

  // useEffect(() => {
  //   permisionFunction();
  // }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.money_amount_container}>
        <View style={styles.money_container}>
          <EditMoney placeholder="Nhập số tiền" />
        </View>
        <TouchableOpacity style={styles.btn_create}>
          <Text style={styles.btn_create_text}>Tạo phiếu chi</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.category_scroll_view} contentContainerStyle={styles.category_scroll_view_content}>
        <View style={styles.category_sub_container1}>
          <TouchableOpacity style={styles.btn_category} onPress={() => setModalSpendingType(true)}>
            <View style={styles.category}>
              {!spendingImage && <Ionicons style={styles.category_icon} name="document-text-outline" size={24} />}
              {spendingImage && (
                <Image
                  style={styles.spending_type_img_display}
                  source={{
                    uri: spendingImage,
                  }}
                />
              )}

              <Text style={styles.category_title}>{spendingType}</Text>
              <Ionicons style={styles.next_icon} name="chevron-forward-outline" size={24} />
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.btn_category}>
            <View style={styles.category}>
              <Ionicons style={styles.category_icon} name="pencil-outline" size={24} />
              <Text style={styles.category_title}>Ghi chú</Text>
            </View>
          </TouchableOpacity>
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
                  <Text style={styles.category_title}>Địa điểm</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_category} onPress={() => setModalFriend(true)}>
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
      <Modal transparent={true} visible={modalSpendingType} animationType="fade">
        <View style={styles.modal_background}>
          <View style={styles.modal_spending_type_container}>
            <View style={styles.modal_spending_type_header}>
              <Text style={styles.modal_spending_type_header_text}>Danh mục chi tiêu hằng ngày</Text>
              <TouchableOpacity onPress={() => setModalSpendingType(false)}>
                <Ionicons style={styles.btn_more_category_icon} name="close-outline" size={28} />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.modal_spending_type_content}
              contentContainerStyle={styles.modal_spending_type_scroll_view_content}
            >
              {listSpendingType.map((item, index) => {
                return (
                  <View key={index} style={styles.btn_spending_type}>
                    <View style={styles.spending_type}>
                      <Image
                        style={styles.spending_type_img}
                        source={{
                          uri: item.image,
                        }}
                      />
                      <Text style={styles.spending_type_name}>{item.name}</Text>
                      <TouchableOpacity onPress={() => handleSpendingType(item)}>
                        <Ionicons style={styles.spending_type_icon} name="add-circle-outline" size={24} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal transparent={true} visible={modalFriend} animationType="fade">
        <View style={styles.modal_background}>
          <View style={styles.modal_friend_container}>
            <View style={styles.modal_friend_header}>
              <Text style={styles.modal_friend_header_text}>Thêm bạn bè vào chi tiêu</Text>
              <TouchableOpacity onPress={() => setModalFriend(false)}>
                <Ionicons style={styles.btn_more_category_icon} name="close-outline" size={28} />
              </TouchableOpacity>
            </View>
            <View style={styles.search_friend_container}>
              <TextInput style={styles.search_friend_text_input} placeholder="Tìm kiếm" />
              <TouchableOpacity>
                <Ionicons style={styles.btn_search_friend} name="search-outline" size={28} />
              </TouchableOpacity>
            </View>
            <View style={styles.modal_friend_content}>
              <ScrollView contentContainerStyle={styles.modal_friend_scroll_view_content}>
                {listFriend.map((item, index) => {
                  return (
                    <View key={index} style={styles.btn_friend}>
                      <View style={styles.friend}>
                        <Image
                          style={styles.friend_img}
                          source={{
                            uri: item.avatar,
                          }}
                        />
                        <View style={styles.text_container}>
                          <Text style={styles.friend_name}>{item.name}</Text>
                          <Text style={styles.friend_text}>Bạn bè</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleFriend(item)}>
                          <Ionicons style={styles.friend_icon} name="add-circle-outline" size={24} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View style={styles.line}></View>
            <View style={styles.new_friend_container}>
              <Text style={styles.add_friend_text}>Tạo nhanh người nợ mới</Text>
              <View style={styles.add_friend_input_container}>
                <TextInput style={styles.add_friend_text_input} />
                <TouchableOpacity>
                  <Ionicons style={styles.btn_add_friend} name="add-circle-outline" size={28} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    </SafeAreaView>
  );
};

export default CreateSpendingScreen;
