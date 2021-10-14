import { createSelector } from "@reduxjs/toolkit";
import { getCurrentConfig, getModels } from '../rootSlice/selectors';

export const getCurrentModel = state => getCurrentConfig(state).currentModel;
export const getConfig = state => getCurrentConfig(state).carConfig;
export const getConfigModelMap = state => getCurrentConfig(state).configModelMap;

export const getCurrentCarConfig = createSelector(
    [getCurrentModel, getConfig],
    (model, config) => {
        return config[model];
    }
);

export const getCurrentProp = prop => state => {
    if (prop) {
        return getCurrentCarConfig(state)[prop];
    }

    return getCurrentModel(state);
}

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

export const getCurrentPrice = createSelector(
    [getCurrentCarConfig, getCurrentCarModel, getConfigModelMap],
    (config, model, configModelMap) => {
        let configKeys = Object.keys(config);
        let performedObj = configKeys.reduce((obj, key) => {
            let performedKey = configModelMap[key] || key;
    
            obj[performedKey] = config[key];

            return obj;
        }, {});

        let initialPrice = 0;
        let price = Object.keys(performedObj).reduce((price, key) => {
            let priceValue = (model[key] && model[key][performedObj[key]] &&
                model[key][performedObj[key]].price) || 0;
            return price + priceValue;
        }, initialPrice);

        return price;
    }
);