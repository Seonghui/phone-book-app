import React from 'react';
import './PhoneHeader.scss';

const PhoneHeader = () => {
    return (
        <div>
            <form>
                <input name="name" placeholder="이름을 입력하세요"></input>
                <input name="phone" placeholder="번호를 입력하세요"></input>
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default PhoneHeader;