import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

const time = 20;
const Timer = ({setStop,  setTotalScore, totalScore, score, setScore, questionNum, setQuestionNum}) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1)
      if (timer === 0) {
        setQuestionNum((prev) => prev + 1)
        setTotalScore((prevScore) => prevScore + 1)
        setTimer(time)
        
      }
    }, 1000)

    return () => (
      clearInterval(interval)
    )
  })

  useEffect(()=> {
    setTimer(time)
  }, [questionNum])
  return timer
}

export default Timer