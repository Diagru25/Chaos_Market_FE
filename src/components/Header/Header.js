import React from 'react'

import HeaderRightAction from './components/HeaderRightAction'
import HeaderSearchField from './components/HeaderSearchField'
import Navbar from './components/Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <Logo src={require('../../assets/logo.svg').default} />
      <Navbar />
      <HeaderSearchField />
      <HeaderRightAction />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 10px 20px;
  background-color: #2d394b;
  color: #fff;
  gap: 50px;
`

const Logo = styled.img`
  height: 40px;
  width: 40px;
  min-width: 40px;
  cursor: pointer;
`

export default Header
