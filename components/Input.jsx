import styles from '../styles/components/Input.module.scss'

export const Date = (props) => {
  const {
    className = styles.Date,
    type = 'date',
    id,
    name,
    key,
    ...rest
  } = props

  return (
    <input
      className={className}
      type={type}
      id={id}
      name={id}
      key={id}
      {...rest}
    />
  )
}

export const Email = (props) => {
  const {
    className = styles.Email,
    type = 'email',
    id,
    name,
    key,
    ...rest
  } = props

  return (
    <input
      className={className}
      type={type}
      id={id}
      name={id}
      key={id}
      {...rest}
    />
  )
}

export const File = (props) => {
  const {
    className = styles.File,
    type = 'file',
    id,
    name,
    key,
    ...rest
  } = props

  return (
    <input
      className={className}
      type={type}
      id={id}
      name={id}
      key={id}
      {...rest}
    />
  )
}

export const Files = (props) => {
  const {
    className = styles.Files,
    type = 'file',
    id,
    name,
    key,
    ...rest
  } = props

  return (
    <>
      <input
        className={className}
        type={type}
        id={id}
        name={id}
        key={id}
        multiple
        {...rest}
      />
      <label 
        htmlFor={id}
      >
        Choose a file
      </label>
    </>
  )
}

export const Tel = (props) => {
  const {
    className = styles.Tel,
    type = 'tel',
    id,
    name,
    key,
    ...rest
  } = props

  return (
    <input
      className={className}
      type={type}
      id={id}
      name={id}
      key={id}
      {...rest}
    />
  )
}

export const Text = (props) => {
  const {
    className = styles.Text,
    type = 'text',
    id,
    name,
    key,
    ...rest
  } = props

  return (
    <input
      className={className}
      type={type}
      id={id}
      name={id}
      key={id}
      {...rest}
    />
  )
}

export const Spacer = (props) => {
  const {
    className = styles.Spacer,
    ...rest
  } = props

  return (
    <div
      className={className}
      {...rest}
    />
  )
}

export const Textarea = (props) => {
  const {
    className = styles.Textarea,
    id,
    name,
    key,
    ...rest
  } = props

  return (
    <textarea
      className={className}
      id={id}
      name={id}
      key={id}
      {...rest}
    />
  )
}