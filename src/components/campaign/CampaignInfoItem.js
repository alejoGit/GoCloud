import React from 'react';


export const CampaignInfoItem = (props)=>{
	return(
		<div className={`gc-campaign__info-item ${props.color}`}>
			<div className="gc-info-item__number">
				{props.number}
		    </div>
		    <div className="gc-info-item__text">
				{props.text}
		    </div>
		    <div className="gc-info-item__icon">
				<span className={`gc-font ${props.icon}`}></span>
		    </div>
	    </div>
	)
}
