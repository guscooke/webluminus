import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { connect } from "react-redux";

const PrivateComponent = (props) => {
  console.log(props);
  let allowed = props.auth_jwt;   
  let jwt_length = allowed.auth_jwt ? allowed.auth_jwt : '';
  
  if(jwt_length <= 0 ){
	  return <Redirect to="/login" />;
  }
  
  return(
	<DefaultLayout>
		{props.children}
	</DefaultLayout>
  );
};

const mapStateToProps = (state) => {  
  return {	  
    auth_jwt: state.userReducer,
  };
};

export default connect(mapStateToProps)(PrivateComponent);