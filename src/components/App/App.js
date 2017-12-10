import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

class App extends Component {

  componentDidMount() {
      this.props.actions.getTagline("10215062776", 2)
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Fullstack!</h2>
        </div>
        <br />
        <div style={{ padding: '30px' }}>{JSON.stringify(this.props.tagline)}</div>
      </div>
    );
  }
}

export default App;
