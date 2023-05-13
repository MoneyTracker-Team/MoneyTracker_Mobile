import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, Modal, TextInput, Keyboard } from 'react-native';
import styles from './ScreenTab.style.js';

function ScreenTab({ listTab, status, setStatusFilter }) {
  let buttonStyle = styles.btnTab2;
  if (listTab.length === 3) {
    buttonStyle = styles.btnTab3;
  }
  return (
    <View style={styles.listTab}>
      {listTab.map((tab) => (
        <TouchableOpacity
          key={tab.status}
          style={[buttonStyle, status === tab.status && styles.btnTabActive]}
          onPress={() => setStatusFilter(tab.status)}
        >
          <Text style={[styles.textTab, status === tab.status && styles.textTabActive]}>{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default ScreenTab;
