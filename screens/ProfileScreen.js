import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProfileScreen() {
  return (
    <View
      style={{
        backgroundColor: '#748DA6',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          letterSpacing: 4,
          color: 'white',
        }}>
        Profile Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
