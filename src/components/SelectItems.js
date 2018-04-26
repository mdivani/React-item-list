import React from 'react';
import { connect } from 'react-redux';


const SelectItems = (props) => (
        <select 
            onChange={props.onSelectChange}
            className='text-input text-input--long'>
        <option disabled selected>Add Items</option>
            {props.items && props.items.map(({name}) => {
                return <option 
                        key={name} 
                        value={name}>{name}</option>
            })}
        </select>
)

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(SelectItems);