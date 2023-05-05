import { View, Text, Pressable } from './Themed'
import React from 'react'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

interface ListProps {
    title: string,
}

export default function ListHeader(props: ListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Pressable smallestScale={0.925}>
        <AntDesign name="plus" size={24} color="#f2f2f2" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 2
    },
    title: {
        fontSize: 28
    }
})