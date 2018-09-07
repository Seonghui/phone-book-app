import React, { Component } from 'react';
import PhoneHeader from './components/PhoneHeader'
import PhoneMain from './components/PhoneMain'
import './App.scss';

class App extends Component {
  id = 3;

  state = {
    list: [
      {
        id: 0,
        name: '피카츄',
        phone: '010-1234-5678'
      },
      {
        id: 1,
        name: '라이츄',
        phone: '010-9101-1121'
      },
      {
        id: 2,
        name: '파이리',
        phone: '010-3141-5161'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <PhoneHeader />
        <PhoneMain list={this.state.list}/>
      </div>
    );
  }
}

export default App;
