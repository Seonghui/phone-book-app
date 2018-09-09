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
    ],
    keyword: ''
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleCreate = (data) => {
    const { list } = this.state;
    this.setState({
      list: list.concat({
        id: this.id++,
        ...data
      })
    })
  }

  handleRemove = (id) => {
    const { list } = this.state;
    this.setState({
      list: list.filter(item => 
        item.id !== id
        )
      })
  }

  handleUpdate = (id, data) => {
    const { list } = this.state;
    this.setState({
      list: list.map(item => (
        item.id === id
        ? {...item, ...data}
        : item
      ))
    })
  }

  render() {
    const { list, keyword } = this.state;
    const filteredList = list.filter(
      item => item.name.indexOf(keyword) !== -1
    );
    return (
      <div className="App">
        <PhoneHeader onCreate={this.handleCreate} keyword={this.state.list.keyword}/>
        <input
          placeholder="검색 할 이름을 입력하세요.."
          onChange={this.handleChange}
          value={keyword}
        />
        <PhoneMain 
          list={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
