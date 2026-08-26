import React, { useRef, useState } from 'react';
import "./register.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleLogin = () => {
    history.push("/login");
  };
  
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const checkPasswordCriteria = (element) => {
    const lengthRegex = /^.{8,25}$/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

    if (!lengthRegex.test(element)) {
      setPasswordError("Нууц үг нь 8-25 тэмдэгтийн хооронд байх ёстой!");
    } else if (!uppercaseRegex.test(element)) {
      setPasswordError("Нууц үг нь дор хаяж нэг том үсэг агуулсан байх ёстой!");
    } else if (!specialCharRegex.test(element)) {
      setPasswordError("Нууц үг нь дор хаяж нэг онцгой тэмдэгт агуулсан байх ёстой!");
    } else {
      setPasswordError("");
    }
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);

    // Check password criteria before making the request
    checkPasswordCriteria(passwordRef.current.value);

    if (!passwordError) {
      try {
        await axios.post("auth/register", { email, username, password });
        history.push("/login");
      } catch (err) {
      }
    }
  };


  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className='logo' src="https://svgshare.com/i/znj.svg" alt="" />
          <button className='loginButton' onClick={handleLogin}>Нэвтрэх</button>
        </div>
      </div>
      <div className="container">
        <h1>Манай платформд тавтай морил!</h1>
        <h2>Anytime. Anywhere</h2>
        <p>
          Та гайхамшигт бэлэн үү? Доорх хэсэгт эмайл хаягаа оруулан бүртгүүнэ үү!
        </p>
        
        {
          !email ? (
            <div className="input">
              <input type="email" placeholder='Эмайл' ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>Бүртгүүлэх</button>
            </div>
          ) : (
            <form className="input">
              <input type="username" placeholder="Хэрэглэгчийн нэр" ref={usernameRef} />
              <input
                type="password"
                placeholder='Нууц үг'
                ref={passwordRef}
                onChange={(e) => checkPasswordCriteria(e.target.value)}
              />
              {passwordError && <p className="passwordError">{passwordError}</p>}
              <button className="registerButton" onClick={handleFinish}>Бүртгүүлэх</button>
            </form>
          )
        }
      </div>
    </div>
  );
}
