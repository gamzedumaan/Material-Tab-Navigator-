import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HomeScreens() {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#C689C6',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: 4,
        }}>
        Home Screens
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
