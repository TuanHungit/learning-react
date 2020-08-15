import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Auxi from './hoc/Auxi';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <Auxi>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Auxi>
    );
  }
}

export default App;
