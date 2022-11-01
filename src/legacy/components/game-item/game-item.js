import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GameBuy } from '../game-buy'
import { GameCover } from '../game-cover/game-cover'
import { FileCover } from '../FileCover'
import { setCurrentGame } from '../../store/games/reducer'
import './game-item.scss'

export const GameItem = ({ game }) => {
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === game.id)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentGame(game))
  }

  return (
    <div
      className={isItemInCart ? 'game-item__green' : 'game-item'}
      onClick={handleClick}
    >
      <GameCover image={game.image} />
      <div className='game-item__details'>
        <div className='select-topic'>
          <span>{game.topic}</span>
        </div>
        <div>
          <span className='game-item__title'>{game.name}</span>
        </div>
        {/* <img className="selected__brochure-img" src={file} alt="selected brochure" /> */}
        <FileCover file={game.file} />
        <div className='game-item__buy'>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  )
}
