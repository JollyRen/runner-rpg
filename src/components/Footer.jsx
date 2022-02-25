import React from 'react'
import {
  ALL_ICES,
  DEFEATED_ICES,
  ACTIVE_ICES,
  ACTIVE_PROGRAM,
  ALL_PROGRAMS,
} from './store/constants'
import { useActions, useIceVisibilityFilter, useProgVisibilityFilter } from './store/hooks'

const Footer = () => {
  const { setVisibilityFilter } = useActions()
  const iceVisFilter = useIceVisibilityFilter()
  const progVisFilter = useProgVisibilityFilter()

  return (
    <footer>
      {/*press button to show all Ice you can see*/}
      <button
        className={iceVisFilter === ALL_ICES ? 'active' : ''}
        onClick={() => {
          setVisibilityFilter(ALL_ICES)
        }}>
        All Ice
      </button>

      {/*press button to show only active Ice you can see*/}
      <button
        className={iceVisFilter === ACTIVE_ICES ? 'active' : ''}
        onClick={() => {
          setVisibilityFilter(ACTIVE_ICES)
        }}>
        Active Ice
      </button>

      {/*press button to show only defeated Ice (for this run)*/}
      <button
        className={iceVisFilter === DEFEATED_ICES ? 'active' : ''}
        onClick={() => {
          setVisibilityFilter(DEFEATED_ICES)
        }}>
        Defeated Ice
      </button>

      {/*Show the selected active program for the current Ice*/}
      <button
        className={progVisFilter === ACTIVE_PROGRAM ? 'active' : ''}
        onClick={() => {
          setVisibilityFilter(ACTIVE_PROGRAM)
        }}>
        Active Program
      </button>

      {/*Show all currently installed programs on your deck*/}
      <button
        className={progVisFilter === ALL_PROGRAMS ? 'active' : ''}
        onClick={() => {
          setVisibilityFilter(ALL_PROGRAMS)
        }}>
        All Programs
      </button>
    </footer>
  )
}

export default Footer
