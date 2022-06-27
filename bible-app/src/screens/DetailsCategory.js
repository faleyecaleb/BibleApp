import { View, Text, StyleSheet, StatusBar, ImageBackground, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, } from 'react-native'
import React, { useState, useEffect } from 'react';
import IMAGES from '../../src/consts/images'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'
import DetailsCard from '../components/DetailsCard';
import { AdMobInterstitial } from 'expo-ads-admob';

import { checkConnected } from '../../network';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const adUnits = { realId: "", testId: "ca-app-pub-3940256099942544/1033173712" }

const instertitial = async () => {
  await AdMobInterstitial.setAdUnitID(adUnits.testId); // Test ID, Replace with your-admob-unit-id

  try {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  } catch (error) {
    console.log(error);
  }
}


const DetailsCategory = ({ navigation, route }) => {
  const [connectStatus, setConnectStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  // const { isLoaded, isClosed, load, show } = useRewardedInterstitialAd(TestIds.REWARDED_INTERSTITIAL, {
  //   requestNonPersonalizedAdsOnly: true,
  // });

  // useEffect(() => {
  //   // Start loading the interstitial straight away
  //   load();
  // }, [load]);

  // useEffect(() => {
  //   if (isClosed) {
  //     // Action after the ad is closed
  //     navigation.navigate('NextScreen');
  //   }
  // }, [isClosed, navigation]);



  checkConnected().then(res => {
    setConnectStatus(res)
  })
  const books = route.params;
  const iconList = [
    { name: 'info', title: 'Introduction' },
    { name: 'user', title: 'Discussion' },
    { name: 'comment', title: 'Conclusion' },
    { name: 'praying-hands', title: 'Our Prayers' },
  ];

  const handleQuiz = async () => {
    navigation.navigate('Quiz');



  }

  //  ============== BACK HOME ICON FUNCTION ===================
  const handleBackHome = async () => {
    await instertitial()
    navigation.navigate('HomeScreen')
  }


  const handleDiscussion = async () => {
    setIsLoading(true)
    await instertitial()
    navigation.navigate('Discussion', books.discussion)
    setIsLoading(false)
  }

  //  ============== LOAD ADS BEFORE YOU ENTER PRAYER PAGE ===================
  const handlePrayer = async () => {
    navigation.navigate('Discussion', books.prayers)

  }

  const handlePrayerTab = async () => {
    alert('Feature Is Coming Soon...')
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} animated={true} />
      <ScrollView>
        <View style={{ paddingHorizontal: width * 0.05, marginBottom: 35.9 }}>
          <View style={style.detailsCategoryHeader}>
            <View>
              <Text style={{ fontSize: width * 0.045 }}>Theme:</Text>
              <Text selectable style={{ fontSize: width * 0.05, fontWeight: 'bold', color: COLORS.grey }}>Know Your Bible Better</Text>
            </View>
            <TouchableOpacity onPress={handleBackHome}>
              <Icon name='arrow-back-ios' color={COLORS.grey} size={25} />
            </TouchableOpacity>
          </View>

          <View>
            <ImageBackground source={IMAGES.img2} style={style.backgroundImage}>
              <View style={style.imageTextContainer}>
                <Text style={{ color: COLORS.white, fontSize: width * 0.06, fontWeight: 'bold', fontFamily: 'Roboto' }}>{books.title}</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={{ marginVertical: height * 0.016 }}>
            <Text style={{ fontSize: width * 0.05, fontWeight: 'bold' }}>{ }</Text>
          </View>

          <View style={style.detailsCardContainer}>
            <View style={style.detailsCard}>
              <TouchableOpacity onPress={() => navigation.navigate('Discussion', books.introduction)}>
                <DetailsCard icon={iconList[0].name} title={iconList[0].title} />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleDiscussion} >
                <DetailsCard isLoading={isLoading} nav={navigation} icon={iconList[1].name} title={iconList[1].title} />
              </TouchableOpacity>

            </View>

            <View style={style.detailsCard}>
              <TouchableOpacity onPress={() => navigation.navigate('Discussion', books.conclusion)} >
                <DetailsCard nav={navigation} icon={iconList[2].name} title={iconList[2].title} />
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePrayer} >
                <DetailsCard nav={navigation} icon={iconList[3].name} title={iconList[3].title} />
              </TouchableOpacity>

            </View>
          </View>




        </View>
        <View>
          <View style={style.bottomTabIconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
              <Icon name='home' color={COLORS.white} size={30} />
              <Text style={{ color: COLORS.white }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleQuiz}>
              <Icon name='question-answer' color={COLORS.white} size={30} />
              <Text style={{ color: COLORS.white }}>Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePrayerTab} style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Icon name='people' color={COLORS.white} size={30} />
              <Text style={{ color: COLORS.white }}>Prayers</Text>
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
    paddingVertical: height * 0.02,
    alignItems: 'center'
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
    elevation: 10,

  }

})

export default DetailsCategory