import React from 'react';
import { hot } from 'react-hot-loader';
import JobsSection from './components/jobs-section/jobs-section';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // rudiment?
  }

  render() {
    return <JobsSection />;
  }
}

export default hot(module)(App);
