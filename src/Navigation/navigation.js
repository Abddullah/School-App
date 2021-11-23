// In App.js in a new project
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SchoolList from '../SchoolList/index';
import SchoolDetails from '../SchoolDetails/index';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="SchoolList" component={SchoolList} />
        <Stack.Screen options={{ headerShown: false }} name="SchoolDetails" component={SchoolDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default AppNavigator;