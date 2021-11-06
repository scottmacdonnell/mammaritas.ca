import { useState } from 'react'

import * as Text from '../Text'
import * as Input from '../Input'
import Container from '../Container'
import Spinner from '../Spinner'

import styles from '../../styles/components/sections/ContactForm.module.scss'

export default function ContactForm() {
  return (
    <div className={styles.ContactForm}>
      <Container>
        <Text.Heading2>
          Send Us a Message
        </Text.Heading2>

        <Form />
      </Container>
    </div>
  )
}

function Form(props) {
  const [status, setStatus] = useState({
    disabled: true,
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    title: 'Contact Us',
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      disabled: true,
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
    if (inputs) {
      let i = 0;
      const length = Object.values(inputs).length
      Object.values(inputs).forEach(val => {
        if(val !== '') { i++ }
      })
      
      if (i == length) {
        setStatus({
          disabled: false,
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }
    }
  }

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        disabled: false,
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })

      setInputs({
        title: 'Contact Us',
        name: '',
        email: '',
        message: ''
      })

      setTimeout(() => {
        setStatus({
          disabled: true,
          submitted: false,
          submitting: false,
          info: { error: false, msg: msg }
        })
      }, 2500)
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus({
      disabled: false,
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    })
    const res = await fetch('/api/sendgrid/send-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input.Spacer />
      
      <Label htmlFor="name">
        Name
      </Label>

      <Input.Text
        id="name"
        placeholder="Enter name"
        onChange={handleChange}
        value={inputs.name}
        aria-required
      />

      <Input.Spacer />
      <Label htmlFor="email">
        Email
      </Label>

      <Input.Email
        id="email"
        placeholder="Enter email"
        onChange={handleChange}
        value={inputs.email}
        aria-required
      />

      <Input.Spacer />

      <Label htmlFor="message">
        Message
      </Label>

      <Input.Textarea
        id="message"
        placeholder="Enter message"
        onChange={handleChange}
        value={inputs.message}
        aria-required
      />

      <Input.Spacer />

      <SubmitButton
        id="submit"
        name="submit"
        className={`${status.disabled == true ? styles.ButtonDisabled : styles.ButtonActive}`}
        disabled={status.disabled == true ? true : false}
        status={status}
      >
        Send Message
      </SubmitButton>
    </form>
  )
}

function Label(props) {
  const {
    className = styles.Label,
    children,
    ...rest
  } = props

  return (
    <div>
      <label
        className={className}
        {...rest}
      >
        <Text.Small>
          {children}
        </Text.Small>
      </label>
      <div className={styles.LabelSpacer} />
    </div>
  )
}

function SubmitButton(props) {
  return (
    <button
      type="submit"
      {...props}
    >
      <span className={styles.Prefix}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </span>
      <span className={styles.Content}>
        {!props.status?.submitting ? (
          !props.status?.submitted ? props.children : (
              <div className={styles.ButtonCheck}>
                <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <polyline points="6.66 12 10.43 16.41 17.32 8.34" />
                </svg>
              </div>
            )
          ) : <Spinner color="255, 255, 255" />
        }
      </span>
    </button>
  )
}