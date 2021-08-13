import Link from '@src/components/packages/base/Link';
import React, { useState } from 'react';
import {
    IoHeartOutline,
    IoCaretDown,
    IoCaretUp,
    IoCartOutline,
    IoExitOutline,
    IoPersonCircleOutline
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import userAvatar from '@src/assets/images/user.png';
import { clientPaths } from '@src/routes/routes.constant';
import authActions from '@src/redux/auth/actions';

const HeaderRightAction = ({ className }) => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.authReducer);

    const [isToggle, setIsToggle] = useState(false);

    const handleLogout = () => {
        dispatch(authActions.actions.logout(userInfo.username));
    }

    return (
        <Wrapper className={className}>
            <ActionIcon>
                <IoHeartOutline />
            </ActionIcon>


            <Link to={clientPaths.CART} style={{ display: 'flex', alignItems: 'center' }}>
                <ActionIcon>
                    <IoCartOutline />
                </ActionIcon>
            </Link>

            {
                userInfo
                    ?
                    <UserActionBox onClick={() => setIsToggle(!isToggle)} background={isToggle}>
                        <Avatar src={userInfo.avatar ? userInfo.avatar : userAvatar} />
                        <UserNameBox>
                            <UserNameText>
                                {userInfo.username}
                            </UserNameText>
                            {isToggle ? <IconUp /> : <IconDown />}
                        </UserNameBox>
                        <UserActionMenu display={isToggle ? isToggle.toString() : undefined}>

                            <MenuItems key={1} to={clientPaths.PROFILE_INFO} onClick={() => setIsToggle(false)}>
                                <IoPersonCircleOutline />
                                <span>My account info</span>
                            </MenuItems>
                            <MenuItems key={2} onClick={handleLogout}>
                                <IoExitOutline />
                                <span>Logout</span>
                            </MenuItems>
                        </UserActionMenu>
                    </UserActionBox>
                    :
                    <div>
                        <LoginButton to={clientPaths.AUTH_LOGIN}>Sign in</LoginButton>
                        | 
                        <LoginButton to={clientPaths.AUTH_REGISTER}>Register</LoginButton>
                    </div>
            }

        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ActionIcon = styled.div`

    display: flex;
    align-items: center;

    svg {
        width: 24px;
        height: 24px;
        color: #b3c8e7;

        cursor: pointer;
        :hover {
      color: #fff;
    }
  }
`;

const UserActionBox = styled.div`
    position: relative;
    max-height: 40px;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 0px 4px 0px 0px;

    background-color: ${props => props.background ? '#38475d' : ''};
    color: ${props => props.background ? '#fff' : '#b3c8e7'};
`;

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-color: #2d394b;
    vertical-align: middle;
`;
const UserNameBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 10px;

    &:hover {
        cursor: pointer !important;
        color: #fff;
    }
`;
const UserNameText = styled.span`
    font-size: 16px;
`;
const UserActionMenu = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 200px;

    background-color: #38475d;
    box-shadow: 0 4px 16px #38475dd6;
    border-radius: 4px 0px 4px 4px;

    list-style: none;
    padding: 8px 7px 8px 7px;
    margin: 0px;

    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: column;
    gap: 5px;
`;

const MenuItems = styled(Link)`
    color: #fff;
    cursor: pointer;
    padding: 7px 15px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        margin-left: 5px;
    }

    &:hover {
        background: #2d394b;
        border-radius: 3px;
        color: #fff;
    }
`;

const IconDown = styled(IoCaretDown)`
    padding: 0 5px;
    margin: 0;
    font-size: 14px;
`;
const IconUp = styled(IoCaretUp)`
    padding: 0 5px;
    margin: 0;
    font-size: 14px;
`;

const LoginButton = styled(Link)`
    padding: 0px 5px;
    color: #b3c8e7;
    &:hover {
        color: #fff;
    }
`;



export default HeaderRightAction;
