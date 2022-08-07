import { useContext } from "react";

import Header from "./Header";
import Button from "./Button";
import ThemeContext from "../context/ThemeContext";

function Container() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`app ${theme === "dark" ? "dark" : ""}`}>
			<Header />
			<br />
			<Button />
		</div>
	);
}

export default Container;
