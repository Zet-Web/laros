import React from 'react'
import { SortByPlanner } from '../PlannersComponents/SortByPlanner'

import '../PlannersStyles/IslandHopping.scss'

export const IslandHopping = () => {
  return (
    <>
      <div className='island__hopping-bg'>
        <div className='island__hopping-header--block'>
          <h1 className='island__hopping-title'>Island hopping</h1>
          <p className='island__hopping-text'>
            Faucibus enim sit leo, purus, odio erat. Neque scelerisque volutpat
            morbi proin. Massa quis montes, scelerisque commodo elit erat in
            urna id. Purus sit odio egestas venenatis viverra blandit amet
            vitae.
          </p>
        </div>
      </div>
      <SortByPlanner />
    </>
  )
}
