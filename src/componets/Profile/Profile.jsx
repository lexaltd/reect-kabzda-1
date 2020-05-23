import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
					{/*<ProfileInfo/>*/}
					<ProfileInfo savePhoto={props.savePhoto}
											 isOwner={props.isOwner}
											 profile={props.profile}
											 status={props.status}
											 saveProfile={props.saveProfile}
											 updateStatus={props.updateStatus}/>
					{/*<MyPostsContainer store={props.store} />*/}
					<MyPostsContainer />
        </div>
    );
};

export default Profile;