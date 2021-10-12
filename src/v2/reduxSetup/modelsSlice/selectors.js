import { createSelector } from "@reduxjs/toolkit";
import { getModels } from '../rootSlice/selectors';

export const getCarModelById = id => state => getModels(state)[id];
export const getCarsOptions = createSelector(
    [getModels],
    (models) => {
        const modelsKeys = Object.keys(models);
        return modelsKeys.map(mkey => ({
            label: models[mkey].label,
            value: models[mkey].key
        }));
    }   
);
