import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Tarefas.css";

const Tarefas = ({ tarefas, handleEdit, handleDelete }) => (
  <ul className="tarefas">
    {tarefas.map((tarefa, index) => (
      <li key={index}>
        {tarefa}
        <span>
          <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
          <FaWindowClose
            onClick={(e) => handleDelete(e, index)}
            className="delete"
          />
        </span>
      </li>
    ))}
  </ul>
);

Tarefas.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Tarefas;
