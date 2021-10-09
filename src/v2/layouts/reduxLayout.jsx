import React from 'react';

import { Provider } from "react-redux";
import store from '../reduxSetup/store.js';

const reduxLayout = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default reduxLayout;