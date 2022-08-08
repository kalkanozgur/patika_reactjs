import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(
		null
		//     {
		// 	id: 1,
		// 	username: "kalkanozgur",
		// 	bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores tempore quos inventore, fuga quia numquam pariatur illum perferendis ipsam! Alias velit sequi esse enim saepe consequuntur earum ab nesciunt!",
		// }
	);
	const values = { user, setUser };
	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
