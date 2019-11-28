import React, { Component } from 'react';
import GetContent from './GetContent';
import PostContent from './PostContent';
import AuthContent from './AuthContent';
import NavBar from './NavBar';
import ExampleContent from '../containers/ExampleContent';
import styles from './ContentHeader.css';


export default class Content extends Component {
  state = {
    get: false,
    post: false,
    auth: false,
    example: true
  };

  handleClick = ({ target }) => {
    document.getElementById('get').classList.remove(`${styles.selected}`);
    document.getElementById('post').classList.remove(`${styles.selected}`);
    document.getElementById('auth').classList.remove(`${styles.selected}`);
    document.getElementById('example').classList.remove(`${styles.selected}`);


    Object.keys(this.state).forEach(key => {
      if(key === target.name) {
        document.getElementById(target.name).classList.add(`${styles.selected}`);

        this.setState({
          [key]: true
        });
      } else {
        this.setState({
          [key]: false

        });

      }
    });
  };

  render() {
    return (
      <>
        <NavBar handleClick={this.handleClick} state={this.state} />
        {this.state.example && <ExampleContent />}
        {this.state.get && <GetContent />}
        {this.state.post && <PostContent />}
        {this.state.auth && <AuthContent />}
      </>
    );
  }


}

