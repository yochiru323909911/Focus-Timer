import formatTime from '../utils/formatTime.js'

function FocusTimer() {
  console.log('render: FocusTimer')

  return (
    <section className="panel">
      <label htmlFor="topic">What are you studying?</label>
      <input id="topic" type="text" placeholder="e.g. React hooks" />

      <p className="now">Now studying: ...</p>
      <p className="clock">{formatTime(0)}</p>

      <div className="buttons">
        <button>Start</button>
        <button>Got distracted</button>
        <button>Save session</button>
      </div>
    </section>
  )
}

export default FocusTimer
