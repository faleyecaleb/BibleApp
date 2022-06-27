import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import COLORS from '../consts/colors';

const width = Dimensions.get('screen').width
const WeeksCard = ({ navigation, card, books }) => {

  const navigationHandler = (e) => {
    navigation.navigate('Details', card);
  }
  return (
    <View style={{ paddingHorizontal: 10, width: width, backgroundColor: COLORS.gradientDark, alignItems: 'center' }}>
      <TouchableOpacity onPress={(e) => navigationHandler(e)}>
        <View style={style.cardText}>
          <View style={style.weeksCardNumber}>
            <Text style={{ fontSize: 25, color: COLORS.white }}>{books.number}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: width }}>
            <Text style={style.cardTextPrimary}>{card.name}</Text>
            <Text style={style.cardTextSecondary}>{card.title}</Text>
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
    flexDirection: 'row',
    width: width
  },

  cardTextPrimary: {
    color: COLORS.gradientDark,
    fontSize: 20,
    fontWeight: 'bold'
  },

  cardTextSecondary: {
    color: COLORS.dark,
    fontSize: 16,
    marginRight: 60

  }
})

export default WeeksCard