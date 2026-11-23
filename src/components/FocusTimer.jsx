import formatTime from '../utils/formatTime.js'
import { useEffect, useState, useRef } from 'react'

function FocusTimer({setSessions}) {
  console.log('render: FocusTimer')

  const [studing, setStuding] = useState('')
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef(null);
  const distracted = useRef(0);

  const saveSession = () => {
     setSessions(prev => [...prev, { id: prev.at(-1).id + 1, topic: studing, seconds: seconds, distractions: distracted.current}])
     setStuding('')
     setIsRunning(false)
     setSeconds(0)
     distracted.current = 0
     inputRef.current?.focus()
  }

  useEffect(() => {
    if (!isRunning) 
      return
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [isRunning])


  return (
    <section className="panel">
      <label htmlFor="topic">What are you studying?</label>
      <input id="topic" type="text" placeholder="e.g. React hooks" value={studing} onChange={(e) => setStuding(e.target.value)} ref={inputRef}/>

      <p className="now">Now studying: {studing ? studing : "..."}</p>
      <p className="clock">{formatTime(seconds)}</p>

      <div className="buttons">
        <button onClick={() => setIsRunning(prev => !prev)}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={() => {distracted.current++}}>Got distracted</button>
        <button onClick={saveSession} disabled={!studing}>Save session</button>
      </div>
    </section>
  )
}

export default FocusTimer
