import './App';
import React from 'react';
import Routers from '../src/Router/Router';
import GlobalStyle from '../src/ui/styles/GlobalStyles';

class App extends React.Component {
  render() {
    return (
      <>
      <GlobalStyle/>
      <Routers />
      </>
    )
  };
};

export default App;