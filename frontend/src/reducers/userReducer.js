export default (
  state = {
    auth_jwt: sessionStorage.getItem("auth_jwt") ? sessionStorage.getItem("auth_jwt") : "",
  	username: sessionStorage.getItem("username") ? sessionStorage.getItem("username") : "",
  	email: sessionStorage.getItem("email") ? sessionStorage.getItem("email") : "",
  	afiliado_id: sessionStorage.getItem("afiliado_id") ? sessionStorage.getItem("afiliado_id") : "",
  },
  action
) => {
  switch (action.type) {	  
    case "SET_AUTH_JWT":
      sessionStorage.setItem("auth_jwt", action.auth_jwt);
      sessionStorage.setItem("username", action.username);
      sessionStorage.setItem("email", action.email);
      sessionStorage.setItem("afiliado_id", action.afiliado_id);
	  return {
        auth_jwt: action.auth_jwt,
    		username: action.username,
    		email: action.email,
    		afiliado_id: action.afiliado_id,
      };    
    default:
      return state;
  }
};
