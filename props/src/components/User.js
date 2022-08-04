import propTypes from "prop-types";

function User({ name, surName, isLoggedIn, age, friends, adress }) {
	if (!isLoggedIn) {
		return <div>Giriş Yapmadınız</div>;
	}
	return (
		<>
			<h1>{`${name} ${surName} yaşınız ${age}`}</h1>
			{adress.title} {adress.zip}
			{friends &&
				friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
		</>
	);
}
User.propTypes = {
	name: propTypes.string.isRequired,
	surName: propTypes.string.isRequired,
	isLoggedIn: propTypes.bool,
	age: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	friends: propTypes.array,
	adress: propTypes.shape({ title: propTypes.string, zip: propTypes.string }),
};

User.defaultProps = {
	isLoggedIn: false,
};

export default User;
