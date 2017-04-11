import axios from 'axios';

export default class User {

    static getAll () {
        return axios.get('/api/user')
    }

}