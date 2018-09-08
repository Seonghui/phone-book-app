import React, { Component } from 'react';
import './PhoneHeader.scss';

class PhoneHeader extends Component {
    state = {
        name : '',
        phone : '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({ 
            name : '',
            phone : '',
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="name" 
                        placeholder="이름을 입력하세요"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        name="phone"
                        placeholder="번호를 입력하세요"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <button type="submit">추가</button>
                </form>
            </div>
        );
    }
};

export default PhoneHeader;