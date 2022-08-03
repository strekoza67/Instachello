import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "003974e6-5265-46a7-b139-8a5a894f2ef6",
  },
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const friendsAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
}

export const followAPI = {
  followUser(userId) {
    return instance.post(`follow/${userId}`);
  }
}

export const unfollowAPI = {
  followUser(userId) {
    return instance.delete(`follow/${userId}`);
  }
}


