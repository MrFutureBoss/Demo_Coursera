import storage from 'redux-persist/lib/storage';

const testPersistConfig = {
  key: 'test',
  storage,
  whitelist: ['test_result'],
};

export default testPersistConfig;
