import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="amp-home-text">The future home of</p>
        <p className="amp-logo">
          <FontAwesomeIcon icon={faBookOpen} className="amp-logo" />
          <span className="amp-logo"> AMP </span>
          <span class="amp-home-bg-color">HR Consulting</span>
        </p>
      </header>
    </div>
  )
}

export default App
