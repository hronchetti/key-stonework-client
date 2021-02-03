import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

export const Input = ({ name, label, type, optionalText }) => {
  const [field, meta] = useField(name)

  return (
    <div
      className={`inputWrapper${
        meta.touched && meta.error ? ' inputWrapper--error' : ''
      }`}
    >
      <div className="input">
        <label htmlFor={name}>
          {label}
          {optionalText !== '' ? (
            <span className="labelOptional">{' ' + optionalText}</span>
          ) : (
            ''
          )}
        </label>
        <input name={name} {...field} id={name} type={type} />
        <span
          className={`selector${meta.touched && meta.error ? ' error' : ''}`}
        ></span>
      </div>
      <span className="errorText">{meta.touched ? meta.error : ''}</span>
    </div>
  )
}

Input.defaultProps = {
  optionalText: '',
  type: 'text',
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  optionalText: PropTypes.string,
  type: PropTypes.string,
}
