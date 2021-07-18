import React, { useEffect, useState } from 'react';
import {
  AiTwotoneAppstore,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import globalAction from '../../../redux/global/actions';

const Navbar = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.globalReducer.categories);
  const [isToggle, setIsToggle] = useState(false);

  console.log(categories);

  useEffect(() => {
    dispatch(globalAction.actions.getListCategories());
  }, []);

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <DropdownButton onClick={toggleMenu} background={isToggle}>
        <AiTwotoneAppstore />
        <span>All Products</span>
        {isToggle ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </DropdownButton>

      <DropdownContent display={isToggle ? isToggle.toString() : undefined}>
        <DropdownList>
          {categories.items.map((element, index) => (
            <li key={index}>{element.name}</li>
          ))}
        </DropdownList>
      </DropdownContent>
    </div>
  );
};

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.background ? '#38475d' : '#00a3ff')};
  min-width: 260px;
  border-radius: 3px;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  text-decoration: none;
  gap: 15px;
  svg:first-child {
    width: 20px;
    height: 20px;
  }
  svg:last-child {
    margin-left: auto;
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: absolute;
  min-width: 260px;
  background-color: #38475d;
  box-shadow: 0 4px 16px #38475d66;
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: none;
  margin: 0;
  padding: 8px 7px 8px 7px;
  li {
    cursor: pointer;
    padding: 7px 15px;
    font-size: 14px;
    &:hover {
      background: #2d394b;
      border-radius: 3px;
    }
  }
`;

export default Navbar;
