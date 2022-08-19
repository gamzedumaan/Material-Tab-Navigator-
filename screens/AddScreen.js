import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AddScreen() {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#E8A0BF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          color: 'white',
          letterSpacing: 4,
          fontWeight:'bold',
        }}>
        Add Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
