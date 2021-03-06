import React,{useState} from "react";
import axios from "axios";
import "./FollowButton.scss";

const FollowButton = ({user, authUser}) => {

  const [hasFollowed, setHasFollowed] = useState(authUser.follows.includes(user._id) );
  const handleFollow = async () => {

    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const targetUrl = baseUrl + `/v1/users/followed/${user._id}`;
    const response = await axios.post(targetUrl);
    if (response.data.action === "unfollow"){
      setHasFollowed(false);
    }
    else if (response.data.action === "follow"){
      setHasFollowed(true);
    }
  };
  return (
    <button className="follow__user__btn" onClick={handleFollow} >
      {
        hasFollowed ? "Unfollow" : "Follow"
      }
    </button>  
  );
};

export default FollowButton;
