import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../theme/colors'

const WeeksCard = ({navigation, card}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: COLORS.gradientDark}}>
      <TouchableOpacity onPress={(e) => navigation.navigate('Details', card)}>
        <View style={style.cardText}>
          <Text style={style.cardTextPrimary}>WeeksCard</Text>
          <Text style={style.cardTextSecondary}>An OverView Of The Book Of Genesis</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  cardText: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    color: COLORS.white,
    paddingVertical: 25,
    fontSize: 16,
    borderRadius: 5,
    paddingHorizontal: 15,
    elevation: 10,
  },

  cardTextPrimary: {
    color: COLORS.gradientDark,
    fontSize: 20,
    fontWeight: 'bold'
  },

  cardTextSecondary: {
    color: COLORS.dark,
    fontSize: 16,

  }
})

export default WeeksCard