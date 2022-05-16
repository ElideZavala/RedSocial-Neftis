import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [fullname, setFullname] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showpass, setShowpass] = useState(false)
	const [showconfpass, setShowconfpass] = useState(false)
	const [gender, setGender] = useState('')

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
				type={showpass ? "type" : "password"}
				value={password}
				onChange={(e)=> setPassword(e.target.value)} 
				placeholder="Type your password">
			</input>
			<small className="register__data--form__showRegPass" onClick={()=>setShowpass(!showpass)}>{showpass ? "Hide" : "Show" }</small>
			<input 
				className="register__data--form__confirmPassword"
				type={showconfpass ? "type" : "password"}
				value={confirmPassword}
				onChange={(e)=> setConfirmPassword(e.target.value)} 
				placeholder="Confirm your Password">
			</input>
			<select className="register__data--form__select" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender">
				<option value="">Gender:</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
			</select>
			<small className="register__data--form__showRegConfPass" onClick={()=>setShowconfpass(!showconfpass)}>{showconfpass ? "Hide" : "Show" }</small>
			<button className="register__data--form__button" type="submit">Sing Up</button>
			<small  className="register__data--form__small">Already have an account <Link to="/">Log In Here</Link></small>
		</form>
	</div>
 </div>
  )
}

export default Register