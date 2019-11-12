import React, { Component } from 'react';
import GetContent from './GetContent';
import PostContent from './PostContent';
import AuthContent from './AuthContent';
import NavBar from './NavBar';
import ExampleContent from '../containers/ExampleContent';



export default class Content extends Component {
  state = {
    get: true,
    post: false,
    auth: false,
    example: false
  };

  componentDidMount() {
    document.getElementById('get').style.backgroundColor = 'goldenrod';

  }


  handleClick = ({ target }) => {
    document.getElementById('get').style.backgroundColor = 'white';
    document.getElementById('post').style.backgroundColor = 'white';
    document.getElementById('auth').style.backgroundColor = 'white';
    document.getElementById('example').style.backgroundColor = 'white';
    document.getElementById('get').style.color = 'black';
    document.getElementById('post').style.color = 'black';
    document.getElementById('auth').style.color = 'black';
    document.getElementById('example').style.color = 'black';


    Object.keys(this.state).forEach(key => {
      if(key === target.name) {
        document.getElementById(target.name).style.backgroundColor = 'goldenrod';
        document.getElementById(target.name).style.color = 'white';

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
        {this.state.get && <GetContent />}
        {this.state.post && <PostContent />}
        {this.state.auth && <AuthContent />}
        {this.state.example && <ExampleContent />}
      </>
    );
  }


}

