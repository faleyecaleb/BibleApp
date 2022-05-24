import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../theme/colors'

const WeeksCard = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: COLORS.gradientDark}}>
      <TouchableOpacity>
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
    backgroundColor: COLORS.gradientLight,
    marginVertical: 10,
    color: COLORS.white,
    paddingVertical: 15,
    fontSize: 16,
    borderRadius: 5,
    paddingHorizontal: 15,
    elevation: 5,
  },

  cardTextPrimary: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold'
  },

  cardTextSecondary: {
    color: COLORS.dark,
    fontSize: 16,

  }
})

export default WeeksCard