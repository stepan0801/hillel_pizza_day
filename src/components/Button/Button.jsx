
const Button = (props) => {
	console.log(props);
	return (
		<button disabled={props.disabled} className={props.className} onClick={props.onClick}>{props.text}</button>
	)
}
export default Button