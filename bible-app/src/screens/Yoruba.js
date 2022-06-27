import { View, Text, Button } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'

const Yoruba = ({ navigation }) => {
  return (
    <View style={{
      backgroundColor: COLORS.gradientDark,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}>
      <View style={{
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        width: '90%',
        padding: 20,
        elevation: 10,
        borderRadius: 5,

      }}>
        <Text style={{ fontSize: 20, marginBottom: 20, }}>Oops...Yoruba Version Not Available! Please Check Back Soon...</Text>
        <Button onPress={() => navigation.popToTop()} color={COLORS.gradientDark} title='Go Back' />
      </View>
    </View>
  )
}

export default Yoruba