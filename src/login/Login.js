import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { signInWithGoogle,auth } from "../firebase";
import { useEffect } from "react";

const Login = ({LogoutUser,LoginUser}) => {

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        LogoutUser();
        return;
      }
      let displayName  = user.multiFactor.user.displayName;
      LoginUser(displayName);
      console.log(`Successfull Login + ${displayName}`)
    });
  }, []);

  return (
    <div className="LoginScreen">
      <div className="LoginBox">
        <div className="LoginBox__header">
        <h1 className="LoginBox-title">MovieApp</h1>
        </div>
        <div className="LoginBox__main">
          <form>
            <input className="input" type="text" placeholder="Email"></input>
            <input className="input" type="text" placeholder="Password"></input>
            <div className="LoginBox__main-socialmedia">
              <span
                onClick={(e) => {
                  signInWithGoogle();
                }}
              >
                <FcGoogle></FcGoogle>
              </span>

              <BsGithub />
              <FaLinkedin />
            </div>
            <button className="login_button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
