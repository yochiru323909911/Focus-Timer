import ThemeButton from './ThemeButton.jsx'

function Header() {
  console.log('render: Header')

  return (
    <header className="header">
      <h1>Focus Timer</h1>
      <ThemeButton />
    </header>
  )
}

export default Header
