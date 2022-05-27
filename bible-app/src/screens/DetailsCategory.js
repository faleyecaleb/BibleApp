import { View, Text, StyleSheet, StatusBar,ImageBackground, TouchableOpacity, Dimensions, SafeAreaView, Image, FlatList, ScrollView, } from 'react-native'
import React from 'react';
import IMAGES from '../../src/consts/images'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import Icon from 'react-native-vector-icons/FontAwesome5';
import DetailsCard from '../components/DetailsCard';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const DetailsCategory = ({navigation, route}) => {
  const data = route.params;
  const iconList = [
    {name: 'info', title: 'Introduction'},
    {name: 'user', title: 'Discussion'},
    {name: 'comment', title: 'Conclusion'},
    {name: 'praying-hands', title: 'Our Prayers'},
  ]


  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} animated={true} />
      <ScrollView>
        <View style={{paddingHorizontal: width * 0.05, marginBottom: 35.9}}>
          <View style={style.detailsCategoryHeader}>
            <View>
              <Text style={{fontSize: width * 0.045}}>Theme:</Text>
              <Text style={{fontSize: width * 0.05, fontWeight: 'bold'}}>Know Your Bible Better</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Icon name='arrow-back' size={width * 0.05 && height * 0.05} />
            </TouchableOpacity>
          </View>

          <View>
            <ImageBackground source={IMAGES.img2} style={style.backgroundImage}>
                <View style={style.imageTextContainer}>
                  <Text style={{color: COLORS.white, fontSize: width * 0.06, fontWeight: 'bold', fontFamily: 'Roboto'}}>{data}</Text>
                </View>
            </ImageBackground>
          </View>

          <View style={{marginVertical: height * 0.016}}>
            <Text style={{fontSize: width * 0.05, fontWeight: 'bold'}}>An Overview Of The Book Of Genesis</Text>
          </View>

          <View style={style.detailsCardContainer}>
            <View style={style.detailsCard}>
              <DetailsCard nav={navigation} icon={iconList[0].name} title={iconList[0].title} />
              <DetailsCard nav={navigation} icon={iconList[1].name} title={iconList[1].title} />
            </View>
            <View style={style.detailsCard}>
              <DetailsCard nav={navigation}  icon={iconList[2].name} title={iconList[2].title} />
              <DetailsCard nav={navigation} icon={iconList[3].name} title={iconList[3].title} />
            </View>
          </View>

          


        </View>
        <View>
            <View style={style.bottomTabIconContainer}>
              <TouchableOpacity>
                <Icon name='home' color={COLORS.gradientLight} size={30} />
                <Text style={{color: COLORS.gradientLight }}>Prayers</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming Soon...')}>
                <Icon name='note' color={COLORS.white} size={30} />
                <Text style={{color: COLORS.white }}>Note</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Coming Soon...')} style={{alignItems: 'center',justifyContent: 'center',}}>
                <Icon name='search' color={COLORS.white} size={30} />
                <Text style={{color: COLORS.white }}>Prayers</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  detailsCategoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.02
  },

  backgroundImage: {
    width: '100%',
    height: height * 0.25,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    elevation: 5,
  },

  imageTextContainer: {
    color: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70
    

  },

  detailsCardContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 11,
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,

  },

  detailsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20


  },

  bottomTabIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.gradientDark,
    paddingHorizontal: width * 0.05,
    elevation: 5,

  }

})

export default DetailsCategory