import React, { useState, useEffect } from 'react';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import loadingGif from '../../assets/robot-loader.gif';
export const Table = ()=>{
	const tableColumns = ['Teléfono', 'Fecha', 'Hora', 'Duración', 'Últ.Etapa', 'Últ.Paso', 'Intentos'];
	const [calls, setCalls] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
	    fetch('http://ec2-52-38-183-230.us-west-2.compute.amazonaws.com/api/calls')
            .then(res => res.json())
            .then((response) => {
                setCalls(response)
                setLoading(false)
            })
	}, []);

	
	function getLoading(){
		if(loading){
			return( 
				<div className="gc-table__loader-wrapper">
					<div className="gc-table__loader-message">Cargando información...</div>
					<img
	    			className="gc-table__loader"
	                src={loadingGif}
               	 	alt="Gocloud Loading"/>
               	</div>
            );
		}

	}

	return(
		<div className="gc-table__wrapper">
			<TableHeader columns={tableColumns} /> 
			{getLoading()}
			<TableBody rows={calls} />
	    </div>
	)
}
