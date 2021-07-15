import React from 'react'
import styled from 'styled-components'

const Input = ({ placeholder }) => {
    return (
        <FormField>
            <FormInput type='text' placeholder=' ' />
            <FormLabel htmlFor='name'>{placeholder || 'Placeholder'}</FormLabel>
        </FormField>
    )
}

const FormField = styled.div`
  position: relative;
`

const FormLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 21px;
  user-select: none;
  color: #999;
  pointer-events: none;
  transition: 0.25s ease;
`

const FormInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  height: 30px;
  width: 100%;
  transition: 0.25s ease;
  outline: none;
  &:focus {
    border-color: #6a5af9;
  }
  &:not(:placeholder-shown) + ${FormLabel}, &:focus + ${FormLabel} {
    top: 0;
    padding: 0 5px;
    display: inline-block;
    background-color: white;
    color: #6a5af9;
    font-size: 12px;
  }
`
export default Input
