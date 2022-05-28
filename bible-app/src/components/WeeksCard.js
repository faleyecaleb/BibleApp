import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'
const WeeksCard = ({navigation, card, books, showSearchHandler}) => {

  const navigationHandler = (e) => {
    navigation.navigate('Details', card);
    showSearchHandler(false)
  }
  return (
    <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: COLORS.gradientDark}}>
      <TouchableOpacity onPress={(e) => navigationHandler(e)}>
        <View style={style.cardText}>
          <View style={style.weeksCardNumber}>
              <Text style={{fontSize: 25, color: COLORS.white}}>{card.number}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text style={style.cardTextPrimary}>{card.name}</Text>
            <Text style={style.cardTextSecondary}>An OverView Of The Book Of Genesis</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  weeksCardNumber: {
    backgroundColor: COLORS.gradientDark,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 25,
    width: '10%'
  },
  cardText: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    color: COLORS.white,
    fontSize: 16,
    borderRadius: 5,
    paddingHorizontal: 4,
    elevation: 10,
    flexDirection: 'row'
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