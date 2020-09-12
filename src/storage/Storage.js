import {AsyncStorage} from 'react-native';

export const getStorageItem = key => {
  return AsyncStorage.get(key, {doNotParse: true});
};

export const setStorageItem = (key, value, options) => {
  AsyncStorage.set(key, value, options);
};

export const removeStorageItem = key => {
  AsyncStorage.removeItem(key);
};
