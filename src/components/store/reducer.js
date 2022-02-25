export const reducerLogger = (reducer) => (state, action) => {
  console.group('Action', action.type)
  console.log('Previous State', state)
  console.log('Action', action)
  const newState = reducer(state, action)
  console.log('New State', newState)
  console.groupEnd()
  return newState
}

const runnersReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default runnersReducer
