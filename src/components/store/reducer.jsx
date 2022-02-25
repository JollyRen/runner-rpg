import { useActions } from './hooks'
import axios from 'axios'

const { setPrograms, setIce } = useActions()

//logger to show actions passing through reducer
export const reducerLogger = (reducer) => (state, action) => {
  console.group('Action', action.type)
  console.log('Previous State', state)
  console.log('Action', action)
  const newState = reducer(state, action)
  console.log('New State', newState)
  console.groupEnd()
  return newState
}

//thunk-like functions used in useEffects?
export const getPrograms = () => {
  return async (dispatch) => {
    try {
      const { data: programs } = await axios.get('/api/programs')
      dispatch(setPrograms(programs)) // ??? setPrograms already dispatches
    } catch (err) {
      console.log('No Project')
    }
  }
}

export const getIce = () => {
  return async (dispatch) => {
    try {
      const { data: ice } = await axios.get('/api/ice')
      dispatch(setIce(ice)) // ??? setIce already dispatches
    } catch (err) {
      console.log('No Ice')
    }
  }
}

//reducer - not fleshed out
const runnersReducer = (state, action) => {
  switch (action.type) {
    //create more cases here
    default:
      return state
  }
}

export default runnersReducer
