import { useState } from "react"

export default function Form() {
  const [disabled, setDisabled] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function save() {
    if (
      isTextValueEmpty(name) ||
      isTextValueEmpty(email) ||
      isTextValueEmpty(phone)
    ) {
      setErrorMessage("Please, fill up all the form!")
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
          disabled={disabled}
          hidden={disabled}
        />
        <label className="form-label" hidden={!disabled}>
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
          disabled={disabled}
          hidden={disabled}
        />
        <label className="form-label" hidden={!disabled}>
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
          disabled={disabled}
          hidden={disabled}
        />
        <label className="form-label" hidden={!disabled}>
          {phone}
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
  )
}
