import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import ItemsTable from './ItemsTable';
import Header from './Header';

const AddItemsPage = (props) => {

    return(
        <div className='container'>
        <Header />
            <div className='content-container'>
                <h2> Create items</h2>
            <div className='box-layout--table'>
                <ItemForm />
                <ItemsTable hasOrder={false} items={props.items} />
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(AddItemsPage);