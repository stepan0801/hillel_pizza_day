import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Order.css";
// import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const phoneNumberRegEx = /^((8|\+7)[/\- ]?)?(\(?\d{3}\)?[/\- ]?)?[\d\- ]{7,10}$/
const userNameRegEx = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/

const formSchema = Yup.object().shape({
	name: Yup.string().matches(userNameRegEx, 'incorrect name, try again').required('obligated field'),
	phone: Yup.string().matches(phoneNumberRegEx, 'incorrect number, try again').required('obligated field'),
	email: Yup.string().email('incorrect email, try again').required('obligated field')
})

const Order = () => {
	const { control, handleSubmit, formState: { errors, isValid, isValidating, isSubmitting, } } = useForm({
		mode: "onBlur",
		defaultValues: {
			name: 'John',
			phone: '+380631112233',
			email: 'user@gmail.com',
			isPriority: false
		},
		resolver: yupResolver(formSchema)
	})
	// const [name, setName] = useState('')
	// const [phone, setPhone] = useState('')
	// const [email, setEmail] = useState('')
	// const [priority, setPriority] = useState(false)


	const onSubmit = (data) => {
		// e.preventDefault()
		console.log(data);
	}

	return (
		<form className="order" onSubmit={handleSubmit(onSubmit)}>
			<h2 className="order__title">Ready to order? Lets go!</h2>
			<div className="order__user-name">
				<p>First Name</p>
				<div>
					<Controller control={control} name='name' render={({ field }) => <Input {...field} type="text" />} />
					{/* value={name} onchange={(e) => setName(e.target.value)} */}
				</div>
				{errors.name && <p>{errors.name.message}</p>}
			</div>
			<div className="order__phone-number">
				<p>Phone number</p>
				<div>
					<Controller control={control} name='phone' render={({ field }) => <Input {...field} type="tel" />} />
					{/* value={phone} onchange={(e) => setPhone(e.target.value)} */}
				</div>
				{errors.phone && <p>{errors.phone.message}</p>}
			</div>
			<div className="order__email">
				<p>Email</p>
				<div>
					<Controller control={control} name='email' render={({ field }) => <Input {...field} type="email" />} />
					{/* value={email} onchange={(e) => setEmail(e.target.value)} */}
				</div>
				{errors.email && <p>{errors.email.message}</p>}
			</div>
			<div className="order__priority">
				<div>
					<Controller control={control} name='isPriority' render={({ field }) => <Input {...field} type="checkbox" />} />
					{/* checked={priority} onchange={() => setPriority(!priority)}  */}
				</div>
				<p>Want you to give your order priority?</p>
			</div>
			<div className="order__to-buy">
				<Button text="ORDER NOW FOR $39.00" type='submit' disabled={!isValid || !isValidating || !isSubmitting} />
			</div>
		</form>
	)
}

export default Order