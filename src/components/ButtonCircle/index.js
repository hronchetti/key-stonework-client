import React from 'react';
import PropTypes from 'prop-types';

ButtonCircle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function ButtonCircle(props) {
  const { onClick } = props;
  return (
    <span className='buttonCircle' onClick={onClick} aria-label='Close pop up'>
      <span className='line' />
      <span className='line' />
    </span>
  );
}
