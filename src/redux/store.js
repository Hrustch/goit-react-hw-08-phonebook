import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './contactSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { authReducer } from './auth/authSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}


const authPersistReducer = persistReducer(authPersistConfig, authReducer)



export const store = configureStore({
  reducer: {contacts: phoneBookReducer, auth: authPersistReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/* export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authPersistReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
}); */

export const persistor = persistStore(store);