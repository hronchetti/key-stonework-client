import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import uuidv1 from 'uuid/v1'
import axios from 'axios'
import Moment from 'moment'

import Logo from '../../assets/img/Key-Stonework-logo-x32.svg'
import LatestProjectItem from '../LatestProjectItem'
import Button from '../Button'
import UploadedFile from '../UploadedFile'
import Toast from '../Toast'
import { AdminLogin } from './AdminLogin'
import { apiURL } from '../../apiUrl'

const ProjectBuilder = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [project, updateProjectDetails] = useState({
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
    productPhotos: [],
  })

  const [toast, setToast] = useState({
    type: true,
    message: '',
    visible: false,
  })

  const fileInputButton = useRef()
  const fileInputTrigger = useRef()

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
            updateProjectDetails((project) => ({
              ...project,
              productPhotos: [
                ...project.productPhotos,
                {
                  nameClean: file.originalname,
                  path: apiURL + file.path,
                  name: file.filename,
                },
              ],
            }))
          )
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
          updateProjectDetails((project) => {
            const start = project.productPhotos.slice(0, index)
            const end = project.productPhotos.slice(index + 1)
            const newAreas = [...start, ...end]
            return { ...project, productPhotos: newAreas }
          })
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

  const handleInputChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    target.type === 'checkbox'
      ? updateProjectDetails((project) => ({
          ...project,
          products: {
            ...project.products,
            [name]: value,
          },
        }))
      : updateProjectDetails((project) => ({
          ...project,
          [name]: value,
        }))
  }

  const saveNewProject = (e) => {
    e.preventDefault()

    if (project.productPhotos.length > 0 && project.projectName !== '') {
      axios({
        method: 'post',
        url: `${apiURL}saveProject`,
        data: project,
        config: { headers: { 'Content-Type': 'application/json' } },
      })
        .then((response) => {
          setToast((toast) => ({
            ...toast,
            visible: true,
            message: 'New project add to latest projects page',
            type: true,
          }))
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
        message: 'No project name or photos',
        type: false,
      }))
    }
  }

  const logout = () => {
    sessionStorage.setItem('loggedIn', false)
    setLoggedIn(false)
  }

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn')) {
      setLoggedIn(true)
    }
  }, [])

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
              <form className="form" encType="multipart/form-data">
                <div className="input">
                  <label htmlFor="projectName">Project name</label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    autoComplete="off"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input">
                  <label htmlFor="projectDate">Date completed</label>
                  <input
                    type="date"
                    name="projectDate"
                    id="projectDate"
                    autoComplete="off"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input">
                  <label htmlFor="photos">
                    Photos <span className="labelOptional">(Max 4)</span>
                  </label>
                  {project.productPhotos.length > 0 &&
                    project.productPhotos.map((photo, index) => (
                      <UploadedFile
                        key={photo.path}
                        filename={photo.nameClean}
                        removeFn={removePhotoFromList(photo, index)}
                      />
                    ))}
                  {project.productPhotos.length < 4 && (
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
                      <input
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
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="architecturalPieces"
                      id="architecturalPieces"
                      checked={project.products.architecturalPieces}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="architecturalPieces">
                      Architectural pieces
                    </label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="ballsCollardBases"
                      id="ballsCollardBases"
                      checked={project.products.ballsCollardBases}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="ballsCollardBases">
                      Balls &amp; collard bases
                    </label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="balustrading"
                      id="balustrading"
                      checked={project.products.balustrading}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="balustrading">Balustrading</label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="corbels"
                      id="corbels"
                      checked={project.products.corbels}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="corbels">Corbels</label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="keystones"
                      id="keystones"
                      checked={project.products.keystones}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="keystones">Keystones</label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="pierCaps"
                      id="pierCaps"
                      checked={project.products.pierCaps}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="pierCaps">Pier caps</label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="porticos"
                      id="porticos"
                      checked={project.products.porticos}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="porticos">Porticos</label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="quions"
                      id="quions"
                      checked={project.products.quions}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="quions">Quions</label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="stringsPlinths"
                      id="stringsPlinths"
                      checked={project.products.stringsPlinths}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="stringsPlinths">
                      Strings &amp; plinths
                    </label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="wallCoping"
                      id="wallCoping"
                      checked={project.products.wallCoping}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="wallCoping">Wall Coping</label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="windowCillsHeads"
                      id="windowCillsHeads"
                      checked={project.products.windowCillsHeads}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="windowCillsHeads">
                      Window cills &amp; heads
                    </label>
                  </span>
                  <span className="checkbox">
                    <input
                      type="checkbox"
                      name="windowSurrounds"
                      id="windowSurrounds"
                      checked={project.products.windowSurrounds}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark" />
                    <label htmlFor="windowSurrounds">Window surrounds</label>
                  </span>
                </div>
                <Button
                  buttonText="Add to latest projects page"
                  type="submit"
                  onClick={saveNewProject}
                />
              </form>
              <section className="product__features">
                <LatestProjectItem
                  projectName={project.projectName}
                  projectDate={project.projectDate}
                  productPhotos={project.productPhotos}
                  products={project.products}
                />
              </section>
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
