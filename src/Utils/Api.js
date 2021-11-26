/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
const prod = "https://d-is-able.herokuapp.com";
const dev = "http://localhost:8080";
const baseUrl = prod;

export default {
    userLogin: baseUrl + "/api/user/login",
    userRegister: baseUrl + "/api/user/register",
    createProfile: baseUrl + "/api/profile",
    deleteUser: baseUrl + "/api/user",
    createFeed: baseUrl + "/api/feed"
};