import { ChatProvider } from "./context/ChatContext";
import "./App.css";
import Container from "./components/Container";

function App() {
	return (
		<ChatProvider>
			<div className="App">
				<Container />
			</div>
		</ChatProvider>
	);
}

export default App;
