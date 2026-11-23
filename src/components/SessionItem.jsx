import formatTime from '../utils/formatTime.js'

function SessionItem({ session }) {
  console.log('render: SessionItem')

  return (
    <li className="session light">
      <strong>{session.topic}</strong>
      <span>{formatTime(session.seconds)}</span>
      <span>Distractions: {session.distractions}</span>
    </li>
  )
}

export default SessionItem
