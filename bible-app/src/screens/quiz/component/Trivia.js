import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../../consts/colors'
import { Audio } from 'expo-av';
import { AdMobRewarded } from 'expo-ads-admob';


const adUnits = { realId: "ca-app-pub-3102229267647171/9215298789", testId: "ca-app-pub-3940256099942544/5224354917" }
const totalQuestion = 3;
const Trivia = ({ data, isLoading, setIsLoading, setToNextLevel, rewardedCoins, setRewardedCoins, setToTryAgain, setTotalScore, score, totalScore, setScore, setStop, setQuestionNum, questionNum }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(styles.answerCorrect);
  const [sound, setSound] = useState();

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


  React.useEffect(() => {
    setQuestion(data[questionNum - 1]);

    return () => setQuestion(null)
  }, [data, questionNum]);

  const Answers = ({ questions }) => {
    return (
      <View style={styles.answers}>
        <View style={selectedAnswer === questions ? className : styles.answersText}>
          <Text style={{ color: COLORS.blue, fontSize: 18, marginHorizontal: 10 }}>{questions.answer.letter}</Text>
          <Text style={{ color: COLORS.white, fontSize: 18, }}>{questions.answer.text}</Text>
        </View>
      </View>

    )
  }

  async function playCorrectSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../../sounds/correct.mp3')
    );
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  async function playWrongSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../../sounds/wrong.mp3')
    );
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const promptAlert = () =>
    Alert.alert('Want To Earn More', 'Watch ads to win extra $amount?', [
      {
        text: 'Cancel',
        onPress: () => setIsLoading(false),
        style: 'cancel',
      },
      {
        text: 'OK', onPress: async () => {
          await loadAds()
          setIsLoading(false)
        }
      },
    ]);



  const handleClick = async (a) => {
    await setTotalScore((prevScore) => prevScore + 1)

    if (totalScore === totalQuestion) {
      const result = (score / totalQuestion) * 100;
      setIsLoading(true)
      promptAlert()
      if (Math.round(result) >= 50) {
        // setRewardedCoins(rewardedCoins + 5)
        setToNextLevel(true)
      } else {
        // setRewardedCoins(rewardedCoins + 2)
        setToTryAgain(true)

      }
      setStop(true)
    } else {
      setSelectedAnswer(a);
      setClassName([styles.answersText, styles.answerCheck]);
      setTimeout(() => {
        setClassName(a.correct ? [styles.answersText, styles.answerCorrect] : [styles.answersText, styles.answerWrong])
      })
    }



    setTimeout(() => {
      if (a.correct) {
        // setRewardedCoins(prev => prev + 1)
        playCorrectSound()
        setScore((prevScore) => prevScore + 1)
        setQuestionNum((prevNum) => prevNum + 1)
        setSelectedAnswer(null)

      } else {
        // setRewardedCoins(prev => prev - 1)

        playWrongSound()
        setQuestionNum((prevNum) => prevNum + 1)
        // setStop(true)
      }
    }, 1000)
  }

  return (
    <View style={styles.trivia}>
      <View style={styles.questionsContainer}>
        <View style={styles.questions}>
          <Text style={{ color: COLORS.dark, fontSize: 18, fontWeight: 'bold' }}>Question:</Text>
          <Text style={{ fontSize: 18, color: COLORS.dark }}>{totalScore}/{totalQuestion}</Text>
        </View>
        <Text style={{ color: COLORS.white, fontSize: 20 }}>{question?.question}?</Text>
      </View>

      <FlatList data={question?.answers} renderItem={(questions) =>
        <TouchableOpacity onPress={() => handleClick(questions.item)}>
          <Answers questions={questions.item} />
        </TouchableOpacity>

      } />

    </View>
  )
}

const styles = StyleSheet.create({
  trivia: {
    // backgroundColor: 'darkblue',
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // bottom: 40,
    width: '100%',
    // paddingVertical: 20,


  },
  questionsContainer: {
    width: '100%',
    backgroundColor: COLORS.dark,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -120,
    // justifyContent: 'center'
  },

  questions: {
    fontSize: 25,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderColor: COLORS.gradientLight,
    borderWidth: 1
  },

  answers: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },

  answersText: {
    backgroundColor: COLORS.dark,
    padding: 10,
    margin: 10,
    width: '90%',
    flexDirection: 'row',
    borderRadius: 50,
    textAlign: 'center',
    elevation: 5,
    borderBottomWidth: 4,
    borderBottomColor: 'white',

  },

  answerCorrect: {
    backgroundColor: 'teal'
  },

  answerWrong: {
    backgroundColor: 'red'
  },

  answerCheck: {
    backgroundColor: 'orange'
  }
})
export default Trivia