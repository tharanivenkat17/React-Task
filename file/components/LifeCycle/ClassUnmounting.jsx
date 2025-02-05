import React, { Component } from 'react';

class ClassUnmounting extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('Component is rendered');
    return (
      <>
        <p>Unmounting Component</p>
      </>
    );
  }
}

export default ClassUnmounting;
