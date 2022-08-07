import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div>
			Header Active Theme {theme}
			<br />
			<button
				onClick={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}
			>
				Toggle Theme
			</button>
		</div>
	);
}

export default Header;
