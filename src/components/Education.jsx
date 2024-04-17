import { useState } from "react"
import "../styles/Education.css"

function Education() {
  const [hidden, setHidden] = useState(false)
  const [schoolName, setSchoolName] = useState("")
  const [title, setTitle] = useState("")
  const [periodStudy, setPeriodStudy] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const months = [
    { code: "01", text: "January" },
    { code: "02", text: "February" },
    { code: "03", text: "March" },
    { code: "04", text: "April" },
    { code: "05", text: "May" },
    { code: "06", text: "June" },
    { code: "07", text: "July" },
    { code: "08", text: "August" },
    { code: "09", text: "September" },
    { code: "10", text: "October" },
    { code: "11", text: "November" },
    { code: "12", text: "December" },
  ]

  const years = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ]

  function save(e) {
    e.preventDefault()

    if (
      isTextValueEmpty(schoolName) ||
      isTextValueEmpty(title) ||
      isTextValueEmpty(selectedMonth) ||
      isTextValueEmpty(selectedYear)
    ) {
      setErrorMessage("Please, fill up all the fields!")
    } else {
      const period = `${selectedMonth}/${selectedYear}`
      setPeriodStudy(period)

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
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
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
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
            {title}
          </label>
        </div>

        <div className="form-input">
          <label>
            <b>End Date: </b>
          </label>
          <select
            name="month"
            id="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            hidden={hidden}
          >
            <option value="">Month</option>
            {months.map((month, index) => {
              return (
                <option key={index} value={month.code}>
                  {month.text}
                </option>
              )
            })}
          </select>
          <select
            name="year"
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            hidden={hidden}
          >
            <option value="">Year</option>
            {years.map((year, index) => {
              return (
                <option key={index} value={year}>
                  {year}
                </option>
              )
            })}
          </select>
          <label className="form-label" hidden={!hidden}>
            {periodStudy}
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

export default Education
