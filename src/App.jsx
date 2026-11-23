import Header from './components/Header.jsx'
import FocusTimer from './components/FocusTimer.jsx'
import SessionList from './components/SessionList.jsx'
import { useState, createContext } from 'react'
export const ThemeContext = createContext('light');

function App() {
  console.log('render: App')

  const [sessions, setSessions] = useState([{ id: 1, topic: 'HTML basics', seconds: 65, distractions: 2 }])
  
  const [light, setLight] = useState(true);

  const toggleLight = () => {
    setLight(prev => !prev);
  };

  return (
    <ThemeContext value={{light, toggleLight}}>
      <div className={`app ${light ? "light" : "dark"}`}>
        <Header />
        <FocusTimer setSessions={setSessions}/>
        <SessionList sessions={sessions} />
      </div>
    </ThemeContext>
  )
}

export default App
