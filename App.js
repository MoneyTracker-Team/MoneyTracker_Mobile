import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RootComponent from './src/screens/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <RootComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
