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
                <label htmlFor="name">Your name</label>
                <Field type="text" name="name" id="name" required />
              </div>
              <div className="input">
                <label htmlFor="phone">
                  Phone <span className="labelOptional">(UK only)</span>
                </label>
                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  minLength="8"
                  maxLength="15"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" required />
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
                    checked={values.architecturalPieces ? 'checked' : ''}
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
                  required
                />
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
