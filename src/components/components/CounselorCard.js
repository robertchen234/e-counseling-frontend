import React from "react";
import { Link } from "react-router-dom";

const CounselorCard = (props) => {
 
let { counselor } = props;
let truncatedBio = counselor.bio.substring(0, 200);

return (
    <div className="counselor-card-container">
    <div className="counselor-card-img">
        <img src={counselor.image} alt="counselor" />
    </div>
    <div className="counselor-card-bio">
        <Link to={`/counselors/${counselor.id}`}>
        <h3>{counselor.name}</h3>
        </Link>
        <p>{truncatedBio}...</p>
    </div>
    </div>
    );
}
export default CounselorCard;
