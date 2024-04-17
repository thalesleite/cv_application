import { useState } from "react"
import "../styles/Professional.css"

function Professional() {
  const [disabled, setDisabled] = useState(false)
  const [companyName, setCompanyName] = useState("")
  const [position, setPosition] = useState("")
  const [responsabilites, setResponsabilites] = useState("")
  const [periodWork, setPeriodWork] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function save() {
    if (
      isTextValueEmpty(companyName) ||
      isTextValueEmpty(position) ||
      isTextValueEmpty(responsabilites) ||
      isTextValueEmpty(periodWork)
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
    <section className="professional">
      <h1>Professional Experience</h1>

      <form action="#">
        <div className="form-input">
          <label htmlFor="companyName">
            <b>Company Name: </b>
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={disabled}
            hidden={disabled}
          />
          <label className="form-label" hidden={!disabled}>
            {companyName}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="position">
            <b>Position Title: </b>
          </label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            disabled={disabled}
            hidden={disabled}
          />
          <label className="form-label" hidden={!disabled}>
            {position}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="responsabilites">
            <b>Main Responsabilities: </b>
          </label>
          <input
            type="text"
            id="responsabilites"
            value={responsabilites}
            onChange={(e) => setResponsabilites(e.target.value)}
            disabled={disabled}
            hidden={disabled}
          />
          <label className="form-label" hidden={!disabled}>
            {responsabilites}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="periodWork">
            <b>Period Worked: </b>
          </label>
          <input
            type="date"
            id="periodWork"
            value={periodWork}
            onChange={(e) => setPeriodWork(e.target.value)}
            disabled={disabled}
            hidden={disabled}
          />
          <label className="form-label" hidden={!disabled}>
            {periodWork}
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

export default Professional
