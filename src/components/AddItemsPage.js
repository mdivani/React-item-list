import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import ItemsTable from './ItemsTable';

const AddItemsPage = (props) => {

    return(
        <div className='content-container'>
            <h2> Add items</h2>
            <ItemForm />
            <hr />
            <ItemsTable items={props.items} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(AddItemsPage);