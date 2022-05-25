import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image } from 'react-native'
import React from 'react';
import IMAGES from '../../src/consts/images'
import COLORS from '../consts/colors';

const DetailsCategory = ({navigation, route}) => {
  const item = route.params
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' backgroundColor={COLORS.transparent} animated={true} translucent />
      <View style={{backgroundColor: COLORS.gradientDark}}>
        <Image source={IMAGES.img1} style={style.imageHeader} />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  imageHeader: {
    width: '100%', 
    height: 300,
    borderRadius: 30
  }
})

export default DetailsCategory