import { ACTION_SET_IS_CITY_SELECTOR_VISIBLE, ACTION_SET_IS_LOADING_CITY_DATA, ACTION_SET_CITY_DATA } from './action.js';

export default {
    isCitySelectorVisible(state = false, action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
                return payload;
            default:
        }
        return state
    },
    isLoadingCityData(state = false, action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_IS_LOADING_CITY_DATA:
                return payload;
            default:
        }
        return state
    },
    cityData(state = null, action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_CITY_DATA:
                return payload;
            default:
        }
        return state
    }
}