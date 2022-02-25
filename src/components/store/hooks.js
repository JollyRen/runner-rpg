import { useContext } from 'react'
import { RunnerContext, DispatchContext } from './RunnerProvider.js'

export const useSelector = (callback) => {
  const state = useContext(RunnerContext)
  return callback(state)
}

export const useDispatch = () => {
  return useContext(DispatchContext)
}

export const useIceVisibilityFilter = () => {
  return useSelector((state) => state.iceVisFilter)
}
export const useProgVisibilityFilter = () => {
  return useSelector((state) => state.progVisFilter)
}

//filters for Ice
export const useIces = () => {
  const ices = useSelector((state) => state.ices)
  const iceVisFilter = useIceVisibilityFilter()
  const showAllIce = ices.filter((ice) => ice.isRevealed)
  const showActiveIce = ices.filter((ice) => !ice.defeated)
  const showDefeatedIce = ices.filter((ice) => ice.defeated)

  switch (iceVisFilter) {
    case ALL_ICES:
      return showAllIce
    case ACTIVE_ICES:
      return showActiveIce
    case DEFEATED_ICES:
      return showDefeatedIce
    default:
      return ices
  }
}

//filters for Programs
export const usePrograms = () => {
  const programs = useSelector((state) => state.programs)
  const progVisFilter = useProgVisibilityFilter()
  const showActiveProgram = ices.filter((program) => program.isActive)
  const showAllPrograms = ices.filter((program) => !program.isInstalled)
  const showTrashedPrograms = ices.filter((program) => program.isTrashed)

  switch (progVisFilter) {
    case ACTIVE_PROGRAM:
      return showActiveProgram
    case ALL_PROGRAMS:
      return showAllPrograms
    case TRASHED_PROGRAMS:
      return showTrashedPrograms
    default:
      return programs
  }
}


export const useActions = () => {
  const dispatch = useDispatch()
  return {
    //add actions here
    addProgram(programId, bits) {
      dispatch({ type: ADD_PROGRAM, programId, bits })
    }

    toggleActiveProgram(programId) {
      dispatch({ type: TOGGLE_ACTIVE_PROGRAM, programId})
    }

    //visFilter = useIces/usePrograms
    setVisibilityFilter(visFilter) {
      dispatch({ type: SET_VISIBILITY_FILTER, visFilter })
    },

    setLinkStrength(runnerLvl = 1, bitsSpent = 1, deckBuff = 0) {
      dispatch({ type: SET_LINK_STRENGTH, runnerLvl, bitsSpent, deckBuff})
    }
  }
}
