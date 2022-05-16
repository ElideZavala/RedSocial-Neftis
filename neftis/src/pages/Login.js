import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showpass, setShowass] = useState(false)

  return (
    <div className="login"> 
		<div className="login__theme"></div>
      <h3 className="login__header">Social <span>Neftis</span></h3>
		<h6 className="login__subheader">Login</h6>
		<div className="login__data">
			<form className="login__data--form">
				<input 
					className="login__data--form__email"
					type="email"
					value={email}
					onChange={(e)=> setEmail(e.target.email)} 
					placeholder="Type your email">
				</input>
				<input 
					className="login__data--form__password"
					type={showpass ? "type" : "password"} /*{Si showpass es true sera type si es false password }*/
					value={password}
					onChange={(e)=> setPassword(e.target.password)} 
					placeholder="Type your password">
				</input>
				<small className="login__data--form__showpass" onClick={()=>setShowass(!showpass)}>{showpass ? "Hide" : "Show" }</small>
				<button className="login__data--form__button" type="submit">Log In</button>
				<p onClick={()=>setShowass(!showpass)} className="login__data--form__small">Do not have account <Link to="register">Create Here</Link></p>
			</form>
		</div>
    </div>
  )
}

export default Login
