import React from 'react';
import { connect } from 'react-redux';
import ListForm from './ListForm';

const AddListPage = (props) => {
    return (
        <div className='content-container'>
            <h2>Create New List</h2>
            <ListForm />
        </div>
    )
}

export default AddListPage;