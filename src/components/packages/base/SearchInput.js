import styled from "styled-components";
import { IoSearch } from 'react-icons/io5';

const SearchInput = ({ w, placeholder, className, style, ...rest}) => {
    return (
        <FormWrapper w={w} className={className}>
            <FormInput placeholder={placeholder} style={style} {...rest}>
            </FormInput>
            <ButtonSearch>
                <SearchIcon />
            </ButtonSearch>
        </FormWrapper>

    )
}

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
`;

const FormInput = styled.input`
  display: flex;
  border: 1px solid #eee;
  border-radius: 6px;
  outline: none;
  margin: 0;
  padding: 20px 20px;
  width: 100%;
  background-color: #fff;
`;

const ButtonSearch = styled.button`
    margin: 0;
    padding: 15px 14px 13px 14px;
    color: #99a6b9;
    background-color: #fff;
    border: none;
    outline: none;
    position: absolute;
    right: 1px;
    top: 5px;
    &:hover{
        color: black;
        cursor: pointer;
    }
`

const SearchIcon = styled(IoSearch)`
    font-size: 1.5em;
    margin: 0;
    padding: 0;
`

export default SearchInput;