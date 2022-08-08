import { useTheme } from "../context/ThemeContext";

function Header() {
	const { theme, setTheme } = useTheme();
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
