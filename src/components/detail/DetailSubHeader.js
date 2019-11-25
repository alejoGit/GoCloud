import React from 'react';


export const DetailSubHeader = ()=>{
	return(
		<div className="gc-detail__subheader-wrapper">
			<div className="gc-detail__subheader-title">Detalle de campaña</div>
			<div className="gc-detail__subheader-info">
				<div className="gc-subheader-info__title">Nombre de la campaña</div>
				<div className="gc-subheader-info__data">
					<div className="gc-info-data__item"><b>Progreso discado:</b> 73%</div>
					<div className="gc-info-data__item"><b>Consumo total:</b> 02.25 min</div>
					<div className="gc-info-data__item"><b>Duración promedio llamada:</b> 24 seg</div>
				</div>
			</div>
	    </div>
	)
}

