import React from 'react';
import styled from 'styled-components';
import SearchInput from '@base/SearchInput';
import Link from '@base/Link';

const Banner = () => {
    return (
        <BannerWrapper>
            <Title>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                repudiandae?
            </Title>
            <SubTitle>Best place to buy every things.</SubTitle>

            <BrandSearch placeholder="search something" />

            <SubBrandMenu>
                <BrandItem>
                    <Logo>
                        <img
                            src={require('../../../assets/images/apple.svg').default}
                            alt="Dell"
                        />
                    </Logo>
                    <Text>Apple</Text>
                </BrandItem>
                <BrandItem>
                    <Logo>
                        <img
                            src={require('../../../assets/images/asus.svg').default}
                            alt="Dell"
                        />
                    </Logo>
                    <Text>Asus</Text>
                </BrandItem>
                <BrandItem>
                    <Logo>
                        <img
                            src={require('../../../assets/images/dell.svg').default}
                            alt="Dell"
                        />
                    </Logo>
                    <Text>Dell</Text>
                </BrandItem>
                <BrandItem>
                    <Logo>
                        <img
                            src={require('../../../assets/images/apple.svg').default}
                            alt="Dell"
                        />
                    </Logo>
                    <Text>Apple</Text>
                </BrandItem>
                <BrandItem>
                    <Logo>
                        <img
                            src={require('../../../assets/images/asus.svg').default}
                            alt="Dell"
                        />
                    </Logo>
                    <Text>Asus</Text>
                </BrandItem>
                <BrandItem>
                    <Logo>
                        <img
                            src={require('../../../assets/images/dell.svg').default}
                            alt="Dell"
                        />
                    </Logo>
                    <Text>Dell</Text>
                </BrandItem>
            </SubBrandMenu>
        </BannerWrapper>
    );
};

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 80px;
  background: linear-gradient(96.44deg, #c5d5ff, #e2f0ff 51.56%, #d7d4ff);
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 39px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  line-height: 26px;
  padding: 10px 0;
`;

const BrandSearch = styled(SearchInput)`
  box-shadow: 0 7px 14px #a2a6d166;
  min-width: 30%;
  max-width: 580px;
`;

const SubBrandMenu = styled.ul`
  width: 100%;
  max-width: 1200px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 5px;
`;

const BrandItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 4px #0003;
  transition: transform 300ms ease-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  min-width: 40px;
  border-bottom: 1px solid #ebeef1;
  padding: 10px 30px;
  box-sizing: content-box;
  img {
    width: inherit;
    height: inherit;
  }
`;

const Text = styled.span`
  padding: 10px;
`;

export default Banner;
