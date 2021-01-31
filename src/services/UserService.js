import axios from 'axios';

const USERS_BASE_URL = "http://localhost:8080/users";

class UserService {
    getUsers(){
        return axios.get(USERS_BASE_URL);
    }

    saveUser(user){
        return axios.post(USERS_BASE_URL, user);
    }

    getUserById(id){
        return axios.get(USERS_BASE_URL + '/' + id);
    }

    updateUser(user, id){
        return axios.put(USERS_BASE_URL + '/' + id, user);
    }

    deleteUser(id){
        return axios.delete(USERS_BASE_URL + '/' + id);
    }
}

export default new UserService();