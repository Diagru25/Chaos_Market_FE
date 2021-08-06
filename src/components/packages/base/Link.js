import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import styled from 'styled-components';


const Link = ({children, style, className, title, onClick, to, ...rest}) => {

    const handleClick = (e) => {
        onClick(e);
    }

    if(!to) {
        return (
            <CustomLink
                to='#'
                className={className}
                style={style}
                onClick={handleClick}
                {...rest}
            >
                {children}
            </CustomLink>
        )
    }

    return (
        <CustomLink
            to={to}
            title={title}
            className={className}
            style={style}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </CustomLink>
    )
}

const CustomLink = styled(ReactRouterLink)`

    padding: 0;
    margin: 0;
    color: black;
    text-decoration: none;
    transition: 0.3s ease;

    align-items: center;
    &:hover {
        color: #00a3ff;
    }

`

Link.defaultProps = {
    onClick: () => {}
}

export default Link;