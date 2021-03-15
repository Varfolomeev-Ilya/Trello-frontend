import './App';
import React from 'react';
import Header from './Header/Header'
import SignUp from '../SignUp/SignUp'

class App extends React.Component {

  render() {
    return (
      <>
      <Header/>
      <SignUp/>
      </>
    );
  };
}

export default App;
