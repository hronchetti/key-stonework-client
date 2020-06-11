import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import qs from 'qs'

import Toast from '../Toast'

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
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              'Must be a valid phone number'
            )
            .required('Required'),
          email: Yup.string()
            .email('Must be a valid email address')
            .required('Required'),
          architecturalStone: Yup.boolean(),
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
        {({ values, setFieldValue }) => (
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
            <div className="input">
              <label htmlFor="name">Your name</label>
              <Field type="text" name="name" id="name" />
            </div>
            <div className="input">
              <label htmlFor="phone">
                Phone <span className="labelOptional">(UK only)</span>
              </label>
              <Field type="tel" name="phone" id="phone" />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
            </div>
            <div className="checkboxGroup">
              <span className="label">
                Related products
                <span className="labelOptional"> (Optional)</span>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="architecturalPieces"
                  id="architecturalPieces"
                  onKeyDown={e =>
                    e.keyCode === 13 &&
                    setFieldValue(
                      values.architecturalPieces,
                      !values.architecturalPieces
                    )
                  }
                  checked={values.architecturalPieces}
                />
                <span className="checkmark" />
                <label htmlFor="architecturalPieces">
                  Architectural pieces
                </label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="ballsCollardBases"
                  id="ballsCollardBases"
                  checked={values.ballsCollardBases ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="ballsCollardBases">
                  Balls &amp; collard bases
                </label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="balustrading"
                  id="balustrading"
                  checked={values.balustrading ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="balustrading">Balustrading</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="corbels"
                  id="corbels"
                  checked={values.corbels ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="corbels">Corbels</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="keystones"
                  id="keystones"
                  checked={values.keystones ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="keystones">Keystones</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="pierCaps"
                  id="pierCaps"
                  checked={values.pierCaps ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="pierCaps">Pier caps</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="porticos"
                  id="porticos"
                  checked={values.porticos ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="porticos">Porticos</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="quions"
                  id="quions"
                  checked={values.quions ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="quions">Quions</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="stringsPlinths"
                  id="stringsPlinths"
                  checked={values.stringsPlinths ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="stringsPlinths">Strings &amp; plinths</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="wallCoping"
                  id="wallCoping"
                  checked={values.wallCoping ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="wallCoping">Wall Coping</label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="windowCillsHeads"
                  id="windowCillsHeads"
                  checked={values.windowCillsHeads ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="windowCillsHeads">
                  Window cills &amp; heads
                </label>
              </span>
              <span className="checkbox">
                <Field
                  type="checkbox"
                  name="windowSurrounds"
                  id="windowSurrounds"
                  checked={values.windowSurrounds ? 'checked' : ''}
                />
                <span className="checkmark" />
                <label htmlFor="windowSurrounds">Window surrounds</label>
              </span>
            </div>
            <div className="selectWrapperContainer">
              <label htmlFor="stoneColour">
                Stone colour
                <span className="labelOptional"> (Optional)</span>
              </label>
              <section className="selectWrapper">
                <Field component="select" name="stoneColour" id="stoneColour">
                  <option defaultValue disabled value="">
                    Please select...
                  </option>
                  <option value="Bath">Bath</option>
                  <option value="Portland">Portland</option>
                </Field>
                <span />
              </section>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field
                component="textarea"
                name="message"
                id="message"
                rows="4"
              />
              <button className="button" type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Toast
        handler={() =>
          setToast(toast => ({
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
