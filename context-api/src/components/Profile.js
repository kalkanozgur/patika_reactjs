import { useContext, useState } from "react";

import UserContext from "../context/UserContext";

function Profile() {
	const { user, setUser } = useContext(UserContext);

	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		setLoading(true);
		setTimeout(() => {
			setUser({
				id: 1,
				username: "kalkanozgur",
				bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores tempore quos inventore, fuga quia numquam pariatur illum perferendis ipsam! Alias velit sequi esse enim saepe consequuntur earum ab nesciunt!",
			});
			setLoading(false);
		}, 1500);
	};
	const handleLogout = () => setUser(null);

	return (
		<div>
			{!user && (
				<button onClick={handleLogin}>{loading ? "Loading.." : "Login"}</button>
			)}
			<br />
			{user && (
				<div>
					<code>{JSON.stringify(user)}</code>
					<br />
					<button onClick={handleLogout}>Logout</button>
				</div>
			)}
		</div>
	);
}

export default Profile;
