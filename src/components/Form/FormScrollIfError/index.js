import React from 'react'
import PropTypes from 'prop-types'
import { Form, useFormikContext } from 'formik'

const FormScrollIfError = (props) => {
  const { isValidating, isValid } = useFormikContext()

  React.useEffect(() => {
    if (!isValidating && !isValid) {
      const element = document.querySelector('.inputWrapper--error')

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })
      }
    }
  }, [isValidating, isValid])

  return <Form {...props}>{props.children}</Form>
}

FormScrollIfError.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormScrollIfError
