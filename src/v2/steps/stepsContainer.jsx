import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';

import Car from './car';
import { getStepUrls, getCurrentStepUrl } from '../reduxSetup/stepsSlice/selectors';

import { push } from 'connected-react-router';

const StepsContainer = () => {
    const dispatch = useDispatch();
    const stepUrlsConfig = useSelector(getStepUrls);
    const currentStep = useSelector(getCurrentStepUrl);
    const firstUrl = stepUrlsConfig.find(step => step.isFirst).url;

    useEffect(() => {
        dispatch(push(currentStep));
    }, [currentStep, dispatch]);


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
