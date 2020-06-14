import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

export const TextArea = ({ name, label, rows, optionalText }) => {
  const [field, meta] = useField(name)

  return (
    <div className="textareaWrapper">
      <div className="textarea">
        <label htmlFor={name}>
          {label}
          {optionalText !== '' ? (
            <span className="labelOptional">{optionalText}</span>
          ) : (
            ''
          )}
        </label>
        <textarea name={name} {...field} id={name} rows={rows} />
        <span
          className={`selector${meta.touched && meta.error ? ' error' : ''}`}
        ></span>
      </div>
      <span className="errorText">{meta.touched ? meta.error : ''}</span>
    </div>
  )
}

TextArea.defaultProps = {
  optionalText: '',
  rows: 4,
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optionalText: PropTypes.string,
  rows: PropTypes.number,
}
