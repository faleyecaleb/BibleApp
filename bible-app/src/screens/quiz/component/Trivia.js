import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../../consts/colors'

const Trivia = ({data, setTimeout, setQuestionNum, questionNum}) => {
  const [question, setQuestion] = React.useState('null')

  React.useEffect(() => {
    setQuestion(data[questionNum - 1])
    console.log(data[questionNum - 1].question);
  },[data, questionNum])

  return (
    <View style={styles.trivia}>

      <View style={styles.questions}>
        <Text style={{color: COLORS.white, fontSize: 18}}>{question.question}</Text>
      </View>

      <View style={styles.answers}>
        <TouchableOpacity style={[styles.answersText, styles.answerCorrect]}>
          <Text style={{color: COLORS.white}}>Otry Tech</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answersText}>
          <Text style={{color: COLORS.white}}>Otry Tech</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answersText}>
          <Text style={{color: COLORS.white}}>Otry Tech</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answersText}>
          <Text style={{color: COLORS.white}}>Otry Tech</Text>
        </TouchableOpacity>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  trivia: {
    backgroundColor: COLORS.blue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  questions: {
    width: '80%',
    backgroundColor: COLORS.dark,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    
  },
  answers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center'
  },
  
  answersText: {
    backgroundColor: COLORS.dark,
    padding: 10,
    margin: 3,
    width: '40%',
    borderRadius: 5,
    textAlign: 'center',
    elevation: 5,
  },

  answerCorrect: {
    backgroundColor: 'teal'
  }
})
export default Trivia