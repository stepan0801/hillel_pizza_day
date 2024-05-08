
import Input from "../Input/Input";
import Button from "../Button/Button";

const Form = (props) => {
	const formSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={formSubmit} className={props.className}>
			<Input type="text" placeholder="Your full name"></Input>
			<Button text='Login' />
		</form>
	)
}

export default Form