import React from 'react';


export const CampaignInfoItem = ({color, number, text, icon})=>{
	return(
		<div className={`gc-campaign__info-item ${color}`}>
			<div className="gc-info-item__number">
				{number}
		    </div>
		    <div className="gc-info-item__text">
				{text}
		    </div>
		    <div className="gc-info-item__icon">
				<span className={`gc-font ${icon}`}></span>
		    </div>
	    </div>
	)
}
