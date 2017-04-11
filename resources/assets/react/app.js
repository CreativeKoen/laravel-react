import React, { Component } from 'react';
import { render } from 'react-dom';

import UserContainer from './components/User.container';

if( document.getElementById('root') ) {
    render( <UserContainer name="koen" /> , document.getElementById('root'))
}