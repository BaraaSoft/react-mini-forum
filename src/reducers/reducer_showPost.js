import { FETCH_SINGLE_POST } from "../actions";
import _ from 'lodash'
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SINGLE_POST:
            return _.uniqBy([action.payload.data, ...state], 'id');
        default:
            return state;
    }
}