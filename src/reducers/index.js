import {combineReducers} from 'redux'
import tokenReducer from '../redux/token/reducer'
import bannerReducer from '../redux/banner/reducer'
import donasiReducer from '../redux/donasi/reducer'
import tentangReducer from '../redux/tentang/reducer'
import programReducer from '../redux/program/reducer'

const reducers = combineReducers({
    tokenReducer,
    bannerReducer,
    donasiReducer,
    tentangReducer,
    programReducer,
})

export default reducers