import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCommentDollar,
  faHome,
  faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";

library.add(faCommentDollar, faHome, faHandHoldingHeart);

const Home = props => {
  return (
    <div className="home-container">
      <div className="container">
        <img
          className="banner"
          src="https://images.unsplash.com/photo-1543310291-fc26adfa0ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="banner"
        />
        <div className="banner-header">
          <h1>Counsel Me</h1>
        </div>
      </div>
      <div className="quote-pic">
        <img
          src="http://www.golfian.com/wp-content/uploads/2016/05/Short-Quotations-About-Life-037.jpg"
          alt="quote"
        />
        <img
          src="https://images.pexels.com/photos/1374525/pexels-photo-1374525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div className="banner2">
        <img
          src="https://static1.squarespace.com/static/51623c20e4b01df404d682ae/t/537e137ae4b0ab28a1f01d82/1400771459389/Inspiring+quotes+banner.jpg?format=2500w"
          alt=""
        />
      </div>
      <h1 className='vp'>Value Propositions</h1>
      <div className='vp-container'>
        <div className='vp1'>
          <FontAwesomeIcon icon={faCommentDollar} size="5x" />
          <p>Save Money</p>
        </div>
        <div className='vp2'>
          <FontAwesomeIcon icon={faHome} size="5x" />
          <p>Comfort and convenience in your own home</p>
        </div>
        <div className='vp3'>
          <FontAwesomeIcon icon={faHandHoldingHeart} size="5x" />
          <p>Cognitive Behavior Therapy</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
