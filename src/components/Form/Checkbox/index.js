import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

export const Checkbox = ({ name, label }) => {
  const [field, , form] = useField(name)

  const updateValue = (value) => {
    form.setValue(!value)
  }
  return (
    <span className="checkbox">
      <input
        {...field}
        type="checkbox"
        name={name}
        id={name}
        checked={field.value}
        onKeyDown={(e) => e.keyCode === 13 && updateValue(field.value)}
        onClick={() => updateValue(field.value)}
        onBlur={() => form.setTouched(true)}
      />
      <span className="checkmark" />
      <label htmlFor={name}>{label}</label>
    </span>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
