import React, { useEffect } from 'react'
import axios from 'axios'
import { useActions, usePrograms, useSelector } from './store/hooks'
import { getPrograms } from './store/reducer'
import SingleProgram from './SingleProgram'

const Programs = () => {
  const programs = usePrograms()
  const bits = useSelector((state) => state.bits)
  const { addProgram } = useActions()

  // useEffect(() => {getPrograms()}, [])

  // useEffect(() => {
  //     return async (dispatch) => {
  //       try {
  //         const { data: programs } = await axios.get('/api/programs')
  //         dispatch(setPrograms(programs))
  //       } catch (err) {
  //         console.log('No Project')
  //       }
  //     }
  // }, [])

  return !programs ? (
    <p>No Programs</p>
  ) : (
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

export default Programs
