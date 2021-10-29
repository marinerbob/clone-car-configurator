import { createSelector } from "@reduxjs/toolkit";
import { getCurrentConfig, getModels } from '../rootSlice/selectors';

export const getCurrentModel = state => getCurrentConfig(state).currentModel;
export const getConfig = state => getCurrentConfig(state).carConfig;
export const getConfigModelMap = state => getCurrentConfig(state).configModelMap;
export const getSummaryFields = state => getCurrentConfig(state).summaryFields;

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
};

export const getCurrentCarModel = createSelector(
    [getCurrentModel, getModels],
    (model, models) => {
        return models[model];
    }
);

export const getCurrentPropValue = prop => state => {
    if (!prop) {
        return null;
    }

    const currentProp = getCurrentProp(prop)(state);
    const configModelMap = getConfigModelMap(state);
    const currentModel = getCurrentCarModel(state);
    const performedPropName = configModelMap[prop] || prop;

    return currentModel[performedPropName][currentProp];
};

export const getModelImages = prop => state => {
    if (prop === null) {
        return getCarImages(state);
    }

    const model =  getCurrentCarModel(state);
    const currentPropInfo = model[prop];

    let imagesData = [];


    Object.keys(currentPropInfo).forEach((prop, ind) => {
        imagesData.push({
            url: prop.src,
            alt: prop.label,
            index: ind 
        });
    });

    return imagesData;
};

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

export const getActiveCarouselIndex = prop => state => {
    if (prop === null) {
        return getActiveCarouselCarIndex(state);
    }

    const currentChoice = getCurrentPropValue(prop)(state);
    const model =  getCurrentCarModel(state);
    const currentPropInfo = model[prop];

    return Object.keys(currentPropInfo).indexOf(currentChoice);
};

export const getActiveCarouselCarIndex = createSelector(
    [getCurrentModel, getConfig],
    (model, config) => {
        return Object.keys(config).indexOf(model);
    }
);

export const getPropByIndex = (prop, ind) => state => {
    const models = getModels(state);

    if (prop === null) {
        return Object.values(models)[ind].key;
    }

    const currentCarModel = getCurrentCarModel(state);
    const configModelMap = getConfigModelMap(state);
    const performedPropName = configModelMap[prop] || prop;

    return Object.values(currentCarModel[performedPropName])[ind].value;
};

export const getCurrentCarImage = createSelector(
    [getCurrentCarConfig],
    (config) => {
        return {
            url: `${process.env.PUBLIC_URL}/cars/model_${config.model}/model_${config.model}_${config.color}_${config.wheels}.png`,
            alt: config.model
        };
    }
);

export const getSummaryInfo = state => {
    const summaryFields = getSummaryFields(state);

    return summaryFields.map(field => {
        let fieldInfo = getCurrentPropValue(field)(state);

        return ({
            label: fieldInfo.label,
            price: fieldInfo.price
        });
    });
};

export const getCurrentPrice = createSelector(
    [getSummaryInfo],
    (summaryFields) => {
        return summaryFields.reduce((price, val) => {
            return price += val.price;
        }, 0); 
    }
);