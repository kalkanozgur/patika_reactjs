function User({ name, surName, isLoggedIn, age, friends }) {
	return (
		<>
			<h1>
				{isLoggedIn ? `${name} ${surName} yaşınız ${age}` : "Giriş Yapmadınız"}
			</h1>
			{friends.map((friend) => (
				<div key={friend.id}>{friend.name}</div>
			))}
		</>
	);
}

export default User;
