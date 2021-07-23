import React, { useState } from 'react';

import { clientPaths } from '@src/routes/routes.constant';

import Banner from './components/Banner';
import Section from '@src/components/packages/base/Section';
import styled from 'styled-components';

import Card from '@src/components/card/Card';

const HomePage = () => {

    return (
        <>
            <Banner />
            <Container>
                <Section
                    title='BEST SELLER'
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Section>
                <Section
                    title='NEW PRODUCTS'
                >
                </Section>
                
            </Container>

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
