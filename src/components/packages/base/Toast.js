import useToast from '@hooks/useToast';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const Toast = ({ toast, index }) => {

    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id);
        }, 3000);

        // return () => {
        //     clearTimeout(timer);
        // };
    },[toast.id, removeToast])

    return <p>{toast.options.message}-{toast.id}</p>
}

const ToastContainer = () => {
    const test = useSelector(state => state.globalReducer.test);

    console.log(test);

    return createPortal(
        <Wrapper>
            {test.map((toast, index) => (
                <Toast key={index} toast={toast} index={index} />
            ))}
        </Wrapper>,
        document.body
    )
}

const Wrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;

    display: flex;
    padding: 15px;
    background: red;
    color: #fff;

    flex-direction: column;
`;

export default ToastContainer;