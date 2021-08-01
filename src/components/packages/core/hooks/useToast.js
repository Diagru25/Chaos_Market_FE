import globalActions from '@src/redux/global/actions';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useToast = () => {

    const dispatch = useDispatch();

    const addToast = useCallback((options) => {
        const id = Math.floor(Math.random() * 100);
        const defaultOption = {
            id: null,
            title: '',
            description: '',
            type: 'success',
            isClosable: false
        }
        const cloneOptions = { ...defaultOption, id, ...options };
        dispatch(globalActions.actions.addToast(cloneOptions));
    }, [dispatch])

    const removeToast = useCallback((id) => {
        dispatch(globalActions.actions.removeToast(id));
    }, [dispatch])

    return { addToast, removeToast };
}

export default useToast;