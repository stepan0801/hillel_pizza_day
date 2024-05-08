
const Button = (props) => {
	return (
		<button type={props.type} disabled={props.disabled} className={props.className} onClick={props.onClick}>{props.text}</button>
	)
}
export default Button