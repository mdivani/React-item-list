import React from 'react';
import ItemForm from './ItemForm';
import ItemsTable from './ItemsTable';

const AddItemsPage = (props) => {

    return(
        <div className='content-container'>
            <h2> Add items</h2>
            <ItemForm />
            <hr />
            <ItemsTable items={[{name:'test', first:'good', second:'bad', third: 'ugly'}]} />
        </div>
    )
}

export default AddItemsPage;