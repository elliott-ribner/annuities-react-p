import React from 'react';
import propTypes from 'prop-types';

const FormInputWrapper = ({
  name, previous, next, switchCurrent, children, current
}) => {
  if (name === current) {
    return (
      <div>
        {children}
        <button type="button" onClick={e => switchCurrent(e, next)}>
          Next
        </button>
        {previous && (
          <button type="button" onClick={e => switchCurrent(e, previous)}>
            Previous
          </button>
        )}
      </div>
    );
  }
  return null;
};
FormInputWrapper.defaultProps = {
  previous: null,
  next: null
};

FormInputWrapper.propTypes = {
  name: propTypes.string.isRequired,
  previous: propTypes.oneOfType([propTypes.number, propTypes.string]),
  next: propTypes.oneOfType([propTypes.number, propTypes.string]),
  switchCurrent: propTypes.func.isRequired,
  children: propTypes.element.isRequired,
  current: propTypes.string.isRequired
};
export default FormInputWrapper;
