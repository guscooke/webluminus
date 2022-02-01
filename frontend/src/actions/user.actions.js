const setAuthJWT = ({ auth_jwt, username, email, afiliado_id }) => ({
	type: "SET_AUTH_JWT",
	auth_jwt,
	username,
	email,
	afiliado_id,
});

module.exports = {
	setAuthJWT
};