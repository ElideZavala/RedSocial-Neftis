import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [fullname, setFullname] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

  return (
	<div className="register "> {/* Colocar el thema Dark */}
	<div className="register__theme"></div>
	<h3 className="register__header">Social <span>Neftis</span></h3>
	<h6 className="register__subheader">Register</h6>
	<div className="register__data">
		<form className="register__data--form">
			<input 
				className="register__data--form__fullname"
				type="text"
				value={fullname}
				onChange={(e)=> setFullname(e.target.fullname)} 
				placeholder="Type your fullname">
			</input>
			<input 
				className="register__data--form__username"
				type="text"
				value={username}
				onChange={(e)=> setUsername(e.target.username)} 
				placeholder="Type your Username">
			</input>
			<input 
				className="register__data--form__email"
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
				className="register__data--form__confirmPassword"
				type="password"
				value={confirmPassword}
				onChange={(e)=> setConfirmPassword(e.target.confirmPassword)} 
				placeholder="Confirm your Password">
			</input>
			<button className="register__data--form__button" type="submit">Sing Up</button>
			<small  className="register__data--form__small">Already have an account <Link to="/">Log In Here</Link></small>
		</form>
	</div>
 </div>
  )
}

export default Register