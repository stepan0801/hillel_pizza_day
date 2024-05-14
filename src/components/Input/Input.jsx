
const Input = (props) => {
	return (
		<input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onchange} />
	)
}

export default Input