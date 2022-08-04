import propTypes from "prop-types";

function User({ name, surName, isLoggedIn, age, friends }) {
	return (
		<>
			<h1>
				{isLoggedIn ? `${name} ${surName} yaşınız ${age}` : "Giriş Yapmadınız"}
			</h1>
			{friends &&
				friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
		</>
	);
}
User.propTypes = {
	name: propTypes.string.isRequired,
	surName: propTypes.string.isRequired,
	isLoggedIn: propTypes.bool.isRequired,
	age: propTypes.number.isRequired,
	friends: propTypes.array,
};

export default User;
