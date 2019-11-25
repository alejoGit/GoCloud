import React from 'react';


export const TableBody = (props)=>{
	const rows = props.rows.map((row) =>
	  <div className="gc-table__row" key={row.id}>
	  	<div className="gc-table__row-item">{row.phone}</div>
	  	<div className="gc-table__row-item">{row.date}</div>
	  	<div className="gc-table__row-item">{row.hour}</div>
	  	<div className="gc-table__row-item">{row.duration}</div>
	  	<div className="gc-table__row-item">{row.lastStage}</div>
	  	<div className="gc-table__row-item">{row.lastStep}</div>
	  	<div className="gc-table__row-item">{row.attempts}</div>
	  </div>
	);
	return(
		<div className="gc-table__body">
			{rows}
		</div>
	)
}
