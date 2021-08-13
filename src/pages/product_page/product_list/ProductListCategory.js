import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Card from '@src/components/card/Card';


const ProductListCategory = () => {

    const productList = useSelector(state => state.productReducer.productList);

    return (
        <Wrapper>
            <PageTitle>
                breadcum

            </PageTitle>
            <Container>
                <LeftFilterWrapper>

                </LeftFilterWrapper>
                <ContentWrapper>
                    <Card/>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ContentWrapper>
            </Container>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 40px;
    background: #f5f5f5;
    padding: 1% 0;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    gap: 10px;

    padding: 0px 50px;
`;

const LeftFilterWrapper = styled.div`
    padding: 0px 10px;
    background: #fff;
    min-width: 260px;
`;

const ContentWrapper = styled.div`
    padding: 20px;
    background: #fff;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
`;

const PageTitle = styled.div`
    display: flex;
    width: 100%;
`;

export default ProductListCategory;