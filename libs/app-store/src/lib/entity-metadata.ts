import {
  EntityMetadataMap,
  EntityDataModuleConfig,
  DefaultDataServiceConfig,
} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Issue: {
    filterFn: (issues, text) => {
      if (text) {
        const lowercased = text.toLowerCase();
        return issues.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(lowercased) ||
            description.toLowerCase().includes(lowercased)
        );
      } else {
        return issues;
      }
    },
  },
  Cargos: {
    filterFn: (issues, text) => {
      if (text) {
        const lowercased = text.toLowerCase();
        return issues.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(lowercased) ||
            description.toLowerCase().includes(lowercased)
        );
      } else {
        return issues;
      }
    },
  },
};
const pluralNames = { Cargos: 'Cargos' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata, pluralNames
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  entityHttpResourceUrls: {
    // Issue: {
    //   collectionResourceUrl: '/api/issues/',
    //   entityResourceUrl: '/api/issues/',
    // },
    // Cargos: {
    //   collectionResourceUrl: '/api/cargos/',
    //   entityResourceUrl: '/api/cargos/',
    // },
  },
};
