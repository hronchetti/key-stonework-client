import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

export const Select = ({ name, optionalText, label, options }) => {
  const [field, meta] = useField(name)
  return (
    <div className="selectWrapperContainer">
      <label htmlFor={name}>
        {label}
        {optionalText !== '' ? (
          <span className="labelOptional">{' ' + optionalText}</span>
        ) : (
          ''
        )}
      </label>
      <section className="selectWrapper">
        <select name={name} id={name} {...field}>
          <option defaultValue disabled value="">
            Please select...
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        <span />
      </section>
      <span className="errorText">{meta.touched ? meta.error : ''}</span>
    </div>
  )
}

Select.defaultProps = {
  optionalText: '',
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  optionalText: PropTypes.string,
}
