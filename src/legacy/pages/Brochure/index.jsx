import React, { useState, useEffect, Component } from 'react'
import { GameItem } from '../../components/game-item'
import { Header } from '../../components/header-brochure'
import axios from 'axios'

import './Brochure.scss'

const BROCHURES = [
  {
    image: '/images/brochures/picture__cart.jpg',
    name: 'Name of the brochure',
    topic: 'Brochure topic',
    file: '/images/brochures/install.svg',
    id: 1,
  },
  {
    image: '/images/brochures/picture__cart.jpg',
    name: 'Name of the brochure',
    topic: 'Brochure topic',
    file: '/images/brochures/install.svg',
    id: 2,
  },
  {
    image: '/images/brochures/picture__cart.jpg',
    name: 'Name of the brochure',
    topic: 'Brochure topic',
    file: '/images/brochures/install.svg',
    id: 3,
  },
  {
    image: '/images/brochures/picture__cart.jpg',
    name: 'Name of the brochure',
    topic: 'Brochure topic',
    file: '/images/brochures/install.svg',
    id: 4,
  },
  {
    image: '/images/brochures/picture__cart.jpg',
    name: 'Name of the brochure',
    topic: 'Brochure topic',
    file: '/images/brochures/install.svg',
    id: 5,
  },
]

export const Brochure = () => {
  return (
    <>
      <div className='brochure'>
        <Header />
        <div className='sort__by-brochure'>
          <span>Sort by</span>
        </div>
        <div className='brochure__content'>
          {BROCHURES.map(game => (
            <GameItem game={game} key={game.id} />
          ))}
        </div>
      </div>
    </>
  )
}
