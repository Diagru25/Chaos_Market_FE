// @flow 
import * as React from 'react';
import styled from 'styled-components';
import './Input.css';

const Input = ({ placeholder }) => {
    return (
        // <Wrapper>
        //     <CustomInput placeholder=" "/>
        //     <CustomLabel>
        //         {placeholder || 'placeholder'}
        //     </CustomLabel>
        // </Wrapper>

        <div className="form-field">
            <input type="text" className="form-input" placeholder=" "/>
            <label htmlFor="name" className="form-label">
                {placeholder || 'Placeholder'}
            </label>
        </div>
    );
};

const Wrapper = styled.div`
    position: relative;
`

const CustomLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 21px;

    transform: translateY(-50%);
    transition: 0.25s ease;

    user-select: none;
    color: #999;
    pointer-events: none;
    font-size: 14px;
`

const CustomInput = styled.input`
    outline: none;
    padding: 10px 20px;
    border: 1px solid #eee;
    border-radius: 4px;
    width: 100%;
    height: 30px;

    font-size: 14px;

    transition: 0.25s ease;

    &:not(:placeholder-shown) + ${CustomLabel},
    &:focus {
        border-color: #6a5af9;
        
        & + ${CustomLabel} {
            top: 0;
            padding: 0 5px;
            display: inline-block;
            background-color: white;

            color: #6a5af9;
            font-size: 12px

        }
    }
    
`
export default Input;