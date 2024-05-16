import { createContext, useState, useCallback } from "react";

export const LoginContext = createContext(null)
const LoginContextProvider = ({ children }) => {

	const [userName, setUserName] = useState('')
	const changValue = useCallback((e) => {
		setUserName(e.target.value)
	}, [])
	const contextValue = {
		userName: userName,
		onchange: changValue
	}
	return (
		<LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>
	)
}

export default LoginContextProvider