import { createSelector } from "@reduxjs/toolkit";
import { getCurrentConfig, getModels } from '../rootSlice/selectors';

export const getCurrentModel = state => getCurrentConfig(state).currentModel;
export const getConfig = state => getCurrentConfig(state).carConfig;

export const getCurrentCarConfig = createSelector(
    [getCurrentModel, getConfig],
    (model, config) => {
        return config[model];
    }
);

export const getCurrentCarModel = createSelector(
    [getCurrentModel, getModels],
    (model, models) => {
        return models[model];
    }
);

export const getCarImages = createSelector(
    [getConfig],
    (config) => {
        let imagesData = [];

        Object.keys(config).forEach((car, ind) => {
            imagesData.push({
                url: `${process.env.PUBLIC_URL}/cars/model_${car}/model_${car}_${config[car].color}_${config[car].wheels}.png`,
                alt: car,
                index: ind
            });
        });

        return imagesData;
    }
);

export const getActiveIndex = createSelector(
    [getCurrentModel, getConfig],
    (model, config) => {
        return Object.keys(config).indexOf(model);
    }
);

export const getCurrentCarImage = createSelector(
    [getCurrentCarConfig],
    (config) => {
        return {
            url: `${process.env.PUBLIC_URL}/cars/model_${config.model}/model_${config.model}_${config.color}_${config.wheels}.png`,
            alt: config.model
        };
    }
);