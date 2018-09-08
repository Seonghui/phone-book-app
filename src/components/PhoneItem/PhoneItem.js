import React from 'react';
import './PhoneItem.scss';

const PhoneItem = ({id, name, phone, onRemove}) => {
    return (
        <div>
            {name}{phone}
            <button
                onClick={e => {
                    e.stopPropagation();
                    onRemove(id);
                }}>
                삭제
            </button>
        </div>
    )
}

export default PhoneItem;