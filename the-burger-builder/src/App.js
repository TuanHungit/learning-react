import React, { Component } from 'react';
import Layout from './components/Layout';
import Auxi from './hoc/Auxi';
class App extends Component {
  render() {
    return (
      <Auxi>
        <Layout>
          <p>Test</p>
        </Layout>
      </Auxi>
    );
  }
}

export default App;
