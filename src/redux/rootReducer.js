import { combineReducers } from "redux";
import imageReducer from './image/imageReducer'

const rootReducer = combineReducers({
    image: imageReducer
})

export default rootReducer