import React from 'react'

const UploadedFile = ({ filename, removeFn }) => (
  <section className="uploadedFile">
    <span>{filename}</span>
    <button onClick={removeFn} aria-label="Remove photo"></button>
  </section>
)

export default UploadedFile
