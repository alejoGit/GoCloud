import React from 'react';

import { CampaignInfoItem } from './CampaignInfoItem';
export const CampaignInfoList = ()=>{
	const list = [
		{ id:1, number:32, text:'Transferencias', icon:'gc-font_down-arrow', color:"blue" },
		{ id:2, number:3728, text:"Iniciados", icon:"gc-font_dialog", color:"turquoise" },
		{ id:3, number:11712, text:"Discadas", icon:"gc-font_check", color:"purple" },
		{ id:4, number:7984, text:"No iniciadas", icon:"gc-font_waiting", color:"yellow" },
		{ id:5, number:11712, text:"Numeros", icon:"gc-font_phone", color:"lightblue" },
		{ id:6, number:10, text:"Fallidas", icon:"gc-icon_multiply", color:"red" },
		{ id:7, number:14, text:"Compromiso pago", icon:"gc-font_time", color:"pink" },
	];
	const infoList = ()=> {
		return list.map(item => <CampaignInfoItem key={item.id} {...item} />);
	};
	return(
		<div className="gc-campaign__info-list-wrapper">
			{infoList()}
	    </div>
	)
}
