import React from "react";
import RepositoryList from "./RepositoryList";
import "./UserCard.css"; // Import the CSS file


const UserCard = ( {userData} ) => {

    return (
        <div className="UserCard">
            <div className="userProfile">
                {userData && 
                <img src={userData.avatar_url} alt="User Profile" />
                }
                <h2> {userData.login} </h2>
                {userData.name && <h3>{userData.name}</h3>}
                <h4> {userData.login} has {userData.followers} followers</h4>
                <h4> {userData.login} is following {userData.following} profiles</h4>
            </div>
            {userData && <RepositoryList repositories_url={userData.repos_url}/>}
        </div>
    );

}

export default UserCard