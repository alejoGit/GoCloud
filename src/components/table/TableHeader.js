import React from 'react';


export const TableHeader = ({columns})=>{
	const renderColumns = columns.map((col) =>
	  <div className="gc-table__header-column" key={col}>{col}</div>
	);
	return(
		<div className="gc-table__header">
			{renderColumns}
		</div>
	)
}
