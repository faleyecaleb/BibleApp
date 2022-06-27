import { View, Text, Button, ActivityIndicator, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AdMobRewarded } from 'expo-ads-admob';
import COLORS from '../../../consts/colors';
import { Audio } from 'expo-av';
import { checkConnected } from '../../../../network';
import Icon from 'react-native-vector-icons/MaterialIcons';

const adUnits = { realId: "", testId: "ca-app-pub-3940256099942544/5224354917" }
const time = 5
const QuizResult = ({ isLoading, setIsLoading, setStop, show, setShow, setScore, setToNextLevel, setToTryAgain, toNextLevel, toTryAgain, setQuestionNum, setTotalScore, score, totalScore, navigation, setRewardedCoins, rewardedCoins }) => {
  const [timer, setTimer] = useState(time);
  const [sound, setSound] = useState();
  const [connectStatus, setConnectStatus] = useState(false);
  const [goBack, setGoBack] = useState(false)

  const theScore = Math.round((score / (totalScore - 1)) * 100);

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

  useEffect(() => {
    setToNextLevel((prev) => prev)
    setToTryAgain((prev) => prev)
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1)
      if (timer === 0) {
        setShow(true)
        setTimer(0)

      }
    }, 1000)

    return () => (
      clearInterval(interval)
    )
  })
  // ================= FUNCTION FOR LOADING ADS ==================
  const loadAds = async () => {
    await AdMobRewarded.setAdUnitID(adUnits.testId);
    try {
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', (e) => {
      // console.log(e);
      if (theScore >= 50) {
        setRewardedCoins(prev => prev + e.amount)
      } else {
        setRewardedCoins(prev => prev + e.amount - 5)
        console.log('Try again');
      }
    })

    return () => AdMobRewarded.removeAllListeners();
  }, [rewardedCoins])

  AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {
    loadAds()
  })

  // useEffect(() => {
  //   const load = async () => {
  //     setIsLoading(true)
  //     setIsLoading(false)
  //   }
  // }, [])





  // useEffect(() => {

  // }, [])


  async function playSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../../sounds/play.mp3')
    );
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  const tryAgain = async () => {
    if (connectStatus) {
      // dismissedAds()
      playSound()
      setToTryAgain(false)
      setQuestionNum(1)
      setStop(false)
      setScore(0)
      setTotalScore((prevScore) => prevScore - prevScore + 1)
    } else {
      alert('Oops...Check You Connection')
    }

  }

  const endQuiz = () => {
    setIsLoading(true)
    navigation.navigate('HomeScreen')
    setIsLoading(false)

  }

  const nextLevel = () => {
    if (connectStatus) {
      playSound()
      setToNextLevel(false)
      setStop(false)
      setScore(0)
      setQuestionNum(1)
      setTotalScore((prevScore) => prevScore - prevScore + 1)
    } else {
      alert('Oops...Check You Connection')
      setGoBack(true)
    }

  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <Text style={{ fontSize: 20, color: 'lightgreen', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Total Earnings ${rewardedCoins}</Text>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>TOTAL QUESTIONS: {totalScore - 1}</Text>
          <Text style={{ color: 'white' }}>You Got {score} / {totalScore - 1} Correctly</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>Score {theScore}%</Text>
        </View>

        {
          show ?
            <View>
              {toNextLevel &&
                <View>
                  {
                    isLoading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color={COLORS.white} />
                      :
                      <Button title='Play Quiz Again👍' onPress={nextLevel} />

                  }

                </View>
              }
              {toTryAgain &&
                <View>
                  {isLoading ?
                    <View style={{ alignItems: 'center' }}>
                      <ActivityIndicator style={{ marginTop: 10 }} size="large" color={COLORS.white} />
                      <Text style={{ color: COLORS.white, fontSize: 16 }}>Loading...Please Wait</Text>
                    </View>
                    :
                    <View style={styles.button}>
                      <Button title='Try Again' onPress={tryAgain} />
                      <Button title='End Quiz' onPress={endQuiz} />
                    </View>
                  }

                </View>
              }



            </View>
            :
            <View style={styles.timeContainer}>
              <ActivityIndicator size="large" color={COLORS.white} />
            </View>
        }

        <TouchableOpacity style={{ marginTop: 5 }}>
          <Button onPress={() => navigation.navigate('FirstScreen')} title='Go Back Home' />
        </TouchableOpacity>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'indigo',
    padding: 20,
    margin: '20%',
    elevation: 10,
  },
  containerResult: {

    alignItems: 'center',
    paddingVertical: 20,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default QuizResult