import Header from './components/Header.jsx'
import FocusTimer from './components/FocusTimer.jsx'
import SessionList from './components/SessionList.jsx'

function App() {
  console.log('render: App')

  const sessions = [{ id: 1, topic: 'HTML basics', seconds: 65, distractions: 2 }]

  return (
    <div className="app light">
      <Header />
      <FocusTimer />
      <SessionList sessions={sessions} />
    </div>
  )
}

export default App
