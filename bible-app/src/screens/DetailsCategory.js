import { View, Text, StyleSheet, StatusBar,ImageBackground, Dimensions, SafeAreaView, Image } from 'react-native'
import React from 'react';
import IMAGES from '../../src/consts/images'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const DetailsCategory = ({navigation, route}) => {
  const item = route.params
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' animated={true} />
      <View>
        <View style={style.detailsCategoryHeader}>
          <View>
            <Text style={{fontSize: width * 0.045}}>Bible Study</Text>
            <Text style={{fontSize: width * 0.07, fontWeight: 'bold'}}>Week One</Text>
          </View>
          <Icon name='arrow-back' size={width * 0.05 && height * 0.05} />
        </View>

        <View>
          <ImageBackground source={IMAGES.img2} style={style.backgroundImage}>
              <View style={style.imageTextContainer}>
                <Text style={{color: COLORS.white, fontSize: width * 0.06}}>An Overview Of The Book Of Genesis</Text>
              </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  detailsCategoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.08
  },

  backgroundImage: {
    width: '100%',
    height: height * 0.25,
    backgroundColor: COLORS.blue
  },

  imageTextContainer: {
    color: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%'
    

  }

})

export default DetailsCategory