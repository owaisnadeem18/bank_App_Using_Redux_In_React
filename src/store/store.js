import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { BankReducer } from "./reducers/BankReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    bankReducer: BankReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)