import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Banner from './components/Banner';
import Section from '@src/components/packages/base/Section';
import Card from '@src/components/card/Card';
import SubscriptionBlock from '@src/components/subscription_block/SubscriptionBlock';

import client_HomeActions from '@src/redux/client/home_page/actions';


const HomePage = () => {
    const dispatch = useDispatch();
    const bestSellerProducts = useSelector(state => state.client_HomeReducer.bestSellerProducts);

    useEffect(() => {
        dispatch(client_HomeActions.actions.getListBestSellerProduct());
    }, [dispatch])

    return (
        <>
            <Banner />
            <Container>
                <Section
                    title='BEST SELLER'
                >
                    {
                        bestSellerProducts.isGetBestSellerProductPending
                            ?
                            <>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </>
                            :
                            bestSellerProducts.items.map((product, index) => <Card key={index} product={product} />)
                    }

                </Section>
                <Section
                    title='NEW PRODUCTS'
                >
                </Section>
            </Container>
            <SubscriptionBlock />
        </>
    );
};

const Container = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;

    margin: 0px 50px;
`

export default HomePage;
