import React from 'react';
import { hot } from 'react-hot-loader';
import PreData from './components/pre-data';
import SearchBar from './components/search-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      page: 1,
    };
  }

  handleSearch = (search = '') => {
    const corsPrefix = 'https://cors-anywhere.herokuapp.com/';
    const jobsUrl = 'https://jobs.github.com/positions.json';
    const { page } = this.state;
    const parameters = new URLSearchParams();
    parameters.set('search', search);
    parameters.set('page', page);
    fetch(corsPrefix + jobsUrl + '?' + parameters)
      .then(response => response.json())
      .then(jobs => {
        console.log('***', jobs);
        this.setState({ jobs });
      });
  };

  render() {
    const { jobs } = this.state;
    return (
      <div>
        <SearchBar onHandleSubmit={this.handleSearch} />
        <PreData data={jobs} />
      </div>
    );
  }
}

export default hot(module)(App);
