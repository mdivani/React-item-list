import React from 'react';
import { connect } from 'react-redux';


const SelectItems = (props) => (
        <select 
            onChange={props.onSelectChange}
            className='text-input text-input--long'>
        <option disabled selected>Select Items</option>
            {props.items && props.items.map(({name, first, second, third}) => {
                return <option 
                        className='paragraph--center'
                        key={name} 
                        value={name}>{`${name} -- ${first} -- ${second} -- ${third} `}</option>
            })}
        </select>
)

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(SelectItems);