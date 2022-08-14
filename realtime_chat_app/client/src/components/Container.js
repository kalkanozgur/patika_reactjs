import { useEffect } from "react";

import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init } from "../socketApi";

function Container() {
	useEffect(() => {
		init();
	}, []);
	return (
		<div>
			<ChatList />
			<ChatForm />
		</div>
	);
}

export default Container;
