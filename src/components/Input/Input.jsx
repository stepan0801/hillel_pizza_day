
const Input = (props) => {
	return (
		// eslint-disable-next-line react/prop-types
		<input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onchange} />
	)
}

export default Input