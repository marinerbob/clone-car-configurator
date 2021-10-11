import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../reduxSetup/store';

const routerLayout = ({ children }) => (
    <ConnectedRouter history={history}>
        {children}
    </ConnectedRouter>
);

export default routerLayout;