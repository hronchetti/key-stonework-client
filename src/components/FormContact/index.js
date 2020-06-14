import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import qs from 'qs'

import { Input, Select, TextArea, Checkbox } from '../Form'
import Toast from '../Toast'

import { phoneRegex } from '../../constants'

const FormContact = () => {
  const [toast, setToast] = useState({
    type: true,
    message: '',
    visible: false,
  })

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(values),
      url: '/',
    }
    try {
      await axios(options)
      // Success
      setToast({
        type: true,
        visible: true,
        message: "Message sent, we'll be in contact soon!",
      })
      resetForm({})
    } catch (e) {
      // Failed
      setToast({
        type: false,
        visible: true,
        message: 'Could not send message, please try again',
      })
    }
    setSubmitting(false)
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          architecturalStone: false,
          architecturalPieces: false,
          ballsCollardBases: false,
          balustrading: false,
          corbels: false,
          keystones: false,
          pierCaps: false,
          porticos: false,
          quions: false,
          stringsPlinths: false,
          wallCoping: false,
          windowCillsHeads: false,
          windowSurrounds: false,
          stoneColour: '',
          message: '',
          'bot-field': '',
          'form-name': 'Tell us about your project',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Required'),
          phone: Yup.string()
            .matches(phoneRegex, 'Must be a valid phone number')
            .required('Required'),
          email: Yup.string()
            .email('Must be a valid email address')
            .required('Required'),
          architecturalStone: Yup.boolean(),
          architecturalPieces: Yup.boolean(),
          ballsCollardBases: Yup.boolean(),
          balustrading: Yup.boolean(),
          corbels: Yup.boolean(),
          keystones: Yup.boolean(),
          pierCaps: Yup.boolean(),
          porticos: Yup.boolean(),
          quions: Yup.boolean(),
          stringsPlinths: Yup.boolean(),
          wallCoping: Yup.boolean(),
          windowCillsHeads: Yup.boolean(),
          windowSurrounds: Yup.boolean(),
          stoneColour: Yup.string(),
          message: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form
            className="formContact"
            autoComplete="off"
            method="post"
            name="Tell us about your project"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <Field type="hidden" name="bot-field" />
            <Field type="hidden" name="form-name" />
            <Input name="name" label="Your name" />
            <Input name="phone" label="Phone" optionalText="(UK only)" />
            <Input name="email" label="Email" />
            <div className="checkboxGroup">
              <span className="label">
                Related products
                <span className="labelOptional"> (Optional)</span>
              </span>
              <Checkbox
                name="architecturalPieces"
                label="Architectural pieces"
              />
              <Checkbox
                name="ballsCollardBases"
                label="Balls &amp; collard bases"
              />
              <Checkbox name="balustrading" label="Balustrading" />
              <Checkbox name="corbels" label="Corbels" />
              <Checkbox name="keystones" label="Keystones" />
              <Checkbox name="pierCaps" label="Pier caps" />
              <Checkbox name="porticos" label="Porticos" />
              <Checkbox name="quions" label="Quions" />
              <Checkbox name="stringsPlinths" label="Strings &amp; plinths" />
              <Checkbox name="wallCoping" label="Wall Coping" />
              <Checkbox
                name="windowCillsHeads"
                label="Window cills &amp; heads"
              />
              <Checkbox name="windowSurrounds" label="Window surrounds" />
            </div>
            <Select
              label="Stone colour"
              name="stoneColour"
              optionalText="(Optional)"
              options={[
                { id: 1, value: 'Bath' },
                { id: 2, value: 'Portland' },
              ]}
            />
            <div>
              <TextArea name="message" label="Message" />
              <button className="button" type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Toast
        handler={() =>
          setToast((toast) => ({
            ...toast,
            visible: false,
          }))
        }
        type={toast.type}
        message={toast.message}
        visible={toast.visible}
      />
    </React.Fragment>
  )
}

export default FormContact
