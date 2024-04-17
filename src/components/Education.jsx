import { useState } from "react"
import "../styles/Education.css"

function Education() {
  const [disabled, setDisabled] = useState(false)
  const [schoolName, setSchoolName] = useState("")
  const [title, setTitle] = useState("")
  const [periodStudy, setPeriodStudy] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function save() {
    if (
      isTextValueEmpty(schoolName) ||
      isTextValueEmpty(title) ||
      isTextValueEmpty(periodStudy)
    ) {
      setErrorMessage("Please, fill up all the fields!")
    } else {
      setErrorMessage("")
      setDisabled(true)
    }
  }

  function edit() {
    setDisabled(false)
  }

  function isTextValueEmpty(value) {
    return !value.length > 0
  }

  return (
    <section className="education">
      <h1>Education Experience</h1>

      <form action="#">
        <div className="form-input">
          <label htmlFor="schoolName">
            <b>School Name: </b>
          </label>
          <input
            type="text"
            id="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            disabled={disabled}
            hidden={disabled}
          />
          <label className="form-label" hidden={!disabled}>
            {schoolName}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="title">
            <b>Title of Study: </b>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={disabled}
            hidden={disabled}
          />
          <label className="form-label" hidden={!disabled}>
            {title}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="periodStudy">
            <b>End Date: </b>
          </label>
          <input
            type="date"
            id="periodStudy"
            value={periodStudy}
            onChange={(e) => setPeriodStudy(e.target.value)}
            disabled={disabled}
            hidden={disabled}
          />
          <label className="form-label" hidden={!disabled}>
            {periodStudy}
          </label>
        </div>

        <div className="form-input align-right">
          <button onClick={edit} className="btn-blue">
            Edit
          </button>
          <button onClick={save} hidden={disabled} className="btn-green">
            Save
          </button>
        </div>

        <div className="error">{errorMessage}</div>
      </form>
    </section>
  )
}

export default Education
