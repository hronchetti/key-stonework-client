import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Modal from '../Modal'

export default class ProductOption extends Component {
  state = {
    currentImageId: 1,
    currentImageName: '',
    currentImageUrl: '',
    modalVisible: false,
    modalImage: '',
    modalTitle: '',
  }

  createButtonList = () => {
    const buttons = this.props.productOption.optionTechnicalDrawings.map(
      drawing => (
        <React.Fragment key={drawing.drawingId}>
          {drawing.drawingId === this.state.currentImageId ? (
            <Button
              additionalClasses={`button--small`}
              buttonText={drawing.technicalDrawingName}
              /* no onClick to give disabled effect */
            />
          ) : (
            <Button
              additionalClasses={`button--small button--secondary`}
              buttonText={drawing.technicalDrawingName}
              onClick={() => {
                this.handleDrawingChange(drawing)
              }}
            />
          )}
        </React.Fragment>
      )
    )
    return buttons
  }

  /* setState must be called straight away to get first image in array */
  loadInitialDrawing = () => {
    const image =
      this.props.productOption.optionTechnicalDrawings[0]
        .technicalDrawingSVG !== 'undefined'
        ? this.handleDrawingChange(
            this.props.productOption.optionTechnicalDrawings[0]
          )
        : null /* default image */
    return image
  }

  handleDrawingChange = drawingPassed => {
    this.setState({
      currentImageId: drawingPassed.drawingId,
      currentImageName: drawingPassed.technicalDrawingName,
      currentImageUrl: drawingPassed.technicalDrawingSVG,
    })
  }

  handleDrawingClick = (image, imageName) => {
    this.setState({
      modalVisible: true,
      modalImage: image,
      modalTitle: imageName,
    })
  }

  closeDrawingViewer = () => {
    this.setState({
      modalVisible: false,
      modalImage: '',
      modalTitle: '',
    })
  }

  componentDidMount() {
    this.loadInitialDrawing()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.productOption.optionTechnicalDrawings.length > 1 ? (
          /* More than 1 option technical drawing */
          <figure className="productOption__container">
            <h2>{this.props.productOption.optionName}</h2>
            <img
              className="multiAngle"
              src={
                this.state.currentImageUrl.length > 0
                  ? require(`../../assets/img/technicalDrawings/${this.state.currentImageUrl}`)
                  : null
              }
              alt={this.state.currentImageName}
              onClick={() => {
                this.handleDrawingClick(
                  this.state.currentImageUrl,
                  this.props.productOption.optionName +
                    ' - ' +
                    this.state.currentImageName
                )
              }}
              aria-label="View this image in a pop up"
            />
            <p>Drawings</p>
            {this.createButtonList()}
          </figure>
        ) : (
          /* Only 1 option technical drawing */
          <figure className="productOption__container productOption__container--singleAngle">
            <h2>{this.props.productOption.optionName}</h2>
            <img
              src={require(`../../assets/img/technicalDrawings/${this.props.productOption.optionTechnicalDrawings[0].technicalDrawingSVG}`)}
              alt={this.props.productOption.optionName}
              onClick={() => {
                this.handleDrawingClick(
                  this.props.productOption.optionTechnicalDrawings[0]
                    .technicalDrawingSVG,
                  this.props.productOption.optionName
                )
              }}
              aria-label="View this image in a pop up"
            />
          </figure>
        )}
        {this.state.modalVisible ? (
          <Modal
            image={this.state.modalImage}
            title={this.state.modalTitle}
            closeFunc={() => {
              this.closeDrawingViewer()
            }}
          />
        ) : null}
      </React.Fragment>
    )
  }
}

ProductOption.propTypes = {
  productOption: PropTypes.object.isRequired,
}
