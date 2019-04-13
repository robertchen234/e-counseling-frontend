import React, { Component, Link } from "react";
import Profile from "./Profile.jsx";
import Signin from "./Signin.jsx";
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut
} from "blockstack";
import { Route, Switch, withRouter } from "react-router-dom";
import CounselorContainer from "./containers/CounselorContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counselors: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(data => {
        let counselorList = data.filter(user => user.role === "counselor");
        this.setState({
          counselors: counselorList
        });
      });
  }

  handleSignIn(e) {
    e.preventDefault();
    redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          {!isUserSignedIn() ? (
            <Signin handleSignIn={this.handleSignIn} />
          ) : (
            <Profile handleSignOut={this.handleSignOut} />
          )}
          <div>
            <Switch>
              <Route
                path="/counselorprofile/:id"
                render={() => (
                  <CounselorProfile counselors={this.state.counselors} />
                )}
              />

              <Route
                path="/counselors"
                render={() => (
                  <CounselorContainer counselors={this.state.counselors} />
                )}
              />

              <Route
                path="/"
                render={() => (
                  <CounselorContainer counselors={this.state.counselors} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then(userData => {
        window.location = window.location.origin;
      });
    }
  }
}
export default withRouter(App);
