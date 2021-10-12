import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { useSelector } from 'react-redux';

import Car from './car';
import { getStepUrls } from '../reduxSetup/stepsSlice/selectors';

const StepsContainer = () => {
    const stepUrlsConfig = useSelector(getStepUrls);
    const firstUrl = stepUrlsConfig.find(step => step.isFirst).url;

    return (
        <Switch>
            {stepUrlsConfig.map(step => (
                <Route key={step.url} path={step.url} render={() => <Car {...step}/>} />
            ))}
            <Route path="/">
                <Redirect to={firstUrl} />
            </Route>
        </Switch>
    );
};

export default StepsContainer;
