import { useState, createContext, Children } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = useState([]);

	const values = { messages, setMessages };
	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};
