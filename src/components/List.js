import React, { Component } from 'react';

const apiURL = 'https://jsonplaceholder.typicode.com/users';

class List extends Component {
  state = {
    isFetching: false,
    data: [],
    error: null,
  };

  componentDidMount() {
    this.setState({ isFetching: true });

    fetch(apiURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong...');
      })
      .then(data => this.setState({ isFetching: false, data }))
      .catch(error => this.setState({ isFetching: false, error }));
  }

  render() {
    const { isFetching, data, error } = this.state;
    if (isFetching) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    return <ul>{data.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
  }
}

export default List;
