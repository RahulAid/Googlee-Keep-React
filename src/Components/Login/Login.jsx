import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { loginApi } from "../../Service/UserService";

const width = {
  width: "80%",
};

const regexPattern = {
  emailPattern: /^[\w-\.]+@gmail\.com$/i,
  passwordPattern:
  /^[a-z]{1,}[1-9]{1,}$/,
};

export default function Login() {
  const navigate = useNavigate();
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const [isValidEmail, setIsValidEmail] = useState({
    status: "",
    message: "",
  });
  const [isValidPassword, setIsValidPassword] = useState({
    status: "",
    message: "",
  });

  const changeHandler = {
    getEmail: (e) => {
      setLoginObj((prev) => ({ ...prev, email: e.target.value }));
    },
    getPassword: (e) => {
      setLoginObj((prev) => ({ ...prev, password: e.target.value }));
    },
  };

  const submitHandler = () => {
    const checkEmail = regexPattern.emailPattern.test(loginObj.email);
    const checkPassword = regexPattern.passwordPattern.test(loginObj.password);

    if (checkEmail === true && checkPassword === false) {
      setIsValidPassword((prev) => ({
        ...prev,
        status: true,
        message: "Enter valid Password(eg: Abcd@123)",
      }));
      // setIsValidEmail((prev) => ({ ...prev, status: false, message: "" }));
    } else if (checkEmail === false && checkPassword === true) {
      setIsValidEmail((prev) => ({
        ...prev,
        status: true,
        message: "Enter valid Email",
      }));
    } else if (checkEmail === false && checkPassword === false) {
      setIsValidPassword((prev) => ({
        ...prev,
        status: true,
        message: "Enter valid Password(eg: Abcd@123)",
      }));

      setIsValidEmail((prev) => ({
        ...prev,
        status: true,
        message: "Enter valid Email",
      }));
    } else {
      setIsValidEmail((prev) => ({ ...prev, status: false, message: "" }));
      setIsValidPassword((prev) => ({ ...prev, status: false, message: "" }));
    }

    if (checkEmail === true && checkPassword === true) {
      loginApi(loginObj)
        .then((response) => {
          navigate("/dashboard");
          alert("Login Succesfull", response.data);
          console.log("Response ", response);
          
          localStorage.setItem("auth", response.data.data.Auth);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const signUp = () => {
    navigate("/signup");
  };

  return (
    <div className="main-div">
      <div className="loginContainer">
        <div className="login-header">
          <img
            src="https://blog.hubspot.com/hs-fs/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg?width=528&name=The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg"
            alt="Google"
            className="login-logo"
          />
          <div className="login-title">Sign in</div>
          <div className="login-sub-title">Use your Google Account</div>
        </div>
        <div className="login-body">
          <div className="login-text-area">
            <div className="text-area">
              <TextField
                id="outlined-basic"
                label="Email or phone"
                variant="outlined"
                size="small"
                sx={width}
                onChange={changeHandler.getEmail}
                error={isValidEmail.status}
                helperText={isValidEmail.message}
              />
            </div>
          </div>
          <div className="login-text-area">
            <div className="text-area">
              <TextField
                id="outlined-basic"
                label="Password"
                obscureText="true"
                variant="outlined"
                size="small"
                sx={width}
                onChange={changeHandler.getPassword}
                error={isValidPassword.status}
                helperText={isValidPassword.message}
              />
            </div>
          </div>
          <a href="" className="forgot-link">
            Forgot email?
          </a>
          <div className="login-description">
            Not your device? Use Guest mode to sign in privately.{" "}
            <a href="" className="learn">
              Learn more
            </a>
          </div>
        </div>
        <div className="login-footer">
          <Button
            variant="text"
            sx={{ color: "rgb(0, 162, 255);" }}
            onClick={signUp}
          >
            Create account
          </Button>
          <Button variant="contained" onClick={submitHandler}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
