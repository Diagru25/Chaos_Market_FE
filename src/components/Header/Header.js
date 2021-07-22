import React from 'react';

import HeaderRightAction from './components/HeaderRightAction';
import Navbar from './components/Navbar';
import Link from '@base/Link';

import styled from 'styled-components';
import { clientPaths } from '../../routes/routes.constant';

const Header = () => {
  return (
    <Wrapper>
      <Link to={clientPaths.HOME}>
        <Logo src={require('../../assets/images/logo.svg').default} />
      </Link>
      <Navbar />
      <RightAction />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  padding: 10px 30px 10px 20px;
  background-color: #2d394b;
  color: #fff;
  gap: 50px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  min-width: 40px;
  cursor: pointer;
`;

const RightAction = styled(HeaderRightAction)`
  margin-left: auto;
`;

export default Header;
