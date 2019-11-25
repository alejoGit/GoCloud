import React, {useContext} from 'react';
import { Context } from '../../Context'

import logoSvg from '../../assets/gc-logo-default.svg';

export const DetailHeader = ()=>{
	const {  removeAuth } = useContext(Context);
	const logout = ()=>{
		removeAuth();
	}
	return(
		<div className="gc-detail__header-wrapper">
			<div className="gc-detail__header">
				<img
				className="gc-detail__logo"
			    src={logoSvg}
			    alt="Gocloud Logo"/>

			    <button className="gc-detail__header-logout" onClick={logout}>
			    	<span className="gc-font gc-font_logout"></span>
			    </button>
		    </div>
		    <div className="gc-detail__header-bottom">
				Omni mia
		    </div>
	    </div>
	)
}

