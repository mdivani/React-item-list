import React from 'react';
import {connect} from 'react-redux';

const ListTable = ({ list, handleListSelect, selectedList }) => {
    const isActive = selectedList && selectedList.name === list.name ? 'table--active' : '';
    return (
        <table 
            onClick={() => handleListSelect(list) }
            className={`table ${isActive} table--hover margin-top--small`}>
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
    )
};

const mapStateToProps = (state) => ({
    selectedList: state.selectedList
})

export default connect(mapStateToProps)(ListTable);