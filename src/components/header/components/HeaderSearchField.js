import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const HeaderSearchField = ({ value, onChange, onSearch }) => {
  return (
    <FormWrapper>
      <SearchInput type="text" placeholder="search somethings..." />
      <ButtonSearch>
        <SearchIcon />
      </ButtonSearch>
    </FormWrapper>
  );
};

HeaderSearchField.defaultProps = {
  onChange: () => {},
  onSearch: () => {},
};

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1 1 auto;
`;

const SearchInput = styled.input`
  background: #fff;
  box-shadow: none;
  color: #243238;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  display: none;
`;

const ButtonSearch = styled.button`
  display: none;
  position: absolute;
  background-color: #fff;
  border: none;
  right: 5px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 20px;
  fill: #99a6b9;
  cursor: pointer;
  &:hover {
    fill: #333;
  }
`;

export default HeaderSearchField;
