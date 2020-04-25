import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
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
	}
}