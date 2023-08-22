import { React, Fragment, useState } from "react";
import Pencilicon from "./Svgicons/Pencilicon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const EditTodo = ({ todo, setTodos }) => {
  const [description, setDescription] = useState(todo.description);
  const navigate = useNavigate();
  //edit description function
  const updateDescrition = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5000/todos/modify/${todo.todo_id}`,
        { description }
      );
      setTodos(prev => prev.map(t => t.todo_id === todo.todo_id ? {...t, description} : t))
      navigate("/ListTodo"); 
    } catch (err) {
      console.error(err.message);
      toast.error("an error occured", {position : "top-center"})
    }
  };
  return (
    <Fragment>
      {" "}
      <span
        type="button"
        style={{ cursor: "pointer" }}
        // class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        <Pencilicon />
      </span>
      {/* the id must be the same*/}
      <div
        class="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content" style={{ backgroundColor: "#EBF5F8" }}>
            <div class="modal-header">
              <h4 class="modal-title">EDIT TODO !</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <span
                type="button"
                data-dismiss="modal"
                style={{ cursor: "pointer" }}
                onClick={(e) => updateDescrition(e)}
              >
                <Pencilicon />
              </span>

              <button
                type="button"
                className="close btn-btn-danger"
                aria-label="Close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
