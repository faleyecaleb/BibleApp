import { View, Text, FlatList,Button, StyleSheet,Dimensions, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors'
import Trivia from './component/Trivia'
import quizData from './data'
import Timer from './component/Timer';
import QuizResult from './component/QuizResult'
import PopUp from './component/Modal'
import { Audio } from 'expo-av';

const Questions = ({setIsTrue,navigation}) => {
  const [stop, setStop] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  // const [tryAgain, setTryAgain] = useState(false);
  const [score, setScore] = useState(0)
  const [totalScore, setTotalScore] = useState(1);
  const [sound, setSound] = useState();
  const [toTryAgain, setToTryAgain] = useState(false)
  const [toNextLevel, setToNextLevel] = useState(false)
  const [quizList, setQuizList] = useState(quizData)

  const shuffleQuiz = array => {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  useEffect(() => {
    setQuizList(shuffleQuiz(quizData))
    console.log(quizList);
  }, [])

  async function playSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../../sounds/play.mp3')
    );
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync(); }

    useEffect(() => {
      playSound()
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, []);


  

  return (
    <View style={styles.questionsContainer}>
      {
        stop ? <QuizResult setToNextLevel={setToNextLevel} setToTryAgain={setToTryAgain} toTryAgain={toTryAgain} toNextLevel={toNextLevel} setScore={setScore} setTotalScore={setTotalScore} setQuestionNum={setQuestionNum} questionNum={questionNum} setStop={setStop} navigation={navigation} totalScore={totalScore} score={score}   />
        :
        <View>

         
          <View>
            <View style={styles.top}>
              <View style={styles.timer}>
                <Text style={{color: COLORS.white, fontSize: 25}}><Timer totalScore={totalScore} score={score} setTotalScore={setTotalScore} setScore={setScore} setStop={setStop} questionNum={questionNum} setQuestionNum={setQuestionNum} /></Text>
              </View>
          </View>
          <View style={styles.bottom}>
            <Trivia setToNextLevel={setToNextLevel} setToTryAgain={setToTryAgain} totalScore={totalScore} setTotalScore={setTotalScore} setScore={setScore} score={score} data={quizList} setQuestionNum={setQuestionNum} questionNum={questionNum} setStop={setStop} />
          </View>
            </View>
          

        </View>

        
      }
        
      
    </View>
  )
}

const styles = StyleSheet.create({
  questionsContainer: {
    flex: 1
  },
  top: {
    height: '45%',
    position: 'relative'
  },

  timer:{
    width: 70, 
    height:70, 
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: COLORS.white, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    top: 180,
    left: 10

  },

  bottom: {
    height: '50%',
    backgroundColor: COLORS.white,
  },

  tryAgainContainer:{
    backgroundColor: COLORS.white,
    padding: 10,

  }
})

export default Questions