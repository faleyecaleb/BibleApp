import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto'

const Team = ({ name, title, bgColor, nameColor, titleColor, iconColor, iconName }) => {
  return (
    <View style={{
      backgroundColor: bgColor,
      width: '48%',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 8,
      elevation: 5,
      alignItems: 'center',
      marginBottom: 20
    }}>
      <Icon style={{ alignSelf: 'center' }} color={iconColor} name={iconName} size={40} />
      <Text style={{ color: nameColor, fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ color: titleColor }}>{title}</Text>
    </View>
  )
}

export default Team