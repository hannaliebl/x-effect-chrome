import React from "react";
import PropTypes from "prop-types";
import "./FormError.css";

const FormError = props => {
  return (
    <div className="error-container">
      {props.hasErrors && <span className="help-block">{props.errorMsg}</span>}
    </div>
  );
};

FormError.propTypes = {
  hasErrors: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired
};

export default FormError;
