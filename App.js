import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './src/Navigation/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
  },
});
