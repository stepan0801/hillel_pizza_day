/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
const Button = (props) => {
	console.log(props);
	return (
		<button>{props.text}</button>
	)
}
export default Button