import React, { Component } from 'react';
import styles from './Home.scss';

import { User as UserAPI } from '../../api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const users = await UserAPI.getList();

      this.setState({
        users,
      });
    } catch (err) {
      alert(err.message);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className="display-3">Sample Application</h1>
        <p className="lead">This is my sample application using React and ReactStrap for Bootstrap 4</p>
        <ul>
          {this.state.users.length > 0 && this.state.users.map(user =>
            <li key={user.id}>{user.name}</li>
          )}
        </ul>

    </div>
    );
  }
}

export default Home;
