import axios from 'axios';

const GET_USERS_URL = "http://localhost:8080/users";

class UserService {
    getUsers(){
        return axios.get(GET_USERS_URL);
    }

    saveUser(user){
        return axios.post(GET_USERS_URL, user);
    }
}

export default new UserService();