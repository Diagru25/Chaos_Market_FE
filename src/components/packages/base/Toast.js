import useToast from '@hooks/useToast';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import styled, { keyframes } from 'styled-components';
import {
    IoClose,
    IoInformationCircleOutline,
    IoCheckmarkCircleOutline,
    IoAlertCircleOutline
} from 'react-icons/io5'

const Toast = ({ toast, index }) => {

    const { removeToast } = useToast();

    useEffect(() => {
        if (!toast.isClosable) {
            setTimeout(() => {
                removeToast(toast.id);
            }, 5000);
        }
    }, [toast.id, removeToast, toast.isClosable])

    const renderIcon = () => {
        switch (toast.type) {
            case 'success':
                return <IoCheckmarkCircleOutline />
            case 'info':
                return <IoInformationCircleOutline />
            case 'error':
                return <IoAlertCircleOutline />
            case 'warning':
                return <IoAlertCircleOutline />
            default:
                return <IoInformationCircleOutline />
        }
    }

    const handleClick = () => {
        removeToast(toast.id);
    }

    return (
        <ToastWrapper type={toast.type} id='toast'>
            <ToastTitleBox>
                <Icon>{renderIcon()}</Icon>
                <Title>{toast.title}-{toast.id}</Title>
            </ToastTitleBox>
            <ToastDescription>
                {toast.description}
            </ToastDescription>
            {
                toast.isClosable ? <CloseButton onClick={handleClick} /> : null
            }
        </ToastWrapper>
    )
}

const ToastContainer = () => {
    const toasts = useSelector(state => state.globalReducer.toasts);

    return createPortal(
        <Wrapper>
            {toasts.map((toast, index) => (
                <Toast key={index} toast={toast} index={index} />
            ))}
        </Wrapper>,
        document.body
    )
}

const fadeIn = keyframes`
    from {
       transform: translateX(100%);
       opacity: 0;
    }

    to {
        transform: translateX(0%);
        opacity: 1
    }
`;

const fadeOut = keyframes`
    from {
       transform: translateX(0%);
       opacity: : 1;
    }

    to {
        transform: translateX(120%);
        opacity: 0;
    }
`;
const Wrapper = styled.div`
    position: fixed;
    right: 0;
    top: 64px;
    z-index: 1;

    display: flex;
    padding: 15px;
    flex-direction: column;
`;

const ToastWrapper = styled.div`
    background: ${props => {
        switch (props.type) {
            case 'success':
                return '#38a169';
            case 'info':
                return '#3182ce';
            case 'error':
                return '#e53e3e';
            case 'warning':
                return '#dd6b20';
            default: return '#3182ce'
        }
    }};
    color: #fff;
    padding: 12px 32px 12px 16px;
    margin: 5px 0px;

    position: relative;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 4.5s; 
`;

const ToastTitleBox = styled.div`
    padding: 0;
    margin-bottom: 5px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Icon = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;

const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const ToastDescription = styled.p`
    padding-left: 30px;
    max-width: 200px;
`;

const CloseButton = styled(IoClose)`
    position: absolute;
    top: 5px;
    right: 0;
    cursor: pointer;
`;

export default ToastContainer;