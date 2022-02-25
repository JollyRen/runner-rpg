import React, { createContext, useReducer } from 'react'
import runnersReducer, { reducerLogger } from './reducer'
import { ALL_ICES, ALL_PROGRAMS } from './constants'
export const RunnerContext = createContext()
export const DispatchContext = createContext()

export const initialState = {
  iceVisFilter: ALL_ICES,
  progVisFilter: ALL_PROGRAMS,
  activeProgram: 0,

  // dataFort: {},
  // // index within ices array within datafort
  ices: [],
  ice: {},
  currentIceStrength: 0,

  // // type: Agenda, Node, Operation, Upgrade
  // dataFortProject: [],
  // project: {},
  programs: [],
  program: {},
  currentProgramStrength: 0, // currStr >= link ? link : currStr

  runnerLvl: 1,
  bits: 15,
  memory: 5,

  // // strength modifier. Upper limit of your program strength.
  linkStrength: 0, // runnerLvl + bitsSpent + deckBuff

  // //sample datastructure
  /*
  dataFort = {
    isComplete: false //true when last Ice is defeated.
    ices = [{ice},{ice},{ice},{ice}],
    dataFortProject = [{project}]

    //**** only "ices" is necessary for async week. ****
  }
  */
}

export default function RunnerProvider({ children }) {
  const [state, dispatch] = useReducer(reducerLogger(runnersReducer), initialState)

  return (
    <RunnerContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </RunnerContext.Provider>
  )
}
