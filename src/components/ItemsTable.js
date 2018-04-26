import React from 'react';

const ItemsTable = (props) => (
    <table className='table'>
        <tr className='table__row'>
            <th className='table__header'>Name</th>
            <th className='table__header'>String #1</th>
            <th className='table__header'>String #2</th>
            <th className='table__header'>String #3</th>
        </tr>
        {props.items.map((item) => {
            return <tr key={item.name} 
                      className='table__row'>
                      <td className='table__data'>{item.name}</td>
                      <td className='table__data'>{item.first}</td>
                      <td className='table__data'>{item.second}</td>
                      <td className='table__data'>{item.third}</td>
                   </tr>
        })}
    </table>
)

export default ItemsTable;