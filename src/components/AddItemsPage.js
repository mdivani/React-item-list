import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import ItemsTable from './ItemsTable';
import Header from './Header';
import { startAddItem } from '../actions/items';

class AddItemsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAddItem =(item) => {
        return this.props.startAddItem(item);
    }

    render() {
        return (
            <div className='container'>
            <Header />
                <div className='content-container'>
                    <h2> Create items</h2>
                <div className='box-layout--table'>
                    <ItemForm handleAddItem={this.handleAddItem}/>
                    <ItemsTable hasOrder={false} items={this.props.items} />
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    startAddItem: (item) => dispatch(startAddItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemsPage);