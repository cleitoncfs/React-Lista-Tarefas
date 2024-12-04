import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";

const Form = ({ novaTarefa, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} action="#" className="form">
    <input
      onChange={handleChange}
      type="text"
      value={novaTarefa}
      className="form-input"
    />
    <button type="submit" className="button-plus">
      <FaPlus />
    </button>
  </form>
);

Form.propTypes = {
  novaTarefa: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
