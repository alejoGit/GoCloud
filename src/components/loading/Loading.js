import React from 'react';
import loadingGif from '../../assets/robot-loader.gif';
export const Loading = (props)=>{
	return(
		<div className="gc-loading__wrapper">
			<div className="gc-loading__message">{props.message}</div>
			<img
    			className="gc-loading__loader"
                src={loadingGif}
                alt="Gocloud Loading"/>
	    </div>
	)
}

