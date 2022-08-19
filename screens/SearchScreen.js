import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SearchScreen() {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#937DC2',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          letterSpacing: 4,
          fontSize: 45,
        }}>
        Search Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
