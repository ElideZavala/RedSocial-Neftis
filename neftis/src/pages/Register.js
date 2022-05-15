import React, { useState } from "react";

const Register = () => {
	const [fullname, setFullname] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

  return (
	<div className="register dark"> {/* Colocar el thema Dark */}
	<div className="register__theme"></div>
	<h3 className="register__header">Social <span>Neftis</span></h3>
	<h6 className="register__subheader">register</h6>
	<div className="register__data">
		<form className="register__data--form">
			<input 
				className="register__data--form__email"
				type="text"
				value={fullname}
				onChange={(e)=> setFullname(e.target.fullname)} 
				placeholder="Type your fullname">
			</input>
			<input 
				className="register__data--form__password"
				type="text"
				value={username}
				onChange={(e)=> setUsername(e.target.username)} 
				placeholder="Type your Username">
			</input>
			<input 
				className="register__data--form__password"
				type="email"
				value={email}
				onChange={(e)=> setEmail(e.target.email)} 
				placeholder="Type your Email">
			</input>
			<input 
				className="register__data--form__password"
				type="password"
				value={password}
				onChange={(e)=> setPassword(e.target.password)} 
				placeholder="Type your password">
			</input>
			<input 
				className="register__data--form__password"
				type="confirmPassword"
				value={confirmPassword}
				onChange={(e)=> setConfirmPassword(e.target.confirmPassword)} 
				placeholder="Confirm your Password">
			</input>
			<button className="register__data--form__button" type="submit">Log In</button>
		</form>
	</div>
 </div>
  )
}

export default Register