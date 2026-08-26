import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
              <img className='logo' src="https://svgshare.com/i/znj.svg" alt="" />
            </div>
        </div>
        <div className="container">
          <button></button>
          <form>
            <h1>Sign in</h1>
            <input type="email" placeholder='Эмайл' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Нууц үг' onChange={(e) => setPassword(e.target.value)} />
            <button className="loginButton" onClick={handleLogin}>Нэвтрэх</button>
            <span>
            New otaku? <b>Бүртгүүлэх</b>
            </span>
            <small>
              This page is protected by Baagii reCAPTCHA to ensure you're not a
              robot. <b>Learn more</b>.
            </small>
          </form>
        </div>
    </div>
    
  )
}
