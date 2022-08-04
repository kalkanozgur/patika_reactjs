import propTypes from "prop-types";

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
User.propTypes = {
	name: propTypes.string,
	surName: propTypes.string,
	isLoggedIn: propTypes.bool,
	age: propTypes.number,
	friends: propTypes.array,
};

export default User;
