import React from 'react';
import { connect } from 'react-redux';
import ListTable from './ListTable';

const DashboardPage = (props) => (
  <div className='content-container'>
    {
    props.lists ? props.lists.map((list) => {
      return <ListTable key={list.name} list={list} />
    }) : <h3>No Lists to display</h3>
    }
  </div>
);

const mapStateToProps = (state) => ({
  lists: state.lists
});

export default DashboardPage;
