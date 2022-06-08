import cloneDeep from 'clone-deep';
import produce from 'immer';

const defaultState = {
  items: {},
};

const addDog = (draft, newDog) => {
    const monitoredLawsuit = cloneDeep(newDog, true);

    const {
      id
    } = monitoredLawsuit;

    draft.items[id] = {
      ...(draft.items[id] || {}),
      ...newDog,
    };
};
