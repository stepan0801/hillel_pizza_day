
import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = (props) => {

	const data = useContext(LoginContext)
	const navigate = useNavigate()
	const formSubmit = (e) => {
		e.preventDefault()
		navigate("/menu")
	}

	return (
		<form onSubmit={formSubmit} className={props.className}>
			<Input type="text" placeholder="Your full name" value={data.userName} onchange={data.onchange}></Input>
			<Button type='submit' text='Login' />
		</form>
	)
}

export default Login