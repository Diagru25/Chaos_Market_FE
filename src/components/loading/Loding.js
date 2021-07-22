import styled, { keyframes } from 'styled-components';

const Loading = () => {
    return (
        <Spinner>

        </Spinner>
    )
}

const spinner = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    &:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 60px;
        width: 60px;
        margin-top: -30px;
        margin-left: -30px;
        border-radius: 50%;
        border-top: 2px solid coral;
        border-right: 2px solid transparent;
        animation: ${spinner} 0.7s linear infinite;
    }
`

export default Loading;
