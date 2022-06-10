import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

const time = 3;
const Timer = ({setStop, questionNum}) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1)
      if (timer === 0) {
        setTimer(time)
        setTimeout(() => setQuestionNum((prev) => prev + 1), 1000)
      }
    }, 1000)

    return () => (
      clearInterval(interval)
    )
  })

  useEffect(()=> {
    setTimer(2)
  }, [questionNum])
  return timer
}

export default Timer