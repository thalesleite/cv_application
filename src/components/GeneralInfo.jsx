import { useState } from "react"
import "../styles/GeneralInfo.css"

export default function GeneralInfo() {
  const [hidden, setHidden] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function save(e) {
    e.preventDefault()

    if (
      isTextValueEmpty(name) ||
      isTextValueEmpty(email) ||
      isTextValueEmpty(phone)
    ) {
      setErrorMessage("Please, fill up all the fields!")
    } else {
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
    <section className="general-info">
      <h1>General Information</h1>

      <form action="#">
        <div className="form-input">
          <label htmlFor="name">
            <b>Name: </b>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
            {name}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="email">
            <b>Email: </b>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
            {email}
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="phone">
            <b>Phone: </b>
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            hidden={hidden}
          />
          <label className="form-label" hidden={!hidden}>
            {phone}
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
