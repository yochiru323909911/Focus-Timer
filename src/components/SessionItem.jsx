import formatTime from '../utils/formatTime.js'
import { useContext } from 'react'
import {ThemeContext} from '../App.jsx'

function SessionItem({ session }) {
  console.log('render: SessionItem')

  const { light, toggleLight } = useContext(ThemeContext);
  

  return (
    <li className={`session ${light ? "light" : "dark"}`}>
      <strong>{session.topic}</strong>
      <span>{formatTime(session.seconds)}</span>
      <span>Distractions: {session.distractions}</span>
    </li>
  )
}

export default SessionItem
