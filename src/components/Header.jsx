import React, { useState } from 'react'
import { getPrograms } from '../components/store/reducer'
import Programs from './Programs'
import Ice from './Ice'

//Header displays two arrays, containing object cards of ice and programs.
//the header will also display which is active, probably with a green border.
//it will also display "bits" - money.
//later versions will have it be the "dashboard" that displays pertinent info. Similar to the "deck" concept of cyberpunk genre.

const Header = () => {
  // const [programs, usePrograms] = useState(state.programs)
  // const [bits, useBits] = useState(state.bits)

  // useEffect(() => {
  //   usePrograms(getPrograms())
  // }, [])

  // useEffect(() => {
  //     return async (dispatch) => {
  //       try {
  //         const { data: programs } = await axios.get('/api/programs')
  //         setPrograms(programs) // ???
  //       } catch (err) {
  //         console.log('No Project')
  //       }
  //     }
  // }, [])

  return (
    <div>
      <p>bits: {bits}</p>
      <Programs programs={programs} />
      <Ice ice={ice} />
    </div>
  )
}

export default Header
