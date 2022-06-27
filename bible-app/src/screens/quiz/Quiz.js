import { View, Text, SafeAreaView, ImageBackground, StyleSheet, ActivityIndicator, TouchableOpacity, Dimensions, StatusBar, FlatList, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../consts/colors';
import Questions from './Questions';
import { checkConnected } from '../../../network';
// import { InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';
import { AdMobRewarded, AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';


const height = Dimensions.get('screen').height;
// =============================== INTERSTITIAL ADS ===========================
const adUnits = { realId: "", testId: "ca-app-pub-3940256099942544/6300978111" }
const adUnitsRewarded = { realId: "", testId: "ca-app-pub-3940256099942544/5224354917" }

const instertitial = async () => {
  await AdMobInterstitial.setAdUnitID(adUnits.testId); // Test ID, Replace with your-admob-unit-id

  try {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  } catch (error) {
    console.log(error);
  }
}

const money = [
  { id: 1, amount: '$ 100' },
  { id: 2, amount: '$ 200' },
  { id: 3, amount: '$ 300' },
  { id: 4, amount: '$ 500' },
  { id: 5, amount: '$ 1000' },
  { id: 6, amount: '$ 2000' },
  { id: 7, amount: '$ 4000' },
  { id: 8, amount: '$ 8000' },
  { id: 9, amount: '$ 16000' },
  { id: 10, amount: '$ 32000' },
  { id: 11, amount: '$ 64000' },
  { id: 12, amount: '$ 125000' },
  { id: 13, amount: '$ 250000' },
  { id: 14, amount: '$ 500000' },
  { id: 15, amount: '$ 1000000' },
].reverse()

const Quiz = ({ navigation }) => {
  const img = require('../../assets/images/quizImg.jpg');
  const [toStartQuiz, setToStartQuiz] = useState(false)
  const [connectStatus, setConnectStatus] = useState(false);
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const [rewardedCoins, setRewardedCoins] = useState(0)

  // const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';


  checkConnected().then(res => {
    setConnectStatus(res)
  })


  const handleQuiz = async () => {
    if (connectStatus) {
      navigation.navigate('Quiz');
    } else {
      alert('Oops...Check You Connection')
    }


  }

  const loadAds = async () => {
    await AdMobRewarded.setAdUnitID(adUnitsRewarded.testId);
    try {
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', (e) => {
      setRewardedCoins(e.amount)

      // console.log(arr)
      // console.log(arr[1]);
    })


    return () => AdMobRewarded.removeAllListeners()


    // const sum = arr.reduce((accumulator, value) => {
    //   return accumulator + value;
    // }, 0)
  }, [isQuizLoading])

  const showQuiz = () =>
    Alert.alert('No Internet Connection', 'Turn On You Data To Play Quiz', [
      {
        text: 'OK', onPress: async () => {
          if (connectStatus) {
            await instertitial()
            setToStartQuiz(true);

          } else {
            setGoBack(false)
            setIsQuizLoading(false)
          }
        }
      },
    ]);

  const promptAlert = () =>
    Alert.alert('Start The Game With $10', 'Watch ads to earn reward', [
      {
        text: 'Cancel',
        onPress: async () => {
          await instertitial()
          setToStartQuiz(true)
        },
        style: 'cancel',
      },
      {
        text: 'OK', onPress: async () => {
          await loadAds()
          setToStartQuiz(true)
        }
      },
    ]);


  const startQuiz = async () => {
    setIsQuizLoading(true)
    if (connectStatus) {
      promptAlert()
        ;


    } else {
      showQuiz()
    }

  }
  return (
    <SafeAreaView style={{ position: 'relative' }}>
      <StatusBar animated={true} translucent={false} backgroundColor={COLORS.dark} barStyle={'light-content'} />
      <ImageBackground resizeMode='cover' style={styles.backgrounImage} source={img}>
        <View style={{
          position: 'relative', flex: 1, alignItems: 'center',
        }}>
          < AdMobBanner
            style={{ position: 'absolute', top: 0, }}
            bannerSize="fullBanner"
            adUnitID={adUnits.testId} // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds={false} // true or false
          />
        </View>



        {toStartQuiz && <View style={{ height: '100%' }} >
          <Questions rewardedCoins={rewardedCoins} setRewardedCoins={setRewardedCoins} navigation={navigation} />
        </View>}

        {
          !toStartQuiz &&
          <View style={styles.card}>
            {goBack && <Button title='Try Again' onPress={() => navigation.popToTop()} />}

            {isQuizLoading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color={COLORS.dark} />
              :
              <View style={{ marginTop: 10 }}>
                <Button title='Start Quiz' onPress={startQuiz} />

              </View>

            }
          </View>
        }

      </ImageBackground>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  backgrounImage: {
    height: height,
    position: 'relative'
  },

  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  card: {
    backgroundColor: 'white',
    padding: 25,
    position: 'absolute',
    top: height * 0.5,
    elevation: 10,
    borderRadius: 10,
    color: COLORS.dark,
    fontSize: 20,
    alignSelf: 'center'
  },
})

export default Quiz