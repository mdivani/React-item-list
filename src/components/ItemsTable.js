import React from 'react';
import {connect} from 'react-redux';
import itemSelector from '../selectors/itemsSelector';

const ItemsTable = (props) => {
    console.log(props.items);
    return (
        <table className='table'>
        <thead>
            <tr className='table__row'>
                <th className='table__header'>Name</th>
                <th className='table__header'>String #1</th>
                <th className='table__header'>String #2</th>
                <th className='table__header'>String #3</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map((item) => {
                console.log(item);
                return <tr key={item.name} 
                          className='table__row'>
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

const mapStateToProps = (state, props) => {
    console.log(state.items);
        return {
        items: itemSelector(props.selectedList, state.items)
    } 
};

export default connect(mapStateToProps)(ItemsTable);