import React from 'react'

const UploadedFile = ({ filename, removeFn }) => (
  <li className="uploadedFile">
    <span>{filename}</span>
    <button onClick={removeFn} aria-label="Remove file" type="button" />
  </li>
)

export default UploadedFile
