import React , { useState, useContext } from 'react';
import { Context } from '../Context'
import { Redirect } from 'react-router-dom';
import { LoginHeader } from '../components/login/LoginHeader';
import { LoginBody } from '../components/login/LoginBody';
import { LoginFooter } from '../components/login/LoginFooter';
import { Loading } from '../components/loading/Loading';
import { cognito } from '../config.js';
import * as  AmazonCognitoIdentity from "amazon-cognito-identity-js";

export default () => {
	const { isAuth, activateAuth } = useContext(Context);
	const [loading, setLoading] = useState(false);
	if(isAuth){
		return <Redirect to="/" />
	}
     
	const onSubmit = ({email, password}) => {
		
		const authenticationData = {
	        Username : email,
	        Password : password,
	    };

		const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    
		const poolData = {
	        UserPoolId : cognito.userPoolId, // Your user pool id here
	        ClientId : cognito.clientId, // Your client id here
	    };
		
	    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
		
	    const userData = {
	        Username : email,
	        Pool : userPool,
	    };
		
	    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	    
	    setLoading(true);
		cognitoUser.authenticateUser(authenticationDetails, {
	        onSuccess: function (result) {
				const accessToken = result.getAccessToken().getJwtToken();
				setLoading(false);
				activateAuth(accessToken);
	        },

	        onFailure: function(err) {
	            setLoading(false);
	        },
	    });

	}	
	function getLoading(){
		if(loading){
			return <Loading message="¡Bienvenido otra vez!" />;
		}

	}
    return(
    	<div>
	    	{getLoading()}
	    	<div className="gc-login__wrapper">
	    		<div className="gc-login__bg"></div>
	    		<div className="gc-login__container">
		    		<LoginHeader />
		    		<LoginBody onSubmit={onSubmit} />
	    		</div>
	    		<LoginFooter />
	    	</div>
    	</div>
    )
};