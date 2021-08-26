import React from 'react';
import styled from 'styled-components';

const Badge = ({children, color, background, style}) => {
    return (
        <Wrapper color={color} background={background} style={style}>
            {children}
        </Wrapper>
    )
}

Badge.defaultProps = {
    color: '#fff',
    background: '#1ab744',
    style: {}
}

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;

    color: ${(props) => props.color};
    background: ${(props) => props.background};

    min-height: 15px;
    min-width: 15px;
    padding: 0px 3px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 11px;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    transform: translate(50%, -50%);
`;

export default Badge;