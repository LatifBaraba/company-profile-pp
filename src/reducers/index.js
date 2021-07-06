import {combineReducers} from 'redux'
import tokenReducer from '../redux/token/reducer'
import bannerReducer from '../redux/banner/reducer'
import donasiReducer from '../redux/donasi/reducer'
import tentangReducer from '../redux/tentang/reducer'
import programReducer from '../redux/program/reducer'
import beritaReducer from '../redux/berita/reducer'
import partnerReducer from '../redux/partner/reducer'
import albumReducer from '../redux/album/reducer'
import beneficariesReducer from '../redux/beneficaries/reducer'
import achievementReducer from '../redux/achievement/reducer'
import testimoniReducer from '../redux/testimoni/reducer'
import menuReducer from '../redux/menu/reducer'
import kontakReducer from '../redux/kontak/reducer'
import hubungiReducer from '../redux/hubungi/reducer'
import teamReducer from '../redux/team/reducer'
import kategoriReducer from '../redux/kategori/reducer'

const reducers = combineReducers({
    tokenReducer,
    bannerReducer,
    donasiReducer,
    tentangReducer,
    programReducer,
    beritaReducer,
    partnerReducer,
    albumReducer,
    beneficariesReducer,
    achievementReducer,
    testimoniReducer,
    menuReducer,
    kontakReducer,
    hubungiReducer,
    teamReducer,
    kategoriReducer
})

export default reducers