import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

// const ProfileInfo = (props) => {
const ProfileInfo = ({profile, status, updateStatus}) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={s.imgLogo}>
				<img
					src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
			</div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large}/>
				{/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}{/*//На классах*/}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>{/*//На хуках*/}
			</div>
		</div>
	);
};

export default ProfileInfo;