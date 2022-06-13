import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import COLORS from '../../../consts/colors'
import { Audio } from 'expo-av';



const totalQuestion = 15;
const Trivia = ({data, setToNextLevel, setToTryAgain, setTotalScore,score, totalScore, setScore, setStop, setQuestionNum, questionNum}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(styles.answerCorrect);
  const [sound, setSound] = React.useState();
  
  

  React.useEffect(() => {
    setQuestion(data[questionNum - 1]);

    return () => setQuestion(null)
  },[data, questionNum]);

  const Answers = ({questions}) => {
    return(
      <View style={styles.answers}>
        <View style={selectedAnswer === questions ? className : styles.answersText}>
          <Text style={{color: COLORS.blue, fontSize: 18, marginHorizontal: 10}}>{questions.answer.letter}</Text>
          <Text style={{color: COLORS.white, fontSize: 18, }}>{questions.answer.text}</Text>
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
    await sound.playAsync(); }

    useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);


  async function playWrongSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../../../sounds/wrong.mp3')
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



  const handleClick = async (a) => {
    await setTotalScore((prevScore) => prevScore + 1)

    if (totalScore === totalQuestion ) {
      const result = (score/totalQuestion) * 100;
      if(Math.round(result) >= 50) {
        setToNextLevel(true)
      } else{
        setToTryAgain(true)
      }

      setStop(true)
    } else {
      setSelectedAnswer(a);
      setClassName([styles.answersText, styles.answerCheck]);
      setTimeout(() => {
        setClassName(a.correct ? [styles.answersText, styles.answerCorrect] : [styles.answersText, styles.answerWrong])
      }, )
    }
    
    

    setTimeout(() => {
      if (a.correct) {
        playCorrectSound()
        setScore((prevScore) => prevScore + 1)
        setQuestionNum((prevNum) => prevNum + 1)
        setSelectedAnswer(null)
        
      } else{
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
          <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>QUESTION:</Text>
          <Text style={{fontSize: 18, color: COLORS.white}}>{totalScore }/{totalQuestion}</Text>
        </View>
        <Text style={{color: COLORS.white, fontSize: 20}}>{question?.question}?</Text>
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
    backgroundColor: 'darkblue',
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // bottom: 40,
    width: '100%',
    paddingVertical: 40,
    
    
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
    backgroundColor: 'darkblue',
    elevation: 10,
    padding: 5,
    borderRadius: 40,
    width: '50%',
    alignItems: 'center',
    marginBottom: 5
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