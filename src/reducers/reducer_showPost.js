import { FETCH_SINGLE_POST } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_POST:
            return action.payload.data;
        default:
            return state;
    }
}