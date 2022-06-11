import { View, Text, Button, Platform, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import COLORS from '../../../consts/colors';

const time = 5
const QuizResult = ({setStop,setScore, setQuestionNum, setTotalScore, score,totalScore, navigation}) => {
  const [show, setShow] = useState(false)
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    return () => AdMobRewarded.removeAllListeners();
  })

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
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    try {
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.log(error);
    }
  }

  AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {
    loadAds()
  })


  useEffect(() => {
    loadAds()
  }, [])

  const tryAgain = async () => {
    setQuestionNum(1)
    setStop(false)
    setScore(0)
    setTotalScore(0)
    
  }

  const endQuiz = async () => {
    await loadAds()
    await navigation.popToTop()
    
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <Text style={{fontSize: 20,color: 'white', fontWeight: 'bold', marginBottom: 20}}>Quiz Finished!!!</Text>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>TOTAL QUESTIONS: {totalScore}</Text>
          <Text style={{color: 'white'}}>You Got {score} out of {totalScore} Correctly</Text>
        </View>

        {
          show ? 
          <View style={styles.button}>
          <Button title='Try Again' onPress={tryAgain}/>
          <Button title='End Quiz' onPress={endQuiz} />
        </View>
        :
        <View style={styles.timeContainer}>
          <Text style={{color: COLORS.white}}>Loading...</Text>
        </View>
        }

        
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
  containerResult:{

    alignItems: 'center',
    paddingVertical: 20,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default QuizResult