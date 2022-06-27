import { View, Text, StyleSheet, TouchableOpacity, Alert, useWindowDimensions, } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors'
import Trivia from './component/Trivia'
import quizData from './data'
import Timer from './component/Timer';
import QuizResult from './component/QuizResult'
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons'

const Questions = ({ navigation, rewardedCoins, setRewardedCoins }) => {
  const [stop, setStop] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  const [score, setScore] = useState(0)
  const [totalScore, setTotalScore] = useState(1);
  const [sound, setSound] = useState();
  const [toTryAgain, setToTryAgain] = useState(false)
  const [toNextLevel, setToNextLevel] = useState(false)
  const [quizList, setQuizList] = useState(quizData)
  const [show, setShow] = useState(false)
  const [time, setTime] = useState(false)
  const [isLoading, setIsLoading] = useState(false);


  const height = useWindowDimensions().height;

  const shuffleQuiz = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  useEffect(() => {
    shuffleQuiz(quizData)
    setQuizList(shuffleQuiz(quizData))
  }, [questionNum])

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../sounds/play.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    playSound()
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, []);

  useEffect(() => {
    alert(`CONGRATULATIONS YOU JUST EARNED $${rewardedCoins}`)
  }, [])

  // const loadAds = async () => {
  //   // await AdMobRewarded.setAdUnitID('ca-app-pub-3102229267647171/9215298789');
  //   // try {
  //   //   await AdMobRewarded.requestAdAsync();
  //   //   await AdMobRewarded.showAdAsync();
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  //   return 'hi'
  // }


  const nextQuestionAlert = () =>
    Alert.alert('Insufficient Funds', 'Wait till the end of the game and watch ads to increase your funds', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK') },
    ]);

  const handleNextQuestion = () => {
    const reduce = 5;
    if (rewardedCoins < reduce) {
      nextQuestionAlert();
    } else {
      setRewardedCoins(prev => prev - 5);
      setQuestionNum(prev => prev + 1);
    }
  }

  const handleTimer = () => {
    const reduce = 5;
    if (rewardedCoins < reduce) {
      nextQuestionAlert();
    } else {
      setRewardedCoins(prev => prev - 5)
      setTime(true);
    }
  }



  return (
    <View style={styles.questionsContainer}>
      {
        stop ? <QuizResult isLoading={isLoading} setIsLoading={setIsLoading} show={show} setShow={setShow} setRewardedCoins={setRewardedCoins} rewardedCoins={rewardedCoins} setToNextLevel={setToNextLevel} setToTryAgain={setToTryAgain} toTryAgain={toTryAgain} toNextLevel={toNextLevel} setScore={setScore} setTotalScore={setTotalScore} setQuestionNum={setQuestionNum} questionNum={questionNum} setStop={setStop} navigation={navigation} totalScore={totalScore} score={score} />
          :
          <View>


            <View style={styles.questionWrapper}>
              <View style={styles.top}>
                <View style={styles.wallet}>
                  <Icon name='wallet-outline' size={30} />
                  <Text style={{ color: 'green', fontWeight: 'bold' }}>${rewardedCoins}</Text>
                </View>

                <View style={styles.timer}>
                  <Text style={{ color: COLORS.white, fontSize: 25 }}><Timer setTime={setTime} time={time} setToNextLevel={setToNextLevel} setToTryAgain={setToTryAgain} totalScore={totalScore} score={score} setTotalScore={setTotalScore} setScore={setScore} setStop={setStop} questionNum={questionNum} setQuestionNum={setQuestionNum} /> </Text>
                </View>
              </View>
              <View style={styles.bottom}>
                <Trivia isLoading={isLoading} setIsLoading={setIsLoading} setToNextLevel={setToNextLevel} setRewardedCoins={setRewardedCoins} rewardedCoins={rewardedCoins} setToTryAgain={setToTryAgain} totalScore={totalScore} setTotalScore={setTotalScore} setScore={setScore} score={score} data={quizList} setQuestionNum={setQuestionNum} questionNum={questionNum} setStop={setStop} />
              </View>

              <View style={{
                position: 'absolute',
                top: height * 0.85,
                flexDirection: 'row',
              }}>
                <TouchableOpacity onPress={handleNextQuestion} style={{
                  backgroundColor: COLORS.white,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  elevation: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 50,
                  marginRight: 20

                }}>
                  <Icon name='reload-circle' size={20} color={COLORS.dark} />
                  <Text style={{ color: 'green', fontSize: 16 }}>($5) Skip Question</Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>


      }



    </View>
  )
}

const styles = StyleSheet.create({
  questionsContainer: {
    flex: 1,
    position: 'relative'

  },

  questionWrapper: {
    // backgroundColor: 'orange',
    height: '100%',
    alignItems: 'center',

  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: '100%',

  },

  wallet: {
    position: 'absolute',
    left: 0,
    top: 70,
    backgroundColor: COLORS.white,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,

  },

  timer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    // marginBottom: 150,
    // marginTop: 50,
    position: 'absolute',
    right: 0,
    top: 60


  },

  bottom: {
    // height: '50%',
    // backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: '20%',
    width: '100%'
  },

  tryAgainContainer: {
    backgroundColor: COLORS.white,
    padding: 10,

  }
})

export default Questions