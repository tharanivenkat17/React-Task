import React, { Component } from 'react';

class ClassUpdating extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = {
      count: 0
    };
  }

  componentDidUpdate(){
    this.setState({ count: this.state.count + 1 });
  }

  // handleIncrement = () => {
     
  // };

  render() {
    console.log('Updating');
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.componentDidUpdate}>Increment</button>
      </>
    );
  }
}

export default ClassUpdating;