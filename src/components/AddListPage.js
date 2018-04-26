import React from 'react';
import { connect } from 'react-redux';
import ListForm from './ListForm';
import ListTable from './ListTable';
import { addList } from '../actions/lists';

const AddListPage = (props) => {
    const handleAddList = (list) => {
        props.addList(list);
        props.history.push('/');
    }

    return (
        <div className='content-container'>
            <h2>Create New List</h2>
            <ListForm handleAddList={handleAddList} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addList: (list) => dispatch(addList(list))
});

export default connect(undefined, mapDispatchToProps)(AddListPage);