import React from 'react';
import {connect} from 'react-redux';
import itemSelector from '../selectors/itemsSelector';
import sortByName from '../selectors/sortByName';
import OrderIcon from './OrderIcon';

const ItemsTable = (props) => {
    return (
        <table className='table table--borders table--create'>
        <thead>
            <tr className='table__row'>
                {props.hasOrder && <th className='table__header'>Order</th>}
                <th className='table__header'>Name</th>
                <th className='table__header'>String #1</th>
                <th className='table__header'>String #2</th>
                <th className='table__header'>String #3</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map((item, index) => {
                return <tr key={item.name} 
                          className='table__row'>
                          {props.hasOrder && <td className='table__data'>{++index}</td>}
                          <td className='table__data'>{item.name}</td>
                          <td className='table__data'>{item.first}</td>
                          <td className='table__data'>{item.second}</td>
                          <td className='table__data'>{item.third}</td>
                       </tr>
            })}
        </tbody>
        </table>
    );
}

const mapStateToProps = (state, props) => ({
    items: props.hasOrder ? 
    itemSelector(props.selectedList, state.items) : 
    sortByName(itemSelector(props.selectedList, state.items))
});

export default connect(mapStateToProps)(ItemsTable);