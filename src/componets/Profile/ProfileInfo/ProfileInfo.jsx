import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={s.imgLogo}>
				<img
					src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large}/>
				<ProfileStatus status={"Hello my friends"}/>
			</div>
		</div>
	);
};

export default ProfileInfo;