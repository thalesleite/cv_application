import { useState } from "react"
import "../styles/Professional.css"

function Professional() {
  const [hidden, setHidden] = useState(false)
  const [companyName, setCompanyName] = useState("")
  const [position, setPosition] = useState("")
  const [responsabilites, setResponsabilites] = useState("")
  const [startPeriod, setStartPeriod] = useState("")
  const [endPeriod, setEndPeriod] = useState("")
  const [periodWork, setPeriodWork] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function save(e) {
    e.preventDefault()

    if (
      isTextValueEmpty(companyName) ||
      isTextValueEmpty(position) ||
      isTextValueEmpty(responsabilites) ||
      isTextValueEmpty(startPeriod) ||
      isTextValueEmpty(endPeriod)
    ) {
      setErrorMessage("Please, fill up all the fields!")
    } else {
      const period = `Start Date: ${startPeriod} - End Date: ${endPeriod}`
      setPeriodWork(period)

      setErrorMessage("")
      setHidden(true)
    }
  }

  function edit(e) {
    e.preventDefault()
    setHidden(false)
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
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
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
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
            {position}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="responsabilites">
            <b>Main Responsabilities: </b>
          </label>
          <textarea
            rows={4}
            cols={40}
            id="responsabilites"
            value={responsabilites}
            onChange={(e) => setResponsabilites(e.target.value)}
            hidden={hidden}
            className={hidden ? "hidden" : ""}
          />
          <label className="form-label" hidden={!hidden}>
            {responsabilites}
          </label>
        </div>

        <div className="form-input">
          <label>
            <b>Period Worked: </b>
          </label>
          <span hidden={hidden}>Start: </span>
          <input
            type="date"
            id="startPeriod"
            value={startPeriod}
            onChange={(e) => setStartPeriod(e.target.value)}
            hidden={hidden}
          />
          <span hidden={hidden}>End: </span>
          <input
            type="date"
            id="endPeriod"
            value={endPeriod}
            onChange={(e) => setEndPeriod(e.target.value)}
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
            {periodWork}
          </label>
        </div>

        <div className="form-input align-right">
          <button onClick={edit} className="btn-blue">
            Edit
          </button>
          <button
            type="submit"
            onClick={save}
            hidden={hidden}
            className="btn-green"
          >
            Save
          </button>
        </div>

        <div className="error">{errorMessage}</div>
      </form>
    </section>
  )
}

export default Professional
