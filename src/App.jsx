import "./styles/App.css"
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education"
import Professional from "./components/Professional"

function App() {
  return (
    <div className="main">
      <h1>CV Application</h1>

      <GeneralInfo />
      <Education />
      <Professional />
    </div>
  )
}

export default App
