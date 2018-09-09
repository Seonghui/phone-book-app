import React from 'react';
import './PhoneMain.scss';
import PhoneItem from '../PhoneItem/PhoneItem';

const PhoneMain = ({list, onRemove, onUpdate}) => {
    const PhoneMain = list.map(item => (
        <PhoneItem
            key={item.id}
            onRemove={onRemove}
            onUpdate={onUpdate}
            item={item}
        />
    ))
    return PhoneMain;
}

export default PhoneMain;