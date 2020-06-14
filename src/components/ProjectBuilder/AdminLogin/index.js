import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { apiURL } from '../../../apiUrl'
import { Input } from '../../Form'
import Button from '../../Button'
import Logo from '../../../assets/img/Key-Stonework-logo-x32.svg'

export const AdminLogin = ({ loggedIn, setLoggedIn, setToast }) => {
  const onSubmit = (values, { resetForm }) => {
    axios({
      method: 'post',
      url: `${apiURL}login`,
      data: values,
      config: { headers: { 'Content-Type': 'application/json' } },
    })
      .then((response) => {
        if (response.data.message === 'Success') {
          sessionStorage.setItem('loggedIn', true)
          setLoggedIn(true)
          setToast((toast) => ({
            ...toast,
            visible: true,
            message: 'Signed in as Gary',
            type: true,
          }))
          resetForm()
        } else {
          setToast((toast) => ({
            ...toast,
            visible: true,
            message: 'User or password incorrect',
            type: false,
          }))
        }
      })
      .catch(() => {
        setToast((toast) => ({
          ...toast,
          visible: true,
          message: 'Network error, contact site administrator',
          type: false,
        }))
      })
  }
  return (
    <section className={`login ${loggedIn ? '' : 'active'}`}>
      <Formik
        initialValues={{ user: '', password: '' }}
        validationSchema={Yup.object().shape({
          user: Yup.string()
            .email('Must be a valid email address')
            .required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={onSubmit}
      >
        {() => (
          <Form autoComplete="off">
            <div className="logo">
              <img className="logoIcon" src={Logo} alt="Key Stonework Logo" />
              <span className="logoText">Key Stonework Ltd</span>
            </div>
            <Input name="user" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button buttonText="Login" type="submit" />
          </Form>
        )}
      </Formik>
    </section>
  )
}

AdminLogin.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  setToast: PropTypes.func.isRequired,
}
