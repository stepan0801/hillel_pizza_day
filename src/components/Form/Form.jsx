
import Input from "../Input/Input";
import Button from "../Button/Button";

const Form = (props) => {
	return (
		// eslint-disable-next-line react/prop-types
		<form className={props.className}>
			<Input type="text" placeholder="Your full name"></Input>
			<Button text='Login' />
		</form>
	)
}

export default Form