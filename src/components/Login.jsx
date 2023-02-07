import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import {login} from '../features/userSlice'

const Login = () => {

    const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
    .then(({user})=>{
        dispatch(login({
            email: user.email,
            photoUrl: user.photoURL,
            name: user.displayName
        }))
    })
    .catch((err)=> console.log(err.message))
  };
  
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
