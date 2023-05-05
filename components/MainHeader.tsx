import { StyleSheet } from 'react-native'
import { Text, View } from './Themed';
import React from 'react'

export default function MainHeader() {
  return (
    <View>
      <Text style={styles.title}>Hello{'\n'}there</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      marginLeft: 10,
      marginVertical: 20,
      fontWeight: '500',
      lineHeight: 50
    },
  });
  