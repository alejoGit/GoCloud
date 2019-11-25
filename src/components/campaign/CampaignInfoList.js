import React from 'react';

import { CampaignInfoItem } from './CampaignInfoItem';
export const CampaignInfoList = ()=>{
	return(
		<div className="gc-campaign__info-list-wrapper">
			<CampaignInfoItem number={32} text="Transferencias" icon="gc-font_down-arrow" color="blue" />
			<CampaignInfoItem number={3728} text="Iniciados" icon="gc-font_dialog" color="turquoise" />
			<CampaignInfoItem number={11712} text="Discadas" icon="gc-font_check" color="purple" />
			<CampaignInfoItem number={7984} text="No iniciadas" icon="gc-font_waiting" color="yellow" />
			<CampaignInfoItem number={11712} text="Numeros" icon="gc-font_phone" color="lightblue" />
			<CampaignInfoItem number={10} text="Fallidas" icon="gc-icon_multiply" color="red" />
			<CampaignInfoItem number={14} text="Compromiso pago" icon="gc-font_time" color="pink" />
	    </div>
	)
}
