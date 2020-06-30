import React, { useReducer } from "react"
import styles from "./form.module.css"

const INITAL_STATE = {
  name: ``,
  email: ``,
  subject: ``,
  body: ``,
  status: `IDLE`,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value }

    case "updatesStatus":
      return { ...state, status: action.status }

    case "reset":

    default:
      return INITAL_STATE
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITAL_STATE)

  const setStatus = status => dispatch({ type: "updatesStatus", status })

  console.log({ state })

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setStatus("PENDING")
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setStatus("SUCCESS")
      })
      .catch(error => {
        console.error(error)
        setStatus("ERROR")
      })
  }

  if (state.status === "SUCCESS") {
    return (
      <p className={styles.success}>
        Message Sent!
        <button
          type="reset"
          onClick={() => dispatch({ type: "reset" })}
          className={`${styles.button} ${styles.centered}`}
        >
          Reset
        </button>
      </p>
    )
  }

  return (
    <>
      {state.status === "ERROR" && (
        <p className={styles.error}>
          {" "}
          Something went wrong. Please try again.{" "}
        </p>
      )}
      <form
        style={{
          mariginTop: "20px",
        }}
        className={`${styles.form} ${
          state.status === "PENDING" && styles.pending
        }`}
        onSubmit={handleSubmit}
      >
        <label className={styles.label}>
          <input
            className={styles.input}
            placeholder="name"
            type="text"
            name="name"
            value={state.name}
            onChange={updateFieldValue("name")}
          />
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            placeholder="email"
            type="email"
            name="email"
            value={state.email}
            onChange={updateFieldValue("email")}
          />
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            placeholder="Subject"
            type="text"
            name="subject"
            value={state.subject}
            onChange={updateFieldValue("subject")}
          />
        </label>
        <label className={styles.label}>
          <textarea
            className={styles.input}
            placeholder="body"
            type="text"
            name="body"
            value={state.body}
            onChange={updateFieldValue("body")}
          />
        </label>
        <button className={styles.button}>Send</button>
      </form>
    </>
  )
}

export default Form
