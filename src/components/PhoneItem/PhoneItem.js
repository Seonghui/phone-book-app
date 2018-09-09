import React, { Component } from 'react';
import './PhoneItem.scss';

class PhoneItem extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''
    }
    handleRemove = () => {
        const { item, onRemove } = this.props;
        onRemove(item.id);
    }
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        const { item, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            this.setState({
                name: item.name,
                phone: item.phone
            })
        }
        if (prevState.editing && !this.state.editing) {
            onUpdate(item.id, {
              name: this.state.name,
              phone: this.state.phone
            });
        }
    }
    render() {
        const { editing } = this.state;
        if(editing) {
            return (
                <div>
                    <div>
                        <input
                        value={this.state.name}
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                        value={this.state.phone}
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }
        
        const {name, phone} = this.props.item;
        return (
            <div>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneItem;