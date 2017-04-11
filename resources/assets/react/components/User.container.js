import React, { Component } from 'react';
import User from '../Models/User';

class UserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount () {
        User.getAll().then(
            (response) => this.setState({ users: response.data })
        ).catch(
            (err) => console.log(err.response)
        )
    }

    render() {
        const { users } = this.state;
        return (
            <div className="row">

                <ul className="list-group">
                    {
                        users.map( (user) => {
                            return (
                                <li className="list-group-item" key={user.id}>
                                    {user.name}
                                    <span className="badge">{user.id}</span>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>
        );
    }
}

export default UserContainer;
