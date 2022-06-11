import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import COLORS from '../../../consts/colors'
import PopUp from './Modal';

const totalQuestion = 4;
const Trivia = ({data, setTotalScore, totalScore, setScore, setStop, setQuestionNum, questionNum}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(styles.answerCorrect);
  

  React.useEffect(() => {
    setQuestion(data[questionNum - 1]);

    return () => setQuestion(null)
  },[data, questionNum]);

  // React.useEffect(() => {
    

    
  // }, [totalScore])

  const Answers = ({questions}) => {
    return(
      <View style={styles.answers}>
        <View style={selectedAnswer === questions ? className : styles.answersText}>
          <Text style={{color: 'white'}}>$</Text>
          <Text style={{color: COLORS.white, fontSize: 18, textAlign: 'center'}}>{questions.answer}</Text>
        </View>
      </View>
      
    )
  }

  const handleClick = async (a) => {
    setTotalScore(totalScore + 1)

    if (totalScore === totalQuestion) {
      setStop(true)
    } else {
      setSelectedAnswer(a);
      setClassName([styles.answersText, styles.answerCheck]);
      setTimeout(() => {
        setClassName(a.correct ? [styles.answersText, styles.answerCorrect] : [styles.answersText, styles.answerWrong])
      }, )
    }
    
    

    await const check = () => {
      if (a.correct) {
        setScore(questionNum)
        setQuestionNum((prevNum) => prevNum + 1)
        setSelectedAnswer(null)
        
      } else{
        setQuestionNum((prevNum) => prevNum + 1)
        // setStop(true)
      }
    }

    
  }


  return (
    <View style={styles.trivia}>
      <View style={styles.questions}>
        <Text style={{color: COLORS.red, width: 30, fontSize: 25, }}>{question?.id})</Text>
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
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
    width: '100%',
    paddingVertical: 20
  },
  questions: {
    width: '100%',
    backgroundColor: COLORS.dark,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center'
    
  },
  answers: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  
  answersText: {
    backgroundColor: COLORS.dark,
    padding: 15,
    margin: 3,
    width: '85%',
    borderRadius: 5,
    textAlign: 'center',
    elevation: 5,
    borderBottomWidth: 4,
    borderBottomColor: 'white'
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