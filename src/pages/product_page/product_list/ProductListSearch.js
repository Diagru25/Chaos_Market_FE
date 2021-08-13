import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Card from '@src/components/card/Card';


const ProductListSearch = () => {

    const productList = useSelector(state => state.productReducer.productList);

    return (
        <Wrapper>
            <PageTitle>{productList.pageTitle}</PageTitle>
            <Card/>
            dajodaodaodjsj
        </Wrapper>
    )
}

const Wrapper = styled.div`

    padding: 25px;

`;

const PageTitle = styled.div`

`;

export default ProductListSearch;