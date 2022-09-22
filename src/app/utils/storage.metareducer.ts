import { Action, ActionReducer } from '@ngrx/store';
import { stateMerger } from './sync-utils';

// the keys from state which we'd like to save.
const stateKeys = ['layout.theme'];
// the key for the local storage.
const localStorageKey = '__app_storage__';

interface StorageConfig {
  storage: Storage;
  stores: {
    [index: string]: {
      includeKeys?: string[];
      storage?: Storage;
    };
  };
}

export function storageMetaReducer<S, A extends Action = Action>(
  config: StorageConfig
) {
  let onInit = true; // after load/refresh…
  return function (reducer: ActionReducer<S, A>) {
    return function (state: S, action: A): S {
      // get the next state.
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        onInit = false;
        const savedState = loadFromStorage(config);
        return stateMerger(nextState, savedState);
      }
      saveToStorage(config, nextState);

      return nextState;
    };
  };
}

function loadFromStorage(config: StorageConfig) {
  const rehydratedState: any = {};
  for (const storeKey of Object.keys(config.stores)) {
    const storage = config.stores[storeKey].storage || config.storage;
    const jsonStore = storage.getItem(storeKey);
    if (jsonStore) {
      rehydratedState[storeKey] = JSON.parse(jsonStore);
    }
  }
  return rehydratedState;
}

function saveToStorage(config: StorageConfig, nextState: any) {
  for (const storeKey of Object.keys(config.stores)) {
    if (!!nextState[storeKey]) {
      const storage = config.stores[storeKey].storage || config.storage;
      const includeKeys = config.stores[storeKey].includeKeys || [];
      const stateToSave = extractSlice(nextState[storeKey], includeKeys);
      storage.setItem(storeKey, JSON.stringify(stateToSave));
    }
  }
}

function extractSlice(object: any, paths: string[]) {
  let temp = {};
  if (paths.length > 0) {
    for (const path of paths) {
      const value = extractValue(object, path);
      saveValueToObject(temp, path, value);
    }
  } else {
    temp = { ...object };
  }

  return temp;
}

function extractValue(object: any, path: string) {
  const pathParts = path.split('.');
  for (let i = 0; i < pathParts.length; i++) {
    object = object[pathParts[i]];
  }
  return object;
}

/**
 * Save value to specified object by path. If path in object does not exists
 * create necessary objects.
 * @param object
 * @param path
 * @param value
 */
function saveValueToObject(object: any, path: string, value: any) {
  const pathParts = path.split('.');
  for (let i = 0; i < pathParts.length - 1; i++) {
    if (!(pathParts[i] in object)) {
      object[pathParts[i]] = {};
    }
    object = object[pathParts[i]];
  }
  object[pathParts[pathParts.length - 1]] =
    value instanceof Object ? { ...value } : value;
  return object;
}
