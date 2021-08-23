import Link from '@src/components/packages/base/Link';
import { clientPaths } from '@src/routes/routes.constant';
import React from 'react';
import styled from 'styled-components';
import cartNullImg from '@src/assets/images/cart_null.png';

const CartNull = () => {
    return (
        <Wrapper>
            <img src={cartNullImg} alt='image'/>
            <Text>There are no products in your cart.</Text>
            <ContinueButton to={clientPaths.HOME}>
                Buy something
            </ContinueButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0px;
    align-items: center;
`;

const Text = styled.div`
    font-size: 18px;
`;

const ContinueButton = styled(Link)`
    padding: 15px;
    background: #ee4d2d;
    color: #fff;
    border-radius: 4px;
    
    width: fit-content;

    &:hover {
        color: #fff;
        opacity: 0.8;
    }
`;

export default CartNull;