import React from 'react'
import ImageUploading from 'react-images-uploading'
import PropTypes from 'prop-types'

export const PhotoUploader = ({ photos, updatePhotos }) => {
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    updatePhotos(imageList)
  }

  return (
    <div className="form-element-full-width fileUploader-wrapper">
      <ImageUploading
        multiple
        value={photos}
        onChange={onChange}
        maxNumber={5}
        dataURLKey="data_url"
        acceptType={['jpg', 'png']}
        maxFileSize={5242880} // 5MB
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="fileUploader">
            <div className="fileUploader-header">
              <span className="icon-upload"></span>
              <p className="fileUploader-helper-text">
                Max file size: 5mb, accepted: jpg, png
              </p>
              <button
                className="button-primary green button-small  fileUploader-button"
                type="button"
                style={isDragging ? { color: 'red' } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Choose photos
              </button>
            </div>
            <div className="fileUploader-photos">
              {imageList.map((image, index) => (
                <div key={index} className="fileUploader-photo">
                  <img src={image.data_url} alt="" width="112" />
                  <div className="">
                    <button
                      className="fileUploader-photo-remove-button"
                      onClick={() => onImageRemove(index)}
                      type="button"
                    >
                      <span className="hidden">Remove</span>
                      <span className="icon-cross"></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
      <span className="form-error-text"></span>
    </div>
  )
}

PhotoUploader.propTypes = {
  photos: PropTypes.array.isRequired,
  updatePhotos: PropTypes.func.isRequired,
}
