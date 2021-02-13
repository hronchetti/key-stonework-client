import React, { useState, useEffect } from 'react'
import TrackVisibility from 'react-on-screen'
import axios from 'axios'

import { apiURL } from '../../apiUrl'
import LatestProjectItem from '../LatestProjectItem'

const LatestProjectsFeed = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `${apiURL}latestProjects.json`,
        })
        setProjects(response.data)
      } catch (error) {
        console.log(error)
        setProjects([])
      }
      setLoading(false)
    }
    getProjects()
  }, [])

  return (
    <TrackVisibility partialVisibility once className="product__features">
      {({ isVisible }) => (
        <div className={`inner animateFadeUp${isVisible && ' active'}`}>
          {loading ? (
            <span className="placeholder">Loading ...</span>
          ) : projects && projects.length > 0 ? (
            projects.map((project) => (
              <LatestProjectItem
                key={project.projectId}
                projectName={project.projectName}
                projectDate={project.projectDate}
                products={project.products}
                productPhotos={project.productPhotos}
              />
            ))
          ) : (
            <span className="placeholder">Projects coming soon</span>
          )}
        </div>
      )}
    </TrackVisibility>
  )
}

export default LatestProjectsFeed
