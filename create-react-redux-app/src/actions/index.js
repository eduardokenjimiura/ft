import { CLICK_UPDATE_VALUE } from './actionTypes';
import { DROP_UPDATE_VALUE } from './actionTypes';
export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
})

export const selectDrop = value => ({
    type: DROP_UPDATE_VALUE,
    newValue: value
})
 