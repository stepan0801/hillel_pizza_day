import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = (props) => {
	const [userName, setUserName] = useState('')
	const navigate = useNavigate()
	const formSubmit = (e) => {
		e.preventDefault()
		navigate("/menu")
	}

	return (
		<form onSubmit={formSubmit} className={props.className}>
			<Input type="text" placeholder="Your full name" value={userName} onchange={e => setUserName(e.target.value)}></Input>
			<Button type='submit' text='Login' />
		</form>
	)
}

export default Login