import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,//Чтоб можно было с другово хоста заходить
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers:     {
		"API-KEY": "db96c89d-bfd8-4d28-95ec-e7f7cea1c6f2"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
		// return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
		// return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
	},
	getProfile(userId) {
		console.warn('Obsolete method. Please profileAPI object.');
		return profileAPI.getProfile(userId);
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);

		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile );
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe });
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}