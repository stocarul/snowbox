import { schema } from 'normalizr';

export const entity = (key, provider, relations = {}, options = {}) => {
  const newEntity = new schema.Entity(key, relations, options);

  if (provider) {
    if (typeof provider !== 'object') {
      throw new Error('[Snowbox] Invalid provider');
    }

    newEntity.provider = provider;
  }

  if (typeof options.staleTimeout === 'number') {
    newEntity.staleTimeout = options.staleTimeout;
  }

  if (options.singleton === true) {
    newEntity.singleton = true;
  }

  if (options.entitiesPath) {
    newEntity.entitiesPath = options.entitiesPath;
  }

  if (options.fetchEntitiesPath) {
    newEntity.fetchEntitiesPath = options.fetchEntitiesPath;
  }

  return newEntity;
};
