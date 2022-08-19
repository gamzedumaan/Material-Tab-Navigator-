import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActivityScreen() {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#FCC5C0',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          color: 'white',
          fontWeight: 'bold',
          letterSpacing: 4,
        }}>
        Activity Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
