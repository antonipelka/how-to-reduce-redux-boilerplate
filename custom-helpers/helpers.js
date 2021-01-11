export function createReducer(name, config, initialState) {
  return (state = initialState, action) => {
    const type = action.type.replace(new RegExp(`^${name}/`), '')
    return config[type]?.(state, action.payload) ?? state
  };
}

export function createActions(name, config) {
  return Object.keys(config).reduce((prevActions, key) => {
    prevActions[key] = (payload = {}) => ({
      type: `${name}/${key}`,
      payload
    })
    return prevActions
  }, {});
}
