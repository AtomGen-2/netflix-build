import React, {useState, useRef} from 'react';
import "./SignInScreen.css";
import { auth } from "../firebase";
import HomeScreen from "./HomeScreen";
import { Link, useHistory } from "react-router-dom";

function SignInScreen() {
    const history= useHistory();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        // to avoid refresh when the function is triggered through the button click
        e.preventDefault();
        // login logic
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then((authUser) => {
            // logged in successfully, now redirect to homepage...
            console.log(authUser)
        })
// catch error feature is given by firebase itself
        .catch(e=>alert(e.message));
    };

    const signIn = (e) => {
        // to avoid refresh when the function is triggered through the button click
        e.preventDefault();
        // login logic
        auth.signInWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then((auth) => {
            // logged in successfully, now redirect to homepage...
            console.log(auth)
        })
// catch error feature is given by firebase itself
        .catch(e=>alert(e.message));
    };

    return (
        <div className="signInScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signInScreen__gray">New to Netflix?      </span>
                    <span className="signInScreen__link" onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen
