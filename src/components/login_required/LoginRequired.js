import {Redirect, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authActions from '@src/redux/auth/actions';

const LoginRequired = ({redirectLink, location, ...rest}) => {

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.authReducer);

    if(!isLoggedIn) {
        return (
            <Redirect
                to={{
                    pathname: redirectLink ? redirectLink : '/auth/login',
                    state: {
                        from: location
                    }
                }}
            />
        )
    }
    else {
        ;
        return ( 
            <Switch>
                <Route {...rest} onEnter={dispatch(authActions.actions.checkSession())}/>
            </Switch>
        )
    }
}

export default LoginRequired;