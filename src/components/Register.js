import React, { useState } from "react";
import Arrowleft from "./Svgicons/Arrowleft";
import "./Registerstyle.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [first_name, setfirstname] = useState("");
  const [last_name, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpwd, setconfirmpwd] = useState("");
  const navigate = useNavigate()

  const onSubmitForm = async (e) => {
    e.preventDefault(); 
    console.log('registering')

    if (password !== confirmpwd) {
      toast.error("unmatched password",{position : "top-center"});
    } else if (password.length < 8) {
      toast.error("Password too weak!",{position : "top-center"});
    } else {
      try {
        const {data} = await axios.post("http://localhost:5000/registrations",{ first_name, last_name, email, password });
        toast.success("You've signed up successfully. Proceed to Login",{position : "top-center"});
        //navigate("/");
        
      } catch (err) {
        toast.error("an error occured!",{position : "top-center"});
        console.error(err.message);
      }
    }
  };

  return (
    <>
    <ToastContainer />
      <div
        style={{
          position: "fixed",
          paddingTop: "400px",
          paddingLeft: "130px",
          color: "gray",
          fontStyle: "oblique",
          margin: "2%",
        }}
      >
        <p>&#10003;No Coding Needed,Easy Set up</p>
        <p>&#10003;working on your scheduling</p>
      </div>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"></img>

      <div
        className="register_page"
        style={{ position: "relative", left: "250px" }}
      >
        <div className="registration_header">
          <h1> Registration Form</h1>
        </div>
        <form onSubmit={onSubmitForm}>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="registerName"
              class="form-control"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setfirstname(e.target.value)}
              required
            />
          </div>
          <div class="form-outline mb-4">
            <input
              type="text"
              id="registerUsername"
              class="form-control"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setlastname(e.target.value)}
              required
            />
          </div>
          <div class="input-group mb-4">
            <input
              type="email"
              id="registerEmail"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              name="password"
              id="registerPassword"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="form-outline mb-4">
            <input
              name="confirmpwd"
              type="password"
              id="registerRepeatPassword"
              class="form-control"
              placeholder="Confirm Password"
              value={confirmpwd}
              onChange={(e) => setconfirmpwd(e.target.value)}
              required
            />
          </div>
          <div class="mr-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="registerCheck"
              checked
              aria-describedby="registerCheckHelpText"
            />
            <label class="form-check-label" for="registerCheck">
              I have read and agree to the terms
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="btn btn-light btn-lg mr-10"
              style={{
                margin: "10%",
                padding: "10px",
                fontFamily: "serif",
                width: "150px",
                left: "100px",
                position: "relative",
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div></div>
      <Arrowleft />
    </>
  );
};

export default Register;
