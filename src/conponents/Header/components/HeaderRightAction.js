// @flow 
import React from 'react';
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

const HeaderRightAction = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <AiOutlineHeart className='header-icons' />
            <AiOutlineShoppingCart className='header-icons' />
            <AiOutlineUser className='header-icons' />
        </div>
    );
};

export default HeaderRightAction;