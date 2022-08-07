import { useState, createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const values = { theme, setTheme };
	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};
