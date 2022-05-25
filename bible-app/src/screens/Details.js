import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Details = ({navigation, route}) => {
  const item = route.params
  return (
    <View>
      <StatusBar hidden />
      <Text>{item}</Text>
    </View>
  )
}

export default Details