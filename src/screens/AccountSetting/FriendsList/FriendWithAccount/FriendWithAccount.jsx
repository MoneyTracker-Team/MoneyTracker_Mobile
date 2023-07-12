import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './friendWithAccount.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
function FriendWithAccount({ data, rerender, setRerender }) {
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
      <TouchableOpacity style={styles.delete_button} onPress={() => deleteFriend(data._id)}>
        <Ionicons style={styles.delete_icon} name="trash-outline" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
}

export default FriendWithAccount;
