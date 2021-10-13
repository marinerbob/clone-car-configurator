import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { updateStep } from '../reduxSetup/stepsSlice';

const withStepsUpdate = Component => props => {
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(updateStep({
            step: props.name
        }));
    }, [dispatch]);
  
    return <Component {...props} />
  };

export default withStepsUpdate;