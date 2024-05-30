import React, { useState } from 'react';
import './styles.css';
import Input from '../Input';
import Button from '../Button';
import {useNavigate} from 'react-router-dom';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {toast} from 'react-toastify';
import { auth, provider } from '../../firebase';
import { createDoc } from '../../functions/createDoc';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [logInForm, setLogInForm] = useState(false);
  const navigate = useNavigate();

  function signUpWithEmail() {
    setLoading(true);

    if (email != "" && name != "" && password != "" && confirm != "") {
      if (password === confirm) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            toast.success("User Profile Created");
            setLoading(false);
            setName("");
            setEmail("");
            setPassword("");
            setConfirm("");
            createDoc(user, name, email);
            navigate('/dashboard')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false);
          });
      } else {
        toast.error("Password Does Not Match");
      }
    } else {
      toast.error("All fields are mandatory!");
      setLoading(false);
    }
  }

  function signUpwithGoogle() {
    setLoading(true);
    try{
      signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const name = user.displayName || "";
        const email = user.email || ""
        createDoc(user, name, email);
        console.log(user)
        toast.success('User Authenticated Successfully!')
        setLoading(false);
        navigate('/dashboard');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
       setLoading(false);
      })
    }
    catch(error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  function logIn() {
    setLoading(true);
    setLogInForm(true);
    console.log("login");
    if (email != "" && password != "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success('Logged In Successfully');
          navigate('/dashboard');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("Incorrect Password or Email");
          setLoading(false)
        });
      }      
   else {
      setLoading(false);
    }
  }

  return (
    <div className="signIn-wrapper">
        {logInForm ? (
          <div>
            <div>
              <p className="signIn-header">
                Log In On <span>Financely.</span>
              </p>
            </div>
            <form>
              <Input
                type="email"
                label={"Email"}
                state={email}
                placeholder={"exgamil.com"}
                setState={setEmail}
              />
              <Input
                type='password'
                label={"Password"}
                state={password}
                placeholder={"password"}
                setState={setPassword}
              />

            <div className="btn-wrapper">
              <Button text={'Log In'} blue={true} onClick={logIn} />
            </div>
            </form>
          </div>
        ) : (
          <div>
            <div>
              <p className="signIn-header">
                Sign Up On <span>Financely.</span>
              </p>
            </div>
            <form>
              <Input
                label={"Full Name"}
                state={name}
                placeholder={"John Doe"}
                setState={setName}
              />
              <Input
                type="email"
                label={"Email"}
                state={email}
                placeholder={"exgamil.com"}
                setState={setEmail}
              />
              <Input
                type="password"
                label={"Password"}
                state={password}
                placeholder={"Your Password"}
                setState={setPassword}
              />
              <Input
                type="password"
                label={"Confirm Password"}
                state={confirm}
                placeholder={"Confrim Password"}
                setState={setConfirm}
              />

              <div className="btn-wrapper">
                <Button
                  disabled={loading}
                  text={loading ? "Loading..." : "Sign Up with Email"}
                  onClick={signUpWithEmail}
                />
                <p>Or</p>
                <Button
                  disabled={loading}
                  text={loading ? "Loading..." : "Sign Up with Gmail"}
                  blue={"blue"}
                  onClick={signUpwithGoogle}
                />
              </div>
              <p className="signIn-header">
                Already have an account? Click<a onClick={logIn}>&#160;Here</a>
              </p>
            </form>
          </div>
        )}
    </div>
  )
}

export default SignUp