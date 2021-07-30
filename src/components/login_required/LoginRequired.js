import {Redirect, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authActions from '@src/redux/auth/actions';

const LoginRequired = ({redirectLink, location, ...rest}) => {

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.authReducer);

    console.log(isLoggedIn)

    if(!isLoggedIn) {
        return (
            <Redirect
                to={{
                    pathname: redirectLink ? redirectLink : '',
                    state: location
                }}
            />
        )
    }
    else {
        dispatch(authActions.actions.checkSession());
        return ( 
            <Switch>
                <Route {...rest} />
            </Switch>
        )
    }
}

export default LoginRequired;