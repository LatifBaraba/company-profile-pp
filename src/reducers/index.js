import {combineReducers} from 'redux'
import tokenReducer from '../redux/token/reducer'
import bannerReducer from '../redux/banner/reducer'
import donasiReducer from '../redux/donasi/reducer'
import tentangReducer from '../redux/tentang/reducer'
import programReducer from '../redux/program/reducer'
import beritaReducer from '../redux/berita/reducer'
import partnerReducer from '../redux/partner/reducer'
import albumReducer from '../redux/album/reducer'

const reducers = combineReducers({
    tokenReducer,
    bannerReducer,
    donasiReducer,
    tentangReducer,
    programReducer,
    beritaReducer,
    partnerReducer,
    albumReducer,
})

export default reducers