import React from 'react';
import './PhoneMain.scss';
import PhoneItem from '../PhoneItem/PhoneItem';

const PhoneMain = ({list}) => {
    const PhoneMain = list.map(item => (
        <PhoneItem
            id={item.id}
            key={item.id}
            name={item.name}
            phone={item.phone}
        />
    ))

    return PhoneMain;
}

export default PhoneMain;