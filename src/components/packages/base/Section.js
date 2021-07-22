import React from 'react';
import styled from 'styled-components';
import { IoChevronForwardOutline } from 'react-icons/io5';

const Section = ({ children, title, subTitle }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <MoreLink href="#">
                View More
                <RightArrow />
            </MoreLink>

            <SubTitle>{subTitle}</SubTitle>
            <Content>{children}</Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #f1fafe;
    padding: 50px;
`;

const Title = styled.h2`
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    text-align: center;
`;

const RightArrow = styled(IoChevronForwardOutline)`
    color: #2196f3;
    transition: 300ms ease;
`;

const MoreLink = styled.a`
    position: absolute;
    display: flex;
    align-items: center;
    font-weight: 700;
    line-height: 24px;
    color: #2196f3;
    gap: 5px;
    top: 55px;
    right: 50px;
    transition: 300ms ease;
    &:hover {
        color: #0d47a1;
        ${RightArrow} {
            color: #0d47a1;
            transform: translateX(5px);
        }
    }
`;

const SubTitle = styled.span`
    text-align: center;
    line-height: 24px;
    padding: 10px 0 30px 0;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`;

export default Section;
