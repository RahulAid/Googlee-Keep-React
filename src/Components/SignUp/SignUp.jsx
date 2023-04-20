import React, { useState } from "react";
import "./SignUp.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { signupApi } from "../../Service/UserService";

const width = {
  width: "100%",
};

const regex = {
  fname: /^[A-Z]{1}[a-z]{1,}$/i,
  lname: /^[A-Z]{1}[a-z]{1,}$/i,
  userName: /^[\w-\.]+@gmail\.com$/i,
  password:
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/,
};

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [isValidFname, setIsValidFname] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidLname, setIsValidLname] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidUsername, setIsValidUsername] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidPassword, setIsValidPassword] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState({
    errorStatus: false,
    message: "",
  });

  const changeHandler = {
    fname: (e) => setUser((prev) => ({ ...prev, fname: e.target.value })),
    lname: (e) => setUser((prev) => ({ ...prev, lname: e.target.value })),
    userName: (e) => setUser((prev) => ({ ...prev, userName: e.target.value })),
    password: (e) => setUser((prev) => ({ ...prev, password: e.target.value })),
    confirmPassword: (e) =>
      setUser((prev) => ({ ...prev, confirmPassword: e.target.value })),
  };

  const submitHandler = async () => {
    const fnameCheck = regex.fname.test(user.fname);
    const lnameCheck = regex.lname.test(user.lname);
    const userNameCheck = regex.userName.test(user.userName);
    const passwordCheck = regex.password.test(user.password);

    if (
      fnameCheck === false &&
      lnameCheck === false &&
      userNameCheck === false &&
      passwordCheck === false
    ) {
      setIsValidFname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid First Name",
      }));
      setIsValidLname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Last Name",
      }));
      setIsValidUsername((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Email",
      }));
      setIsValidPassword((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Password",
      }));
    }
    if (fnameCheck === false) {
      setIsValidFname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid First Name",
      }));
    }
    if (lnameCheck === false) {
      setIsValidLname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Last Name",
      }));
    }
    if (userNameCheck === false) {
      setIsValidUsername((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Email",
      }));
    }
    if (passwordCheck === false) {
      setIsValidPassword((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Password",
      }));
    }
    if (user.password !== user.confirmPassword) {
      setIsValidConfirmPassword((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Password Mismatched",
      }));
    }
    if (
      fnameCheck === true &&
      lnameCheck === true &&
      userNameCheck === true &&
      passwordCheck === true &&
      user.password === user.confirmPassword
    ) {
      const userData = {
        firstName: user.fname,
        lastName: user.lname,
        email: user.userName,
        password: user.password,
      };
      signupApi(userData)
        .then((res) => {
          alert(`${res.data.message}, Please login to your account`);
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      // alert(data.response.message, data.response.data);
    }
  };

  const signin = () => {
    navigate("/");
  };

  return (
    <div className="main-div">
      <div className="container">
        <div className="form">
          <div className="header">
            <img
              src="https://blog.hubspot.com/hs-fs/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg?width=528&name=The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg"
              alt="Google"
              className="logo"
            />

            <div className="title">
              <b> Create your Google Account </b>
            </div>
          </div>
          <div className="body">
            <div className="name">
              <div className="text-area">
                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  size="small"
                  sx={width}
                  onChange={changeHandler.fname}
                  error={isValidFname.errorStatus}
                  helperText={isValidFname.message}
                />
              </div>
              <div className="text-area">
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  size="small"
                  sx={width}
                  onChange={changeHandler.lname}
                  error={isValidLname.errorStatus}
                  helperText={isValidLname.message}
                />
              </div>
            </div>
            <div className="user-name">
              <div className="text-area">
                <TextField
                  id="outlined-basic"
                  label="user-name"
                  variant="outlined"
                  size="small"
                  sx={{ width: "80%" }}
                  onChange={changeHandler.userName}
                  error={isValidUsername.errorStatus}
                  helperText={isValidUsername.message}
                />
              </div>
              <div className="user-name-description">
                You can use letters, numbers & periods.
              </div>
            </div>
            <a href="" className="link">
              Use my current email address instead
            </a>
            <div className="password">
              <div className="text-area">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="small"
                  sx={width}
                  onChange={changeHandler.password}
                  error={isValidPassword.errorStatus}
                  helperText={isValidPassword.message}
                />
              </div>
              <div className="text-area">
                <TextField
                  id="outlined-basic"
                  label="Confirm"
                  variant="outlined"
                  size="small"
                  sx={width}
                  onChange={changeHandler.confirmPassword}
                  error={isValidConfirmPassword.errorStatus}
                  helperText={isValidConfirmPassword.message}
                />
              </div>
            </div>
            <div className="password-hint">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
            <div className="checkbox">
              <input type="checkbox" name="" id="check" />
              Show password
            </div>
          </div>
          <div className="footer">
            <Button
              variant="text"
              sx={{ color: "rgb(0, 162, 255);" }}
              onClick={signin}
            >
              Sign in instead
            </Button>
            <Button variant="contained" onClick={submitHandler}>
              Sign up
            </Button>
          </div>
        </div>
        <div className="image">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4PBh-satuPZF7oX45X1XoKlwLDRWJ0L7_gumoodylIh7IgY6x"
            alt="Image"
            className="body-img"
          />
          <div className="img-title">
            One account. All of Google <br /> working for you.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
