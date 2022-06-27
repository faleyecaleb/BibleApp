import { View } from 'react-native'
import { useState, useEffect } from 'react'

const totalQuestion = 15
const theTime = 15
const Timer = ({ setStop, time, setToTryAgain, setTime, setToNextLevel, setTotalScore, totalScore, score, questionNum, setQuestionNum }) => {
  const [timer, setTimer] = useState(theTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1)
      if (timer === 0) {
        if (totalScore === totalQuestion) {
          const result = (score / totalQuestion) * 100;
          if (Math.round(result) >= 50) {
            setToNextLevel(true)
          } else {
            setToTryAgain(true)
          }
          setStop(true)
          // setShow(true)
          setTimer(0)
        } else {
          setQuestionNum((prev) => prev + 1)
          setTotalScore((prevScore) => prevScore + 1)
          setTimer(theTime)
        }
      }
      if (time) {
        setTimer(prev => prev + 10)
        setTime(false)
      }
    }, 1000)

    return () => (
      clearInterval(interval)
    )
  })

  useEffect(() => {
    setTimer(theTime)
  }, [questionNum])
  return timer
}

export default Timer