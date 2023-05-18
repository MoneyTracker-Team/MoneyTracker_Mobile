import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './friendWithAccount.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
function FriendWithAccount({ data }) {
  const deleteFriend = (id, isAccount) => {
    // Call API delete here
  };
  return (
    <View style={styles.frienddata}>
      <View style={styles.friendAvatarContainer}>
        <Image source={{ uri: data.avatar }} style={styles.friendAvatar} />
      </View>
      <Text style={styles.friendName}>{data.name}</Text>
      <TouchableOpacity style={styles.delete_button} onPress={() => deleteFriend(data.id, true)}>
        <Ionicons style={styles.delete_icon} name="trash-outline" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
}

export default FriendWithAccount;
