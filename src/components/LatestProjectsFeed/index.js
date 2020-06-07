import React, { useState, useEffect } from 'react'
import LatestProjectItem from '../LatestProjectItem'
import axios from 'axios'
import Toast from '../Toast'
import { apiURL } from '../../apiUrl'
import TrackVisibility from 'react-on-screen'

const LatestProjectsFeed = () => {
  const [projects, setProjects] = useState([])
  const [toast, setToast] = useState({
    type: true,
    message: '',
    visible: false,
  })

  useEffect(() => {
    axios({
      method: 'get',
      url: `${apiURL}latestProjects.json`,
    })
      .then(response => {
        setProjects(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <TrackVisibility partialVisibility once className="product__features">
      {({ isVisible }) => (
        <div className={`inner animateFadeUp${isVisible && ' active'}`}>
          {projects.length > 0 ? (
            projects.map(project => (
              <LatestProjectItem
                key={project.projectId}
                projectName={project.projectName}
                projectDate={project.projectDate}
                products={project.products}
                productPhotos={project.productPhotos}
              />
            ))
          ) : (
            <span className="placeholder">Latest projects coming soon</span>
          )}
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
          />{' '}
        </div>
      )}
    </TrackVisibility>
  )
}

export default LatestProjectsFeed
