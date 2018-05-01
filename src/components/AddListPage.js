import React from 'react';
import { connect } from 'react-redux';
import ListForm from './ListForm';
import ListTable from './ListTable';
import Header from './Header';
import { startAddList } from '../actions/lists';

const AddListPage = (props) => {
    const handleAddList = (list) => {
        props.startAddList(list).then(() => {
            props.history.push('/');
        });
    }

    return (
        <div className='container'>
            <Header />
            <div className='content-container'>
                <h2>Create New List</h2>
                <ListForm handleAddList={handleAddList} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddList: (list) => dispatch(startAddList(list))
});

export default connect(undefined, mapDispatchToProps)(AddListPage);