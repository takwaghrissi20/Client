import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditTodo from "./EditTodo";
import InputTodo from "./InputTodo";
import imag from "./images/imag.png";
import "./List.css";
import Logout from "./Svgicons/Logout";
import Trash from "./Svgicons/Trash";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`); //backticks ``
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    const registration_id = localStorage.getItem("registration_id");
    try {
      const { data } = await axios.get(`http://localhost:5000/todos`, {
        headers: {
          Authorization: registration_id,
        },
      });
      
      setTodos(data.sort((a, b) => Number(a.completed) - Number(b.completed)));
      
    } catch (err) {
      console.error(err.message);
    }

    // SEARCH : sort function
  };

  const markChecked = async (todo) => {
    try {
      await axios.put(`http://localhost:5000/todos/${todo.todo_id}`, {
        completed: String(!todo.completed),
      });
      setTodos((prev) =>
        prev.map((t) =>
          t.todo_id === todo.todo_id ? { ...t, completed: !t.completed } : t
        )
      );

      if (!todo.completed) {
        toast.success(" GOOD JOB !", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("error", error);
      toast.error("an error occured", { position: "top-center" });
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div>
        <ToastContainer />
        <div className="container">
          <button
            className="btn mt-5 "
            class="btn "
            onClick={() => navigate("/")}
            style={{
              position: "relative",
              padding: "12px",
              left: "1150px",
              color: "blue",
              width: "100px",
              bottom:'150px',
              borderRadius:"50%"
            }}
          >
            <Logout /> Logout
          </button>
          <div>
            <img
              src={imag}
              style={{
                width: "13%",
                position: "fixed",
                top: "1px",
                padding: "5px",
                left: "12px",
              }}
            />
            <Fragment>
              <InputTodo setTodos={setTodos} />
              <table className="table mt-5 text-center">
                <thead>
                  <tr style={{ backgroundColor: "#EBF5F8" }}>
                    <th>TODO DESCRIPTION</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo) => (
                    <tr key={todo.todo_id}>
                      <td>
                        {" "}
                        <div class="d-flex align-items-center ">
                          <input
                            type="checkbox"
                            id="my check"
                            checked={todo.completed}
                            style={{
                              cursor: "pointer",
                              width: "150px",
                              height: "18px",
                              accentColor: "#14852B",
                            }}
                            onChange={(e) => {
                              markChecked(todo);
                            }}
                          ></input>
                          {todo.description}
                        </div>
                      </td>

                      <td>
                        <EditTodo todo={todo} setTodos={setTodos} />
                      </td>

                      <td>
                        {" "}
                        <span
                          onClick={() => deleteTodo(todo.todo_id)}
                          style={{ cursor: "pointer", width: "px" }}
                        >
                          {" "}
                          <Trash />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fragment>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTodos;
