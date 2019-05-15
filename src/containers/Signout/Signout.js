import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import {signoutUser} from '../../actions';

export class Signout extends Component {
  constructor(){
    super()
    this.state={
      loggedOut: false
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({loggedOut: true})
    this.props.signoutUser();
  }
  render() {
    if (this.state.loggedOut) {
      return <Redirect to='/' />
    }

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
  signoutUser: ()=> dispatch(signoutUser())
});

export default connect(null, mapDispatchToProps)(Signout);