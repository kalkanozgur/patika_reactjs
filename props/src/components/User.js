import propTypes from "prop-types";

function User({ name, surName, isLoggedIn, age, friends, adress }) {
	return (
		<>
			<h1>
				{isLoggedIn ? `${name} ${surName} yaşınız ${age}` : "Giriş Yapmadınız"}
			</h1>
			{adress.title} {adress.zip}
			{friends &&
				friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
		</>
	);
}
User.propTypes = {
	name: propTypes.string.isRequired,
	surName: propTypes.string.isRequired,
	isLoggedIn: propTypes.bool.isRequired,
	age: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	friends: propTypes.array,
	adress: propTypes.shape({ title: propTypes.string, zip: propTypes.string }),
};

export default User;
