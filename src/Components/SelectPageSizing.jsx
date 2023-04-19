import React from 'react';
import { useState } from 'react';

const SelectPageSizing = ({pageSizing}) => {
    const [pageSize, setPageSize] = useState('');

    return(          
    <select className="form-select" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
        <option value="">Cantidad a mostrar</option>
        {pageSizing.map((page) => (
        <option key={page.id} value={page.value}>
            {page.value}
        </option>
        ))}
    </select>
    )
}

export default SelectPageSizing;


    