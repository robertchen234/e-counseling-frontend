import React from "react";
import { Link } from "react-router-dom";

class CounselorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCounselor: {}
    };
  }

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
            <h3 onClick={(e) => this.clickHandler(e, counselor)}>{counselor.name}</h3>
          </Link>
          <p>{truncatedBio}...</p>
        </div>
      </div>
    );
  }
}
export default CounselorCard;
