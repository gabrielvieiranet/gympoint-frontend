import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persittedReducer = persistReducer(
    {
      key: 'gympoint',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persittedReducer;
};
