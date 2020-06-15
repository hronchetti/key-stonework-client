import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import uuidv1 from 'uuid/v1'
import axios from 'axios'
import Moment from 'moment'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import Logo from '../../assets/img/Key-Stonework-logo-x32.svg'
import LatestProjectItem from '../LatestProjectItem'
import Button from '../Button'
import UploadedFile from '../UploadedFile'
import Toast from '../Toast'
import { AdminLogin } from './AdminLogin'
import { apiURL } from '../../apiUrl'
import { Input, Checkbox } from '../Form'
import { dateRegex } from '../../constants'

const ProjectBuilder = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [productPhotos, setProductPhotos] = useState([])

  const [toast, setToast] = useState({
    type: true,
    message: '',
    visible: false,
  })

  const fileInputButton = useRef()
  const fileInputTrigger = useRef()

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn')) {
      setLoggedIn(true)
    }
  }, [])

  const openFileInput = (e) => {
    if (
      e.keyCode === 13 &&
      document.activeElement === fileInputTrigger.current
    ) {
      fileInputButton.current.click()
    }
  }

  const addPhotoToList = (e) => {
    e.persist()
    const formData = new FormData()

    Array.from(e.target.files).forEach((photo) => {
      formData.append('photos', photo, photo.name)
    })

    axios({
      method: 'post',
      url: `${apiURL}savePhotos`,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then((response) => {
        if (response.data.message === 'Success') {
          response.data.files.map((file) =>
            setProductPhotos([
              ...productPhotos,
              {
                nameClean: file.originalname,
                path: apiURL + file.path,
                name: file.filename,
              },
            ])
          )
        } else {
          setToast((toast) => ({
            ...toast,
            visible: true,
            message: response.data.message,
            type: false,
          }))
        }
      })
      .catch((error) => {
        console.log(error)
        setToast((toast) => ({
          ...toast,
          visible: true,
          message: 'Network error, contact site administrator',
          type: false,
        }))
      })
  }

  const removePhotoFromList = (photo, index) => (e) => {
    e.preventDefault()
    const photoToRemove = photo.name
    axios({
      method: 'post',
      url: `${apiURL}removePhoto`,
      data: { photo: photoToRemove },
      config: { headers: { 'Content-Type': 'application/json' } },
    })
      .then((response) => {
        if (response.data.message === 'Success') {
          setProductPhotos((productPhotos) =>
            productPhotos.filter((removedPhoto) => removedPhoto !== photo)
          )
        } else {
          setToast((toast) => ({
            ...toast,
            visible: true,
            message: 'Error removing file',
            type: false,
          }))
        }
      })
      .catch((error) => {
        setToast((toast) => ({
          ...toast,
          visible: true,
          message: 'Network error, contact site administrator',
          type: false,
        }))
        console.log(error)
      })
  }

  const saveNewProject = (values, { setSubmitting, resetForm }) => {
    if (productPhotos.length > 0) {
      values.productPhotos = productPhotos
      axios({
        method: 'post',
        url: `${apiURL}saveProject`,
        data: values,
        config: { headers: { 'Content-Type': 'application/json' } },
      })
        .then((response) => {
          if (response.data.message === 'Success') {
            setToast((toast) => ({
              ...toast,
              visible: true,
              message: 'New project add to latest projects page',
              type: true,
            }))
            resetForm({})
            setSubmitting(false)
            setProductPhotos([])
          } else {
            setToast((toast) => ({
              ...toast,
              visible: true,
              message: response.data.message,
              type: false,
            }))
          }
        })
        .catch((error) => {
          setToast((toast) => ({
            ...toast,
            visible: true,
            message: 'Network error, contact site administrator',
            type: false,
          }))
          console.log(error)
        })
    } else {
      setToast((toast) => ({
        ...toast,
        visible: true,
        message: 'No project photos added',
        type: false,
      }))
    }
  }

  const logout = () => {
    sessionStorage.setItem('loggedIn', false)
    setLoggedIn(false)
  }

  return (
    <React.Fragment>
      <AdminLogin
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToast={setToast}
      />
      {loggedIn && (
        <>
          <nav className="navPlain">
            <Link to="/" className="logo">
              <img className="logoIcon" src={Logo} alt="Key Stonework Logo" />
              <span className="logoText">New project</span>
            </Link>
            <div className="logoutButtonWrapper">
              <button className="logoutButton" onClick={logout}>
                Log out
              </button>
            </div>
          </nav>
          <main className="projectBuilder">
            <section className="wrapper">
              <Formik
                initialValues={{
                  projectID: uuidv1(),
                  projectName: '',
                  projectDate: Moment(new Date()).format('DD/MM/YYYY'),
                  products: {
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
                  },
                }}
                validationSchema={Yup.object().shape({
                  projectID: Yup.string(),
                  projectName: Yup.string().required('Required'),
                  projectDate: Yup.string()
                    .matches(dateRegex, 'Must be a valid date')
                    .required('Required'),
                  products: Yup.object().shape({
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
                  }),
                })}
                onSubmit={saveNewProject}
              >
                {({ values }) => (
                  <>
                    <Form className="form">
                      <Field type="hidden" name="projectID" />
                      <Input name="projectName" label="Project name" />
                      <Input name="projectDate" label="Date completed" />
                      <div className="input">
                        <label htmlFor="photos">
                          Photos <span className="labelOptional">(Max 4)</span>
                        </label>
                        {productPhotos.length > 0 &&
                          productPhotos.map((photo, index) => (
                            <UploadedFile
                              key={photo.path}
                              filename={photo.nameClean}
                              removeFn={removePhotoFromList(photo, index)}
                            />
                          ))}
                        {productPhotos.length < 4 && (
                          <section className="button--file">
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                fileInputButton.current.click()
                              }}
                              onMouseUp={(e) => {
                                e.preventDefault()
                                openFileInput(e)
                              }}
                              className="button button--secondary"
                              ref={fileInputTrigger}
                            >
                              Choose photos
                            </button>
                            <input // eslint-disable-line
                              id="photos"
                              onChange={addPhotoToList}
                              type="file"
                              ref={fileInputButton}
                              accept="image/jpeg"
                              name="photos"
                              multiple
                            />
                          </section>
                        )}
                      </div>
                      <div className="checkboxGroup">
                        <span className="label">
                          Related products
                          <span className="labelOptional"> (Optional)</span>
                        </span>
                        <Checkbox
                          name="products.architecturalPieces"
                          label="Architectural pieces"
                        />
                        <Checkbox
                          name="products.ballsCollardBases"
                          label="Balls &amp; collard bases"
                        />
                        <Checkbox
                          name="products.balustrading"
                          label="Balustrading"
                        />
                        <Checkbox name="products.corbels" label="Corbels" />
                        <Checkbox name="products.keystones" label="Keystones" />
                        <Checkbox name="products.pierCaps" label="Pier caps" />
                        <Checkbox name="products.porticos" label="Porticos" />
                        <Checkbox name="products.quions" label="Quions" />
                        <Checkbox
                          name="products.stringsPlinths"
                          label="Strings &amp; plinths"
                        />
                        <Checkbox
                          name="products.wallCoping"
                          label="Wall Coping"
                        />
                        <Checkbox
                          name="products.windowCillsHeads"
                          label="Window cills &amp; heads"
                        />
                        <Checkbox
                          name="products.windowSurrounds"
                          label="Window surrounds"
                        />
                      </div>
                      <Button
                        buttonText="Add to latest projects page"
                        type="submit"
                      />
                    </Form>
                    <section className="product__features">
                      <LatestProjectItem
                        projectName={
                          values.projectName
                            ? values.projectName
                            : 'Project name'
                        }
                        projectDate={values.projectDate}
                        productPhotos={productPhotos}
                        products={values.products ? values.products : ''}
                      />
                    </section>
                  </>
                )}
              </Formik>
            </section>
          </main>
        </>
      )}
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

export default ProjectBuilder
