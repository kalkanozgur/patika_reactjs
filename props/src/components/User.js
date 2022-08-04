function User({ name, surName, isLoggedIn, age }) {
  return (
    <h1>
      {isLoggedIn ? `${name} ${surName} yaşınız ${age}` : "Giriş Yapmadınız"}
    </h1>
  );
}

export default User;
