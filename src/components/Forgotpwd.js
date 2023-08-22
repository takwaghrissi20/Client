import React, { useState } from "react";
import Arrowleft from "./Svgicons/Arrowleft";
import { ToastContainer, toast } from 'react-toastify';
const Forgotpwd = () => {
  const [email, setEmail] = useState("");
  const onSubmitForm = async (e) => {
    if (email !== null) {
      toast.success("DONE !", {position : "top-center"})
    }
    e.preventDefault();
  };
  return (
    <body>
      <ToastContainer/>
      <Arrowleft />
      <body>
        <div
          style={{
            position: "fixed",
            paddingTop: "380px",
            paddingLeft: "95px",
            color: "gray",
            fontStyle: "oblique",
            margin: "2%",
            left: "7%",
          }}
        >
          <p>&#10003;No Coding Needed,Easy Set up</p>
          <p>&#10003;working on your scheduling</p>
        </div>
        <div>
          <div
            class="row align-items-center justify-content-center
      min-vh-100 g-0"
            style={{ position: "relative", left: "250px", padding: "100px" }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              style={{
                width: "24%",
                float: "left",
                padding: "1px",
                paddingTop: "10px",
                position: "fixed",
                left: "10%",
              }}
            ></img>

            <div class="col-12 col-md-8 col-lg-4" style={{ paddingTop: "0%" }}>
              <div>
                <div>
                  <div class="mb-4">
                    <h5
                      style={{
                        textAlign: "center",
                        margin: "40px",
                        fontSize: "30px",
                        fontFamily: "fantasy",
                        color: "#4C42CB",
                      }}
                    >
                      Forgot Password?
                    </h5>
                    <p class="mb-2">
                      Enter your registered email ID to reset the password
                    </p>
                  </div>
                  <form onSubmit={onSubmitForm}>
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="form-control"
                        name="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div class="mb-3 d-grid">
                      <button type="submit" class="btn btn-light">
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </body>
  );
};

export default Forgotpwd;
