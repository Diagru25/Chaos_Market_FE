import styled from 'styled-components';

const SubscriptionBlock = () => {
    return (
        <BoxWrapper>
            <Title>Join Our Weekly Newsletter</Title>
            <SubTitle>Get new products, freebies, and news to your inbox.</SubTitle>
            <SubscribeInput>
                <SubInput placeholder='Input your email'/>
                <SubButton>SUBSCRIBE</SubButton>
            </SubscribeInput>
        </BoxWrapper>
    )
}

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 50px 50px;

    background: linear-gradient(96.44deg, #c5d5ff, #e2ffea 51.56%, #bdf3cc);
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
`;

const SubTitle = styled.p`
    margin: 15px 0px 25px 0px;
`;

const SubscribeInput = styled.div`
    display: inline-flex;
    align-items: center;
`;

const SubInput = styled.input`
    padding: 20px;
    border: none;
    border-radius: 50px 0px 0px 50px;
    outline: none;

    min-width: 400px;
`;

const SubButton = styled.button`
    padding: 20px 30px;

    border: none;
    border-radius: 0px 50px 50px 0px;
    outline: none;

    background: black;
    color: #fff;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;


export default SubscriptionBlock;