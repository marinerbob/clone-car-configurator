import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { useSelector } from 'react-redux';

import Step from './step';
import { getStepUrls } from '../reduxSetup/stepsSlice/selectors';

const StepsContainer = () => {
    const stepUrlsConfig = useSelector(getStepUrls);
    const firstUrl = stepUrlsConfig.find(step => step.prevStep === null).url;

    console.log(stepUrlsConfig);

    return (
        <Switch>
            {stepUrlsConfig.map(step => (
                <Route key={step.url} path={step.url} render={() => <Step {...step}/>} />
            ))}
            <Route path="/">
                <Redirect to={firstUrl} />
            </Route>
        </Switch>
    );
};

export default StepsContainer;
