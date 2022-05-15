import React, { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  return (
    <div className="login dark"> {/* Colocar el thema Dark */}
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
					type="password"
					value={password}
					onChange={(e)=> setPassword(e.target.password)} 
					placeholder="Type your password">
				</input>
				<button className="login__data--form__button" type="submit">Log In</button>
			</form>
		</div>
    </div>
  )
}

export default Login
