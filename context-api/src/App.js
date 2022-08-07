import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<Button />
		</ThemeProvider>
	);
}

export default App;
