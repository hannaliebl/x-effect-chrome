import React from 'react';
import './FormError.css';

const FormError = (props) => {
  return (
    <div className="error-container">
      {props.hasErrors && <span className="help-block">{props.errorMsg}</span>}
    </div>
  )
}

export default FormError
