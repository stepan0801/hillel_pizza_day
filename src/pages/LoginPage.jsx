import { createContext, useState, useCallback } from "react";
import Login from "../components/Login/Login";

export const LoginContext = createContext(null)
const LoginPage = () => {
	const [userName, setUserName] = useState('')
	const changValue = useCallback((e) => {
		setUserName(e.target.value)
	}, [])
	const contextValue = {
		userName: userName,
		onchange: changValue
	}
	return (
		<LoginContext.Provider value={contextValue}>
			<Login />
		</LoginContext.Provider>
	)
}

export default LoginPage