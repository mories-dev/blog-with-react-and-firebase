import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase'

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login
