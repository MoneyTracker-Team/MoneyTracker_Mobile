import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Modal, TextInput, Keyboard } from 'react-native';
import styles from './AccountItem.style.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';

function AccountItem({ data }) {
  const add = (id) => {};
  return (
    <View style={styles.wrapper}>
      <View style={styles.AvatarContainer}>
        <Image source={{ uri: data.avatar }} style={styles.Avatar} />
      </View>
      <Text style={styles.Name}>{data.name}</Text>
      <TouchableOpacity style={styles.add_button} onPress={() => add(data.id)}>
        <Ionicons style={styles.add_icon} name="add-circle-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
}

export default AccountItem;
