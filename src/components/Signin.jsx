import React, { Component } from 'react';
import { isUserSignedIn } from 'blockstack';

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSignIn } = this.props;

    return (
      <div>
        <p>
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
    );
  }
}
