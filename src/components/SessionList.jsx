import SessionItem from './SessionItem.jsx'

function SessionList({ sessions }) {
  console.log('render: SessionList')

  if (sessions.length === 0) {
    return <p className="empty">No sessions yet</p>
  }

  return (
    <ul className="sessions">
      {sessions.map((session) => (
        <SessionItem key={session.id} session={session} />
      ))}
    </ul>
  )
}

export default SessionList
