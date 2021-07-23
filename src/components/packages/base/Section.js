import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';

const Section = ({ children, title, subTitle }) => {
    return (
        <Wrapper>
            <SectionHeader>
                <TitleBox>
                    <Title>{title}</Title>
                </TitleBox>
                <Line></Line>
                <ViewMore>
                    View more
                    <RightArrow/>
                </ViewMore>
            </SectionHeader>
            <Content>{children}</Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    gap: 40px;
`;

const SectionHeader = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

const TitleBox = styled.div`
    width: fit-content;

    min-width: 200px;
    padding: 15px;

    background-color: #fff;
    border-left: 5px solid #00a3ff;


`;

const Title = styled.h2`
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    text-align: center;
`;

const Line = styled.div`
    height: 0px;
    border: 1px solid #e2e2e2;
    flex: 1 1 0%;

`
const RightArrow = styled(IoChevronForwardCircleSharp)`
    color: #2196f3;
    transition: 300ms ease;

    font-size: 1.5rem;
    padding-left: 3px;
`;
const ViewMore = styled(Link)`
    display: flex;
    align-items: center;
    padding-left: 5px;

    color: #00a3ff;

    transition: 300ms ease;

    &:hover {
        transform: translateX(5px);
        ${RightArrow} {
            transform: translateX(5px);
        }
    }
`



const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
`;

export default Section;
