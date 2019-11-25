import React from 'react';
import logoSvg from '../../assets/gc-logo-default.svg';

export const LoginHeader = ()=>{
	return(
		<div className="gc-login__header">
			<img
			className="gc-login__logo"
		    src={logoSvg}
		    alt="Gocloud Logo"/>
	    </div>
	)
}

