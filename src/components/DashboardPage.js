import React from 'react';
import { connect } from 'react-redux';
import ListTable from './ListTable';
import ItemsTable from './ItemsTable';
import SelectItems from './SelectItems';
import Header from './Header';
import { addItemToList } from '../actions/lists';
import { selectList } from '../actions/selectedList';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemName: null
    }
  }

  handleListSelect = (selectedList) => {
    if(selectedList) {
      this.props.selectList(selectedList);
    }
  }

  handleAddItem = () => {
    if(this.state.selectedItemName) {
      const selectedItem = this.props.items.filter((item) =>{
        return item.name === this.state.selectedItemName
      })[0];
      this.props.addItemToList(this.props.selectedList, selectedItem);
    }
  }

  onSelectChange = (e) => {
    const selectedItemName = e.target.value;
    this.setState(() => ({selectedItemName}));
  }

  render() {
    return (
      <div className='container'>
      <Header />
        <div className='row'>
          <div className='col-1-of-4'>
            <h1>Lists</h1>
            {
              this.props.lists ? this.props.lists.map((list) => {
                return <ListTable 
                        handleListSelect={this.handleListSelect}
                        key={list.name} 
                        list={list} />
              }) : <h3>No Lists to display</h3>
            }
          </div>
          <div className='col-3-of-4'>
            <h1>Items</h1>
            <div className='row'>
            <div className='col-3-of-4'>
            <SelectItems 
              onSelectChange={this.onSelectChange}/>
            </div>
            <div className='col-1-of-4'>
            <button 
              disabled={this.props.lists.length === 0}
              onClick={this.handleAddItem}
              className='button'>Add Item</button>
            </div>
            </div>
              {
                this.props.selectedList && this.props.selectedList.items.length > 0 ? 
                <ItemsTable selectedList={this.props.selectedList}/> : 
                <h3>No items to display</h3>
              }
          </div>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  lists: state.lists,
  items: state.items,
  selectedList: state.selectedList || state.lists[0]
});

const mapDispatchToProps = (dispatch) => ({
  addItemToList: (list, item) => dispatch(addItemToList(list, item)),
  selectList: (list) => dispatch(selectList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
