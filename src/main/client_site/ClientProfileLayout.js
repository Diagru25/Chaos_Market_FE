import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import LoginRequired from '@src/components/login_required/LoginRequired';
import authActions from '@src/redux/auth/actions';
import { clientPaths } from '@src/routes/routes.constant';

const ClientProfileLayout = () => {

    const dispatch = useDispatch();
    return (
        <Route
            path='/profile'
            onEnter={dispatch(authActions.actions.checkSession())}
        >
            <div>
                <div>Top bar</div>
                <Switch>
                    <LoginRequired
                        exact
                        component={() => <div>OOOOOOOOOOO</div>}
                        path={clientPaths.PROFILE_INFO}
                        redirectLink={clientPaths.AUTH_LOGIN}
                    />
                </Switch>
            </div>
        </Route>
    )
}

export default ClientProfileLayout