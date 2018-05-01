import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Login</h1>
      <label className='label'>Sign up with</label>
      <button className="icon icon--fb" onClick={startLogin}>
      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
