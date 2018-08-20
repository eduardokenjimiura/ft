import { DROP_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
    newValue: ["Saab", "Volvo", "BMW"]
};


export const dropReducer = (state = initialState, action) => {

    switch (action.type) {
        case DROP_UPDATE_VALUE:
        var fruit = "sadasdasdasdsa";
            initialState.newValue.push(action.newValue);
            console.log(initialState)
            this.state.fruits['fruit-' + 1333] = fruit;
            // set the state
            this.setState({ fruits: this.state.fruits });
            return {

                ...state,
                newValue: action.newValue
            };

        default:
            return state;
    }


}
