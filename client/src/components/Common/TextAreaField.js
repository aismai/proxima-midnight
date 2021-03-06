import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaField = ({ name, placehodler, value, info, error, onChange }) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placehodler}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  placehodler: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextAreaField;
