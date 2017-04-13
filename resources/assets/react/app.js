import Echo from "laravel-echo"
import React, { Component } from 'react';
import { render } from 'react-dom';
import UserContainer from './components/User.container';

window.axios = require('axios');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
});

if( document.getElementById('root') ) {
    render( <UserContainer /> , document.getElementById('root'))
}