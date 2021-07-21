import React from 'react';
import styled from 'styled-components';
import SearchInput from '@base/SearchInput';
import Link from '@base/Link';

const Banner = () => {

    return (
        <BannerWrapper>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repudiandae?</h1>
            <P>Best place to buy every things.</P>
            <SearchInput placeholder='search something'/>

            <SubBrandWrapper>
                <SubBrandMenu>
                    <BrandItem>
                        <Logo src={require('../../../assets/images/dell.svg').default} alt='Dell'/>
                        <Text>Dell</Text>
                    </BrandItem>
                    <BrandItem>
                        <Logo src={require('../../../assets/images/asus.svg').default} alt='Dell' />
                        <Text>Asus</Text>
                    </BrandItem>
                    <BrandItem>
                        <Logo src={require('../../../assets/images/apple.svg').default} alt='Dell' />
                        <Text>Apple</Text>
                    </BrandItem>
                    <BrandItem>
                        <Logo src={require('../../../assets/images/dell.svg').default} alt='Dell' />
                        <Text>Dell</Text>
                    </BrandItem>
                    <BrandItem>
                        <Logo src={require('../../../assets/images/dell.svg').default} alt='Dell' />
                        <Text>Dell</Text>
                    </BrandItem>
                    <BrandItem>
                        <Logo src={require('../../../assets/images/dell.svg').default} alt='Dell' />
                        <Text>Dell</Text>
                    </BrandItem>
                </SubBrandMenu>
            </SubBrandWrapper>
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px 50px 50px 50px;

    background: linear-gradient(96.44deg,#c5d5ff,#e2f0ff 51.56%,#d7d4ff);
`

const P = styled.p`
    font-size: 16px;
`

const SubBrandWrapper = styled.div`
    width: 60%;

    margin-top: 50px;
`

const SubBrandMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0;
    margin: 0;
`

const BrandItem = styled(Link)`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 0px 30px;
`

const Logo = styled.img`
    width: 48px;
    height: 48px;
    min-width: 40px;

    margin-bottom: 15px;
`

const Text = styled.span`
    font-size: 16px;
`



export default Banner;