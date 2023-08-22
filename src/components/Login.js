import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import imag from "./images/imag.png";
import "./Style.css";
import Facebook from "./Svgicons/Facebook";
import Google from "./Svgicons/Google";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();
        try {
          const {data} = await axios.post("http://localhost:5000/login", { email, password });
          console.log("login", data)
          // storing the registration_id so we can send it with the GET todos
          localStorage.setItem("registration_id", data?.id) // ?. is called optional chaining
          
          navigate("/listTodo")
        } catch (error) {
          toast.error("Invalid Credentials", {position : "top-center"})
        }
      }

      

  return (
    <div className="login">
      <ToastContainer />
      <img
        src={imag}
        style={{ width: "13%", position: "fixed", top: "1px", padding: "1px" }}
      />
      <div className="login_page">
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
          className="body_login "
          style={{ position: "relative", left: "250px" }}
        >
          <div className="main-header" style={{ color: "#4C42CB" }}>
            <h1> Login to your account ! </h1>
          </div>
          <form style={{ paddingBlock: "50px" }} onSubmit={onSubmitForm}>
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3">
                Email address
              </label>
              <input
                type="email"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder=" email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="form-outline mb-3">
              <label class="form-label" for="form3Example4">
                Password
              </label>

              <input
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder=" password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div class="d-flex justify-content-between align-items-center"></div>
            <a href="/forgotpwd">forgot password ?</a>
            <button
              id="sign"
              className="btn btn-light btn-lg "
              type="submit"
              value="submit"
              style={{ color: "black" }}
            >
              {" "}
              Login{" "}
            </button>
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account? <a href="/Register">Register</a>
            </p>
            <div>
              <p
                style={{
                  textAlign: "center",
                  margin: "10px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                {" "}
                ――――――― OR ―――――――
              </p>
            </div>
            <a class="btn btn-primary btn-block" href="#!" role="button">
              <Facebook /> CONTINUE WITH FACEBOOK
            </a>
            <a class="btn btn-light  btn-block" href="#!" role="button">
              <Google /> CONTINUE WITH GOOGLE
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
