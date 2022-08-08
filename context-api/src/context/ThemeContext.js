import { useState, createContext, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

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
