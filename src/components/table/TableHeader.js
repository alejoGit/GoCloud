import React from 'react';


export const TableHeader = (props)=>{
	const columns = props.columns.map((col) =>
	  <div className="gc-table__header-column" key={col}>{col}</div>
	);
	return(
		<div className="gc-table__header">
			{columns}
		</div>
	)
}
