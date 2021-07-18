import React from 'react';
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import styled from 'styled-components';

const HeaderRightAction = () => {
  return (
    <Wrapper>
      <AiOutlineHeart />
      <AiOutlineShoppingCart />
      <AiOutlineUser />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  svg {
    width: 24px;
    height: 24px;
    fill: #b3c8e7;
    cursor: pointer;
    :hover {
      fill: #fff;
    }
  }
`;

export default HeaderRightAction;
