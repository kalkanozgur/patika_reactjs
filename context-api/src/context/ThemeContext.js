import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	const values = { theme, setTheme };

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};
