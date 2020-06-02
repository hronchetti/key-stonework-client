import React from 'react';

const UploadedFile = ({ filename, removeFn }) => (
  <section className="uploadedFile">
    <span>{filename}</span>
    <button onClick={removeFn}></button>
  </section>
);

export default UploadedFile;
