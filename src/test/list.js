import React, { Component } from 'react';
import List1 from './list1';
/*import * as action from '../config/action';
import {connect} from 'react-redux';*/

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
  fetch("/api/data")
      .then(res => res.json())
      .then(result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        })
      .catch(error => 
            this.setState({
              isLoaded: true,
              error: error
        })
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.items);
      return (
        <ul>
          {items}
        </ul>
      );
    }
  }
}

export default  (List)