import React, { useEffect } from 'react'
import { useActions, usePrograms, useSelector } from './store/hooks'
import SingleProgram from './SingleProgram'

const ProgramList = () => {
  const programs = usePrograms()
  const bits = useSelector((state) => state.bits)
  const { addProgram } = useActions()

  return (
    <div>
      {programs.map((program) => (
        <SingleProgram
          key={program.id}
          id={program.id}
          {...program}
          onClick={() =>
            bits >= program.cost ? addProgram(program.id, bits) : <p>Not enough bits</p>
          }
        />
      ))}
    </div>
  )
}
