import React, { createContext, useReducer } from 'react'
import runnersReducer, { reducerLogger } from './reducer'
import { ALL_ICES, ALL_PROGRAMS } from './constants'
export const RunnerContext = createContext()
export const DispatchContext = createContext()

export const initialState = {
  iceVisFilter: ALL_ICES,
  progVisFilter: ALL_PROGRAMS,
  activeProgram: 0, //id of active program

  // dataFort: {},
  // // index within ices array within datafort
  ices: [], //array of ice
  ice: {}, //object of individual ice
  currentIceStrength: 0, //current ice strength to be compared with program strength

  // // type: Agenda, Node, Operation, Upgrade
  // dataFortProject: [],
  // project: {},
  programs: [], //array of program
  program: {}, //object of individual program
  currentProgramStrength: 0, // currStr >= link ? link : currStr // to be compared to ice strength

  runnerLvl: 1, //runner level - modifies link strength
  bits: 15, //used to buy programs, make runs, increase link strength
  memory: 5, //maximum memory. Programs use 1 or 2 memory per install

  // // linkStrength modifier. Upper limit of your program strength. linkStrength = 3 means currentProgramStrength = 3 - even if the program strength is 5.

  linkStrength: 0, // runnerLvl + bitsSpent + deckBuff(not used currently, default to 0)

  // //sample datastructure
  /*
  dataFort = {
    isComplete: false //true when last Ice is defeated.
    ices = [{ice},{ice},{ice},{ice}],
    dataFortProject = [{project},{project}]

    //**** only "ices" is necessary for async week. ****
  }
  */
}

export default function RunnerProvider({ children }) {
  const [state, dispatch] = useReducer(reducerLogger(runnersReducer), initialState)

  return (
    <RunnerContext.Provider state={state}>
      <DispatchContext.Provider dispatch={dispatch}>
        {/* children gets passed state and dispatch is passed through state through providers*/}
        {children}
      </DispatchContext.Provider>
    </RunnerContext.Provider>
  )
}
