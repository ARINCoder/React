import React from 'react'
import '../UserDetailsComponent/UserDetails.css'
const UserDetails = ({ UserProfile }) => {
    const { login, avatar_url, html_url,
        starred_url, name, location, bio,
        twitter_username, followers } = UserProfile

    return (
        <div className='Profile'>
            <div className='User'>
                <img src={avatar_url} alt="user_image" />
                <h1> {login} </h1>
                <h2> {name} </h2>
                <h3>{location}</h3>
                <h4>{bio}</h4>
            </div>
            <div className='social-media'>
                <h5>{twitter_username}</h5>
                <h6>{followers}</h6>
                <h5>{starred_url}</h5>
            </div>;
        </div>
    )
}

export default UserDetails