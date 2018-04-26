import React from 'react';
import { connect } from 'react-redux';


const SelectItems = (props) => (
    <div className='row'>
        <select className='text-input'>
        <option disabled selected>Add Items</option>
            {props.items && props.items.map(({name}) => {
                return <option 
                        key={name} 
                        value={name}>{name}</option>
            })}
        </select>
    </div>
)

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(SelectItems);