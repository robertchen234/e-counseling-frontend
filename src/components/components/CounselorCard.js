import React from "react";

import { Link } from "react-router-dom";

const CounselorCard = (props) => {
 
let { counselor } = props;
let truncatedBio = counselor.bio.substring(0, 200);

<<<<<<< HEAD
  clickHandler(e, counselor) {
    this.setState({
      chosenCounselor: counselor
    });
  }
  render() {
    let { counselor } = this.props;
    let truncatedBio = counselor.bio.substring(0, 200);

    return (
      <div className="counselor-card-container">
        <div className="counselor-card-img">
          <img src={counselor.image} alt="counselor" />
        </div>
        <div className="counselor-card-bio">
          <Link to={`/counselorprofile/${counselor.id}`}>
            <h3 onClick={e => this.clickHandler(e, counselor)}>
              {counselor.name}
            </h3>
          </Link>
          <p>{truncatedBio}...</p>
        </div>
      </div>
=======
return (
    <div className="counselor-card-container">
    <div className="counselor-card-img">
        <img className='counselor-img' src={counselor.image} alt="counselor" />
    </div>
    <div className="counselor-card-bio">
        <Link to={`/counselors/${counselor.id}`}>
        <h3>{counselor.name}</h3>
        </Link>
        <p>{truncatedBio}...</p>
    </div>
    </div>
>>>>>>> 04daecd31f5ed9a57af9c0175b656fe3f62a468f
    );
}
export default CounselorCard;
