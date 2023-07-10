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
  Keyboard,
  Alert,
} from 'react-native';
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

  const [listSpendingType, setListSpendingType] = useState([]);

  const [listFriend, setListFriend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          'https://moneytrackerserver-production.up.railway.app/type-spends/all-of-user/6476fc3968a24efaacf90dc6',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const data = await response1.json();
        setListSpendingType(data.data.typeSpends);

        const response2 = await fetch(
          'https://moneytrackerserver-production.up.railway.app/friends/all-of-user/6476fc3968a24efaacf90dc6',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const data2 = await response2.json();
        setListFriend(data2.data.friends);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [pressed, setPressed] = useState(false);

  // Money spend
  const [moneySpend, setMoneySpend] = useState(0);
  const handleMoneySpend = (newValue) => {
    setMoneySpend(newValue);
  };

  // Spending type
  const [modalSpendingType, setModalSpendingType] = useState(false);
  const [spendingType, setSpendingType] = useState({});

  const handleSpendingType = (item) => {
    setSpendingType(item);
    setModalSpendingType(false);
  };

  // Note
  const [modalNote, setModalNote] = useState(false);
  const [note, setNote] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleOnChangeNote = (value) => {
    setNoteContent(value);
  };

  const addNote = () => {
    setNote(noteContent);
    setModalNote(false);
  };

  // Location
  const [modalLocation, setModalLocation] = useState(false);
  const [location, setLocation] = useState('');
  const [locationContent, setLocationContent] = useState('');

  const handleOnChangeLocation = (value) => {
    setLocationContent(value);
  };

  const addLocation = () => {
    setLocation(locationContent);
    setModalLocation(false);
  };

  //Friend
  const [modalFriend, setModalFriend] = useState(false);
  const [friends, setFriends] = useState([]);
  const [searchFriendText, setSearchFriendText] = useState('');
  const [searchedListFriend, setSearchedListFriend] = useState([]);
  const [listFriendForCreate, setListFriendForCreate] = useState([]);

  const handleCloseModal = () => {
    setModalFriend(false);
    setSearchFriendText('');
    setSearchedListFriend([]);
  };

  const handleTextChange = (value) => {
    setSearchFriendText(value);
  };

  const handleSearchFriend = () => {
    Keyboard.dismiss();
    if (searchFriendText == '') {
      setSearchedListFriend([]);
    } else {
      let a = listFriend.filter((friend) => friend.name.toLowerCase().includes(searchFriendText.toLowerCase()));
      setSearchedListFriend(a);
    }
  };

  const handleAddFriend = (item) => {
    setFriends([...friends, item]);
    setSearchFriendText('');
    setSearchedListFriend([]);
    setListFriendForCreate([...listFriendForCreate, item._id]);
  };

  const handleDeleteFriendItem = (friend) => {
    const deletedFriendList = friends.filter((item) => item._id != friend._id);
    setFriends(deletedFriendList);
    if (friend.createdAt) {
      const deletedFriendListForCreate = listFriendForCreate.filter((item) => item != friend._id);
      setListFriendForCreate(deletedFriendListForCreate);
    } else {
      const deleteTempFriendList = listTempFriend.filter((item) => item != friend.name);
      setListTempFriend(deleteTempFriendList);
    }
  };

  const [tempFriendName, setTempFriendName] = useState('');
  const [listTempFriend, setListTempFriend] = useState([]);
  const handleTempFriend = (value) => {
    setTempFriendName(value);
  };

  const addTempFriend = () => {
    if (tempFriendName) {
      const newTempFriend = {
        _id: Math.random().toString(),
        name: tempFriendName,
      };
      setFriends([...friends, newTempFriend]);
      setTempFriendName('');
      setListTempFriend([...listTempFriend, tempFriendName]);
    }
  };

  const date = new Date();

  //Calendar
  const [modalCalendar, setModalCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(moment(date).format('YYYY-MM-DD'));

  //Time
  const [modalTime, setModalTime] = useState(false);
  const [time, setTime] = useState(date);

  //Image from library
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState('');

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
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const charactersAfterLastDot = getCharactersAfterLastDot(result.assets[0].uri);
      setImageBase64('data:image/' + charactersAfterLastDot + ';base64,' + result.assets[0].base64);
    }
  };

  //Camera
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [openedCamera, setOpenedCamera] = useState(false);

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
      const data = await camera.takePictureAsync({ base64: true });
      setImage(data.uri);
      const charactersAfterLastDot = getCharactersAfterLastDot(data.uri);
      setImageBase64('data:image/' + charactersAfterLastDot + ';base64,' + data.base64);
      setOpenedCamera(false);
    }
  };

  const createSpending = async () => {
    if (Object.keys(spendingType).length === 0 || moneySpend === 0) {
      Alert.alert('Invalid information', 'Please provide complete information to create spending', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    } else {
      const newSpending = {
        userId: '6476fc3968a24efaacf90dc6',
        typeId: spendingType._id,
        moneySpend,
        dateTime: `${selectedDay}${time.toISOString().substring(10)}`,
        location,
        image: imageBase64,
        friends: listFriendForCreate,
        tempFriends: listTempFriend,
        note,
      };

      await fetch('https://moneytrackerserver-production.up.railway.app/spends/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSpending),
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => {
          console.error(error);
        });
      Alert.alert('Create speding successfully', '', [
        {
          text: 'Ok',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.money_amount_container}>
        <View style={styles.money_container}>
          <EditMoney placeholder="Nhập số tiền" setValue={handleMoneySpend} />
        </View>
        <TouchableOpacity style={styles.btn_create} onPress={createSpending}>
          <Text style={styles.btn_create_text}>Tạo phiếu chi</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.category_scroll_view} contentContainerStyle={styles.category_scroll_view_content}>
        <View style={styles.category_sub_container1}>
          <TouchableOpacity style={styles.btn_category} onPress={() => setModalSpendingType(true)}>
            <View style={styles.category}>
              <Ionicons style={styles.category_icon} name="document-text-outline" size={24} />
              <Text style={styles.category_title}>
                {Object.keys(spendingType).length == 0 ? 'Loại chi tiêu' : spendingType.name}
              </Text>
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
          <TouchableOpacity style={styles.btn_category} onPress={() => setModalNote(true)}>
            <View style={styles.category}>
              <Ionicons style={styles.category_icon} name="pencil-outline" size={24} />
              <Text style={styles.category_title}>{note == '' ? 'Ghi chú' : note}</Text>
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
              <TouchableOpacity style={styles.btn_category} onPress={() => setModalLocation(true)}>
                <View style={styles.category}>
                  <Ionicons style={styles.category_icon} name="location-outline" size={24} />
                  <Text style={styles.category_title}>{location == '' ? 'Địa điểm' : location}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_category} onPress={() => setModalFriend(true)}>
                <View style={styles.category}>
                  <Ionicons style={styles.category_icon} name="people-outline" size={24} />
                  {friends.length == 0 ? (
                    <Text style={styles.category_title}>Bạn bè</Text>
                  ) : (
                    <ScrollView horizontal>
                      {friends.map((friend) => (
                        <View key={friend._id} style={styles.friend_item_container}>
                          <Text style={styles.friend_item}>{friend.name}</Text>
                          <TouchableOpacity
                            style={styles.btn_delete_friend_item_container}
                            onPress={() => handleDeleteFriendItem(friend)}
                          >
                            <Ionicons style={styles.btn_delete_friend_item} name="close-outline" size={20} />
                          </TouchableOpacity>
                        </View>
                      ))}
                    </ScrollView>
                  )}
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

      {/* Modal spending type */}
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
              {listSpendingType?.map((item) => {
                return (
                  <View key={item._id} style={styles.btn_spending_type}>
                    <View style={styles.spending_type}>
                      {item.image != '' ? (
                        <Image
                          style={styles.spending_type_img}
                          source={{
                            uri: item.image,
                          }}
                        />
                      ) : (
                        <Image
                          style={styles.spending_type_img}
                          source={{
                            uri: 'https://vn-live-01.slatic.net/p/ab6259fbb26526653764084bd5635cdf.jpg',
                          }}
                        />
                      )}
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

      {/* Modal calendar */}
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

      {/* Modal clock */}
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

      {/* Modal note */}
      <Modal transparent={true} visible={modalNote} animationType="fade">
        <View style={styles.modal_background}>
          <View style={styles.modal_note_container}>
            <View style={styles.modal_spending_type_header}>
              <Text style={styles.modal_spending_type_header_text}>Ghi chú</Text>
              <TouchableOpacity onPress={() => setModalNote(false)}>
                <Ionicons style={styles.btn_more_category_icon} name="close-outline" size={28} />
              </TouchableOpacity>
            </View>
            <View style={styles.note_input_container}>
              <TextInput
                style={styles.note_input}
                placeholder="Nhập ghi chú"
                multiline
                value={noteContent}
                onChangeText={handleOnChangeNote}
              />
              <TouchableOpacity>
                <Ionicons style={styles.btn_add_friend} name="add-circle-outline" size={28} onPress={() => addNote()} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal location */}
      <Modal transparent={true} visible={modalLocation} animationType="fade">
        <View style={styles.modal_background}>
          <View style={styles.modal_note_container}>
            <View style={styles.modal_spending_type_header}>
              <Text style={styles.modal_spending_type_header_text}>Địa điểm</Text>
              <TouchableOpacity onPress={() => setModalLocation(false)}>
                <Ionicons style={styles.btn_more_category_icon} name="close-outline" size={28} />
              </TouchableOpacity>
            </View>
            <View style={styles.note_input_container}>
              <TextInput
                style={styles.note_input}
                placeholder="Nhập địa điểm"
                multiline
                value={locationContent}
                onChangeText={handleOnChangeLocation}
              />
              <TouchableOpacity>
                <Ionicons
                  style={styles.btn_add_friend}
                  name="add-circle-outline"
                  size={28}
                  onPress={() => addLocation()}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal friend */}
      <Modal transparent={true} visible={modalFriend} animationType="fade">
        <View style={styles.modal_background}>
          <View style={styles.modal_friend_container}>
            <View style={styles.modal_friend_header}>
              <Text style={styles.modal_friend_header_text}>Thêm bạn bè vào chi tiêu</Text>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <Ionicons style={styles.btn_more_category_icon} name="close-outline" size={28} />
              </TouchableOpacity>
            </View>
            <View style={styles.search_friend_container}>
              <TextInput
                style={styles.search_friend_text_input}
                placeholder="Tìm kiếm"
                value={searchFriendText}
                onChangeText={handleTextChange}
              />
              <TouchableOpacity>
                <Ionicons
                  style={styles.btn_search_friend}
                  name="search-outline"
                  size={28}
                  onPress={() => handleSearchFriend()}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modal_friend_content}>
              <ScrollView contentContainerStyle={styles.modal_friend_scroll_view_content}>
                {(searchedListFriend.length == 0 ? listFriend : searchedListFriend).map((item) => {
                  return (
                    <View key={item._id} style={styles.btn_friend}>
                      <View style={styles.friend}>
                        <Image
                          style={styles.friend_img}
                          source={{
                            uri: item.image,
                          }}
                        />
                        <View style={styles.text_container}>
                          <Text style={styles.friend_name}>{item.name}</Text>
                          <Text style={styles.friend_text}>
                            {item.isTemporaty === false ? 'Bạn bè' : 'Bạn tạm thời'}
                          </Text>
                        </View>
                        <TouchableOpacity onPress={() => handleAddFriend(item)}>
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
                <TextInput
                  style={styles.add_friend_text_input}
                  value={tempFriendName}
                  onChangeText={handleTempFriend}
                />
                <TouchableOpacity>
                  <Ionicons
                    style={styles.btn_add_friend}
                    name="add-circle-outline"
                    size={28}
                    onPress={() => addTempFriend()}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal camera */}
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
