import React from 'react';
import styled from 'styled-components';

const Detail = ({ properties, description }) => {
    return (
        <Wrapper>
            <PropertiesWrapper>
                <HeaderContainer>
                    PROPERTIES
                </HeaderContainer>
                <ContentBox>
                    <Table>
                        <tbody>
                            {
                                properties.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </Table>
                </ContentBox>
            </PropertiesWrapper>
            <DescriptionWrapper>
                <HeaderContainer>
                    DESCRIPTION
                </HeaderContainer>
                <ContentBox>
                    {description}
                </ContentBox>
            </DescriptionWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    background: #fff;
    width: 1200px;
`;

const PropertiesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 10px;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 10px;
`;

const HeaderContainer = styled.div`
    background-color: #fafafa;
    font-size: 18px;
    padding: 14px;
`;

const ContentBox = styled.div`
    padding: 10px 20px;
`;

const Table = styled.table`
    width: 60%;
    border: none;
    outline: none;
    border-spacing: 0px;

    tr {
        td {
            padding: 10px;
            &:first-child {
                font-weight: 600;
                width: 40%;
            }
        }
        &:nth-child(even) {
            background-color: #f5f5f5;
        }
    }
`;

export default Detail;


