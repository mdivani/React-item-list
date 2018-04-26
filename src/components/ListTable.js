import React from 'react';

const ListTable = (props) => (
    <table className='table'>
        <thead>
            <tr className='table__row'>
                <th className='table__header'>Name</th>
                <th className='table__header'>Start Date</th>
                <th className='table__header'>End Date</th>
            </tr>
        </thead>
        <tbody>
            <tr className='table__row'>
                <td className='table__data'>{list.name}</td>
                <td className='table__data'>{list.startDate}</td>
                <td className='table__data'>{list.endDate}</td>
            </tr>
        </tbody>
    </table>
);

export default ListTable;