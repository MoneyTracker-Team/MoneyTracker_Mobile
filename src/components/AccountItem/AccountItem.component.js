import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './AccountItem.style.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { AuthContext } from '../../context/AuthContext/AuthContext.js';

function AccountItem({ data, rerender, setRerender, setShowAddFriendWithAccountModal }) {
  const userId = useContext(AuthContext).userId;
  const userData = data;
  const add = async () => {
    try {
      const response = await fetch(`https://moneytrackerserver-production.up.railway.app/friends/create/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          friendId: userData._id,
          isTemporaty: false,
          image: userData.avatar,
        }),
      });
      const data = await response.json();
      setRerender(!rerender);
      setShowAddFriendWithAccountModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.AvatarContainer}>
        <Image source={{ uri: data.avatar }} style={styles.Avatar} />
      </View>
      <Text style={styles.Name}>{data.name}</Text>
      <TouchableOpacity style={styles.add_button} onPress={() => add()}>
        <Ionicons style={styles.add_icon} name="add-circle-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
}

export default AccountItem;
