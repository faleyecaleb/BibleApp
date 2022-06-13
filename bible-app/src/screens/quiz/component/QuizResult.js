import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react';
import { AdMobRewarded } from 'expo-ads-admob';
import COLORS from '../../../consts/colors';
import { Audio } from 'expo-av';

const time = 5
const QuizResult = ({setStop,setScore, setToNextLevel, setToTryAgain, toNextLevel, toTryAgain, setQuestionNum, setTotalScore, score,totalScore, navigation}) => {
  const [show, setShow] = useState(false)
  const [timer, setTimer] = useState(time);
  const [sound, setSound] = React.useState();

  useEffect(() => {
    setToNextLevel((prev) => prev)
    setToTryAgain((prev) => prev)
  }, [])

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



  async function playSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../../../sounds/play.mp3')
    );
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync(); }

    useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);


  const tryAgain = async () => {
    playSound()
    setToTryAgain(false)
    setQuestionNum(1)
    setStop(false)
    setScore(0)
    setTotalScore((prevScore) => prevScore - prevScore + 1)
  }

  const endQuiz = async () => {
    await loadAds()
    await navigation.popToTop()
    
  }

  const nextLevel = async () => {
    playSound()
    setToNextLevel(false)
    setStop(false)
    setScore(0)
    setQuestionNum(1)
    setTotalScore((prevScore) => prevScore - prevScore + 1)
  }
  const theScore = Math.round((score/(totalScore - 1)) * 100)
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <Text style={{fontSize: 20,color: 'white', fontWeight: 'bold', marginBottom: 20}}>Quiz Finished!!!</Text>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>TOTAL QUESTIONS: {totalScore - 1}</Text>
          <Text style={{color: 'white'}}>You Got {score} / {totalScore - 1 } Correctly</Text>
          <Text style={{color: 'white', fontSize: 20}}>Score {theScore}%</Text>
        </View>

        {
          show ? 
          <View>
            {toNextLevel &&
              <View>
                  <Button title='Play Quiz Again👍' onPress={nextLevel}/>
              </View>
            }
            {toTryAgain && 
            <View style={styles.button}>
              <Button title='Try Again' onPress={tryAgain}/>
              <Button title='End Quiz' onPress={endQuiz} />
            </View>
            }
        
            
            
            </View>
        :
        <View style={styles.timeContainer}>
          <ActivityIndicator size="large" color={COLORS.white} />
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