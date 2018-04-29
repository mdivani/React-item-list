import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { startLogout } from '../actions/auth.js';


export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="button button--link" to="/list">
        Create List
        </Link>
        <Link className="button button--link" to="/item">
        Create item
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
