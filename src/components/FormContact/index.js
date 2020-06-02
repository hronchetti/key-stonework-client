import React from 'react'
import { Formik, Field, Form } from 'formik'
import Toast from '../Toast'
import axios from 'axios'
import { apiURL } from '../../apiUrl'

export default class FormContact extends React.Component {
  state = {
    toastMessage: 'Placeholder',
    toastType: true,
    toastVisible: false,
  }

  handleToastClick = () => {
    this.setState({
      toastVisible: false,
    })
  }

  render() {
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
          }}
          onSubmit={(values, { resetForm }) => {
            axios({
              method: 'post',
              url: `${apiURL}sendEmail`,
              data: values,
              config: { headers: { 'Content-Type': 'application/json' } },
            })
              .then(response => {
                if (response.data.message === 'Success') {
                  this.setState({
                    toastVisible: true,
                    toastMessage: 'Project details sent',
                    toastType: true,
                  })
                  resetForm()
                } else if (response.data.message === 'User error') {
                  this.setState({
                    toastVisible: true,
                    toastMessage: 'Name, email, phone, or message missing',
                    toastType: false,
                  })
                } else {
                  this.setState({
                    toastVisible: true,
                    toastMessage: 'Failed to send email',
                    toastType: false,
                  })
                }
              })
              .catch(error => {
                this.setState({
                  toastVisible: true,
                  toastMessage: 'Network error, contact site administrator',
                  toastType: false,
                })
                console.log(error)
              })
          }}
        >
          {({ values }) => (
            <Form className="formContact" autoComplete="off">
              <div className="input">
                <label>Your name</label>
                <Field type="text" name="name" required />
              </div>
              <div className="input">
                <label>
                  Phone <span className="labelOptional">(UK only)</span>
                </label>
                <Field
                  type="tel"
                  name="phone"
                  minLength="8"
                  maxLength="15"
                  required
                />
              </div>
              <div className="input">
                <label>Email</label>
                <Field type="email" name="email" required />
              </div>
              <div className="checkboxGroup">
                <label>
                  Related products
                  <span className="labelOptional"> (Optional)</span>
                </label>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="architecturalPieces"
                    checked={values.architecturalPieces ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Architectural pieces</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="ballsCollardBases"
                    checked={values.ballsCollardBases ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Balls &amp; collard bases</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="balustrading"
                    checked={values.balustrading ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Balustrading</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="corbels"
                    checked={values.corbels ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Corbels</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="keystones"
                    checked={values.keystones ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Keystones</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="pierCaps"
                    checked={values.pierCaps ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Pier caps</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="porticos"
                    checked={values.porticos ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Porticos</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="quions"
                    checked={values.quions ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Quions</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="stringsPlinths"
                    checked={values.stringsPlinths ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Strings &amp; plinths</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="wallCoping"
                    checked={values.wallCoping ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Wall Coping</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="windowCillsHeads"
                    checked={values.windowCillsHeads ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Window cills &amp; heads</label>
                </span>
                <span className="checkbox">
                  <Field
                    type="checkbox"
                    name="windowSurrounds"
                    checked={values.windowSurrounds ? 'checked' : ''}
                  />
                  <span className="checkmark" />
                  <label>Window surrounds</label>
                </span>
              </div>
              <div className="selectWrapperContainer">
                <label>
                  Stone colour
                  <span className="labelOptional"> (Optional)</span>
                </label>
                <section className="selectWrapper">
                  <Field component="select" name="stoneColour">
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
                <label>Message</label>
                <Field component="textarea" name="message" rows="4" required />
                <button className="button" type="submit">
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <Toast
          handler={this.handleToastClick}
          type={this.state.toastType}
          message={this.state.toastMessage}
          visible={this.state.toastVisible}
        />
      </React.Fragment>
    )
  }
}
