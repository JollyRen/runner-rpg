import React from 'react'
import { useActions } from './store/hooks'

const SingleProgram = ({ name, type, memory, cost, strength, id }) => {
  const { setActiveProgram } = useActions()

  return !id ? (
    <p>Loading Program...</p>
  ) : (
    <div>
      <div className="singleProgram" key={id}>
        <p>Program: {name}</p>
        <p>Program Type: {type}</p>
        <p>Memory: {memory}</p>
        <p>Cost: {cost}</p>
        <p>Strength: {strength}</p>
        <button className="programActivate" type="button" onClick={setActiveProgram(id)}>
          Spin Up Program
        </button>
      </div>
    </div>
  )
}

export default SingleProgram
