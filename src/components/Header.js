import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="header__title" to="/list">
        <h3>Create List</h3>
        </Link>
        <Link className="header__title" to="/item">
        <h3>Create item</h3>
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
