import React, { useState, useEffect } from 'react'
import { AllSorting } from './AllSorting'
import axios from 'axios'

import './SortByPlanner.scss'

export function SortByPlanner() {
  return (
    <>
      <div className='sort__by-planner'>
        <AllSorting />
      </div>
    </>
  )
}
