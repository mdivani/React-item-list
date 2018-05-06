import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ListForm from './ListForm';
import ListTable from './ListTable';
import Header from './Header';
import { startAddList } from '../actions/lists';

class AddListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAddList = (list) => {
        this.props.startAddList(list).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div className='content-container'>
                    <h2>Create New List</h2>
                    <ListForm handleAddList={this.handleAddList} />
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    startAddList: (list) => dispatch(startAddList(list))
});

export default connect(undefined, mapDispatchToProps)(AddListPage);