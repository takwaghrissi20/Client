import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = () => {
    
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    const registration_id = localStorage.getItem("registration_id");
   
    try {
      const { data } = await axios.post("http://localhost:5000/todos", {
        description,
        registration_id,
      });
      console.log("new todo", data);
      e.preventDefault();
    //  (setTodos)=>setTodos((prev) => [...prev, data]);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1
        className="text-center mt-5"
        style={{ margin: "80px", fontFamily: "fantasy", color: "#4C42CB" }}
      >
        {" "}
        Creating a ListTodo is the best way to organize your day!{" "}
      </h1>

      <body>
        <form className="d-flex mr-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control mr-2 btn btn-outline"
            value={description}
            placeholder="donner votre description"
            style={{ cursor: "text", borderRadius: "10px", border: "2px" }}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button className="  btn btn-outline-primary "> ADD</button>
        </form>
      </body>
    </Fragment>
  );
};

export default InputTodo;
