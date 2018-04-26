import React from 'react';
import { connect } from 'react-redux';
import ListTable from './ListTable';
import ItemsTable from './ItemsTable';
import SelectItems from './SelectItems';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedList: props.lists ? props.lists[0] : null
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-1-of-4'>
            <h1>Lists</h1>
            {
              this.props.lists ? this.props.lists.map((list) => {
                return <ListTable key={list.name} list={list} />
              }) : <h3>No Lists to display</h3>
            }
          </div>
          <div className='col-3-of-4'>
            <h1>Items</h1>
            <SelectItems />
              {
                this.state.selectedList.items.length > 0 ? 
                <ItemsTable selectedList={this.state.selectedList} /> : 
                <h3>No items to display</h3>
              }
          </div>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  lists: state.lists
});

export default connect(mapStateToProps)(DashboardPage);
