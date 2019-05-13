import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signoutUser} from '../../actions';

class Signout extends Component {
  handleSubmit=(e)=>{
    e.preventDefault();
  }
  render() {
    return (
      <section className="Signout">
        <form className="Signout-form" onSubmit={this.handleSubmit}>
          <h2>Leaving so soon?</h2>
          <div className="Signout-divider"></div>
          <span className="h-group">
            <h4>Click the button below,</h4>
            <h4>To signout of ButterFlix</h4>
          </span> 
          <input className="user-submit" type="submit" value="Signout"/>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps =(dispatch)=> ({
  signoutUser: (user)=> dispatch(signoutUser(user))
});

export default connect(null, mapDispatchToProps)(Signout);