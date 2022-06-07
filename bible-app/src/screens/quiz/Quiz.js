import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import Money from './Money'
import COLORS from '../../consts/colors';


const height = Dimensions.get('screen').height;

const Quiz = () => {
  const img = require('../../assets/images/quizImg.jpg')
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor={COLORS.dark} barStyle={'light-content'} />
      <ImageBackground resizeMode='cover' style={styles.backgrounImage} source={img}>
        <Text style={{color: COLORS.white}}>THis is awesome</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgrounImage: {
    height: height
  }
})

export default Quiz