import React from 'react';
import './PhoneItem.scss';

const PhoneItem = ({name, phone}) => {
    return (
        <div>
            {name}{phone}
        </div>
    )
}

export default PhoneItem;