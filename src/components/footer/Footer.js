import styled from "styled-components";
import {IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter} from 'react-icons/io5';

const Footer = () => {
    return (
        <Wrapper>
            <ContentBox>
                <InfoBox>
                    <DescriptionBox>
                        <LogoBox>
                            <Logo src={require('../../assets/images/logo.svg').default}/>
                            <Name>CHAOS MARKET</Name>
                        </LogoBox>
                        <Text>
                            TemplateMonster is a marketplace where you can buy everything you need to create a website. 
                            Hundreds of independent developers sell their products here so that you could create your own unique project.
                        </Text>
                    </DescriptionBox>
                    <LinkedBox>
                        <IoLogoInstagram/>
                        <IoLogoFacebook/>
                        <IoLogoYoutube/>
                        <IoLogoTwitter/>
                    </LinkedBox>
                </InfoBox>
                <ContactsBox>
                    <Title>Products and Partners</Title>
                    <Menu>
                        <Items>WordPress Themes</Items>
                        <Items>WooCommerce Themes</Items>
                        <Items>HTML5 Templates</Items>
                        <Items>Shopify Themes</Items>
                        <Items>WZemez</Items>
                        <Items>Crocoblock</Items>
                    </Menu>
                </ContactsBox>
                <ContactsBox>
                    <Title>Company</Title>
                    <Menu>
                        <Items>WordPress Themes</Items>
                        <Items>WooCommerce Themes</Items>
                        <Items>HTML5 Templates</Items>
                        <Items>Shopify Themes</Items>
                        <Items>WZemez</Items>
                        <Items>Crocoblock</Items>
                    </Menu>
                </ContactsBox>
                <ContactsBox>
                    <Title>Support</Title>
                    <Menu>
                        <Items>WordPress Themes</Items>
                        <Items>WooCommerce Themes</Items>
                        <Items>HTML5 Templates</Items>
                        <Items>Shopify Themes</Items>
                        <Items>WZemez</Items>
                        <Items>Crocoblock</Items>
                    </Menu>
                </ContactsBox>
            </ContentBox>
            <EndBox>
                <Line />
                <CopyRight>@2021 - Developed by Diagru & Diagosos</CopyRight>
            </EndBox>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 50px 100px; 
    background: #fff;
`;

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    flex-wrap: wrap;
`;

const InfoBox = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const DescriptionBox = styled.div`
`;

const LinkedBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > svg {
        color: #767f84;
        border: 1px solid #767f84;
        border-radius: 4px;

        font-size: 2rem;

        margin: 0px 5px;
        padding: 5px;
        &:hover {
            cursor: pointer;
            color: black;
            border-color: black;
        }
    }
`;

const LogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Logo = styled.img`
    height: 40px;
    width: 40px;
    min-width: 40px;
    cursor: pointer;
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 600;
    padding: 0px 10px;
`;

const Text = styled.p`
    color: #767f84;
    padding: 5px 0px 10px 0px;
`;

const ContactsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin: 0px 50px;
`;

const Title = styled.span`
    font-size: 16px;
    margin: 10px 0px;

    font-weight: 600;
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Items = styled.a`
    padding: 3px 0px;
    color: #00a3ff;

    &:hover {
        cursor: pointer;
        color: black;
    }
`;

const EndBox = styled.div`
    width: 100%;
`;

const Line = styled.span`
    border: 1px solid #e2e2e2;
    height: 0px;

    display: flex;
    flex: 1 1 0%;

    margin: 15px 0px;
`;

const CopyRight = styled.span`
    color: #767f84;
    font-family: 'Open Sans' sans-serif;
`;

export default Footer;