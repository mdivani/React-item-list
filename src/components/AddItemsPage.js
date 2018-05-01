import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import ItemsTable from './ItemsTable';
import Header from './Header';
import { startAddItem } from '../actions/items';

class AddItemsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSorted: false
        }
    }

    handleAddItem =(item) => {
        return this.props.startAddItem(item);
    }

    handleSortByName = () => {
        this.setState((prevState) => ({isSorted: !prevState.isSorted}));
    }

    render() {
        return (
            <div className='container'>
            <Header />
                <div className='content-container'>
                    <h2> Create items</h2>
                <div className='box-layout--table'>
                    <ItemForm 
                        isSorted={this.state.isSorted}
                        handleSortByName={this.handleSortByName}
                        handleAddItem={this.handleAddItem}/>
                    <ItemsTable 
                        hasOrder={false} 
                        isSorted={this.state.isSorted} 
                        items={this.props.items} />
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