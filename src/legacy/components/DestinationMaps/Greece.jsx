import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler'
import { motion, AnimatePresence } from 'framer-motion'

import { ReactComponent as SubGr } from '../../svg/greece__subregion1.svg'
import { ReactComponent as SubGr2 } from '../../svg/greece__subregion2.svg'
import { ReactComponent as SubGr3 } from '../../svg/greece__subregion3.svg'
import { ReactComponent as SubGr4 } from '../../svg/greece__subregion4.svg'
import { ReactComponent as SubGr5 } from '../../svg/greece__subregion5.svg'
import { ReactComponent as SubGr6 } from '../../svg/greece__subregion6.svg'
import { ReactComponent as SubGr7 } from '../../svg/greece__subregion7.svg'
import { ReactComponent as SubGr8 } from '../../svg/greece__subregion8.svg'
import { ReactComponent as SubGr9 } from '../../svg/greece__subregion9.svg'
import { ReactComponent as SubGr10 } from '../../svg/greece__subregion10.svg'
import { ReactComponent as SubGr11 } from '../../svg/greece__subregion11.svg'
import { ReactComponent as SubGr12 } from '../../svg/greece__subregion12.svg'
import { ReactComponent as SubGr13 } from '../../svg/greece__subregion13.svg'
import { ReactComponent as SubGr14 } from '../../svg/greece__subregion14.svg'
import { ReactComponent as SubGr15 } from '../../svg/greece__subregion15.svg'

import './DestinationMaps.scss'

export const Greece = () => {
  const [isShown, setIsShown] = useState(false)

  const isShownNumber = index => {
    setIsShown(index)
  }

  return (
    <>
      <Link to='lonian-islands'>
        <SubGr
          className='sub__gr1'
          fill='transparent'
          onMouseEnter={() => setIsShown(1) && setIsShown(true)}
        />
      </Link>
      <motion.div>
        <AnimatePresence>
          <motion.div
            key='question'
            className='rounded-tr-md relative z-20 rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500'
            onClick={() => setIsShown(!isShown)}
          ></motion.div>

          {isShown && (
            <motion.div
              key='answer'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className='p-2 text-lg text-gray-700 border-l border-b border-gray-300'
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  isShown === 1 && setIsShown(false)
                }}
              >
                {isShown === 1 && (
                  <div
                    className={
                      'destination__cart-shown destination__cart-shown--1'
                    }
                  >
                    <div className='destination__cart-picture'>
                      <img
                        src='/images/cart__picture-hover.jpg'
                        alt='cart picture image'
                      />
                    </div>
                    <h3 className='destination__cart-title'>
                      Central Macedonia
                    </h3>
                    <p className='destination__cart-text'>
                      At ultrices rhoncus sit vel viverra viverra. Arcu
                      pellentesque gravida in orci, pretium nulla volutpat leo.
                    </p>
                    <div className='link__block-destination--map'>
                      <Link
                        className='link__detail-cart--map'
                        to='/destinations/area'
                      >
                        <span>Learn more</span>
                      </Link>
                    </div>
                  </div>
                )}
              </OutsideClickHandler>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Link to='/destinations/nibn-sagittis'>
        <SubGr2
          className='sub__gr2'
          fill='transparent'
          onMouseEnter={() => setIsShown(2) && setIsShown(true)}
        />
      </Link>

      <motion.div>
        <AnimatePresence>
          <motion.div
            key='question'
            className='rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500'
            onClick={() => setIsShown(!isShown)}
          ></motion.div>

          {isShown && (
            <motion.div
              key='answer'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className='p-2 text-lg text-gray-700 border-l border-b border-gray-300'
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  isShown === 2 && setIsShown(false)
                }}
              >
                {isShown === 2 && (
                  <div
                    className={
                      isShown
                        ? 'destination__cart-shown destination__cart-shown--2'
                        : 'hidden'
                    }
                  >
                    <div className='destination__cart-picture'>
                      <img
                        src='/images/cart__picture-hover.jpg'
                        alt='cart picture image'
                      />
                    </div>
                    <h3 className='destination__cart-title'>
                      Central Macedonia
                    </h3>
                    <p className='destination__cart-text'>
                      At ultrices rhoncus sit vel viverra viverra. Arcu
                      pellentesque gravida in orci, pretium nulla volutpat leo.
                    </p>
                    <div className='link__block-destination--map'>
                      <Link
                        className='link__detail-cart--map'
                        to='/destinations/area'
                      >
                        <span>Learn more</span>
                      </Link>
                    </div>
                  </div>
                )}
              </OutsideClickHandler>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Link to='/destinations/macedonia'>
        <SubGr3
          className='sub__gr3'
          fill='transparent'
          onMouseEnter={() => setIsShown(3) && setIsShown(true)}
        />
      </Link>

      <motion.div>
        <AnimatePresence>
          <motion.div
            key='question'
            className='rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500'
            onClick={() => setIsShown(!isShown)}
          ></motion.div>

          {isShown && (
            <motion.div
              key='answer'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className='p-2 text-lg text-gray-700 border-l border-b border-gray-300'
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  isShown === 3 && setIsShown(false)
                }}
              >
                {isShown === 3 && (
                  <div
                    className={
                      isShown
                        ? 'destination__cart-shown destination__cart-shown--3'
                        : 'hidden'
                    }
                  >
                    <div className='destination__cart-picture'>
                      <img
                        src='/images/cart__picture-hover.jpg'
                        alt='cart picture image'
                      />
                    </div>
                    <h3 className='destination__cart-title'>
                      Central Macedonia
                    </h3>
                    <p className='destination__cart-text'>
                      At ultrices rhoncus sit vel viverra viverra. Arcu
                      pellentesque gravida in orci, pretium nulla volutpat leo.
                    </p>
                    <div className='link__block-destination--map'>
                      <Link
                        className='link__detail-cart--map'
                        to='/destinations/area'
                      >
                        <span>Learn more</span>
                      </Link>
                    </div>
                  </div>
                )}
              </OutsideClickHandler>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Link to='/destinations/macedonia'>
        <SubGr4
          className='sub__gr4'
          fill='transparent'
          onMouseEnter={() => setIsShown(4) && setIsShown(true)}
        />
      </Link>

      <motion.div>
        <AnimatePresence>
          <motion.div
            key='question'
            className='rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500'
            onClick={() => setIsShown(!isShown)}
          ></motion.div>

          {isShown && (
            <motion.div
              key='answer'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className='p-2 text-lg text-gray-700 border-l border-b border-gray-300'
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  isShown === 4 && setIsShown(false)
                }}
              >
                {isShown === 4 && (
                  <div
                    className={
                      isShown
                        ? 'destination__cart-shown destination__cart-shown--4'
                        : 'hidden'
                    }
                  >
                    <div className='destination__cart-picture'>
                      <img
                        src='/images/cart__picture-hover.jpg'
                        alt='cart picture image'
                      />
                    </div>
                    <h3 className='destination__cart-title'>
                      Central Macedonia
                    </h3>
                    <p className='destination__cart-text'>
                      At ultrices rhoncus sit vel viverra viverra. Arcu
                      pellentesque gravida in orci, pretium nulla volutpat leo.
                    </p>
                    <div className='link__block-destination--map'>
                      <Link
                        className='link__detail-cart--map'
                        to='/destinations/area'
                      >
                        <span>Learn more</span>
                      </Link>
                    </div>
                  </div>
                )}
              </OutsideClickHandler>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Link to='/destinations/macedonia'>
        <SubGr5
          className='sub__gr5'
          fill='transparent'
          onMouseEnter={() => setIsShown(5) && setIsShown(true)}
        />
      </Link>

      <motion.div>
        <AnimatePresence>
          <motion.div
            key='question'
            className='rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500'
            onClick={() => setIsShown(!isShown)}
          ></motion.div>

          {isShown && (
            <motion.div
              key='answer'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className='p-2 text-lg text-gray-700 border-l border-b border-gray-300'
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  isShown === 5 && setIsShown(false)
                }}
              >
                {isShown === 5 && (
                  <div
                    className={
                      isShown
                        ? 'destination__cart-shown destination__cart-shown--5'
                        : 'hidden'
                    }
                  >
                    <div className='destination__cart-picture'>
                      <img
                        src='/images/cart__picture-hover.jpg'
                        alt='cart picture image'
                      />
                    </div>
                    <h3 className='destination__cart-title'>
                      Central Macedonia
                    </h3>
                    <p className='destination__cart-text'>
                      At ultrices rhoncus sit vel viverra viverra. Arcu
                      pellentesque gravida in orci, pretium nulla volutpat leo.
                    </p>
                    <div className='link__block-destination--map'>
                      <Link
                        className='link__detail-cart--map'
                        to='/destinations/area'
                      >
                        <span>Learn more</span>
                      </Link>
                    </div>
                  </div>
                )}
              </OutsideClickHandler>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Link to='/destinations/nibn-sagittis'>
        <SubGr6
          className='sub__gr6'
          fill='transparent'
          onMouseEnter={() => setIsShown(6) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 6 && setIsShown(false)
        }}
      >
        {isShown === 6 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--6'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/nibn-sagittis'>
        <SubGr7
          className='sub__gr7'
          fill='transparent'
          onMouseEnter={() => setIsShown(7) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 7 && setIsShown(false)
        }}
      >
        {isShown === 7 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--7'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/elti-molestie'>
        <SubGr8
          className='sub__gr8'
          fill='transparent'
          onMouseEnter={() => setIsShown(8) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 8 && setIsShown(false)
        }}
      >
        {isShown === 8 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--8'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/elti-molestie'>
        <SubGr9
          className='sub__gr9'
          fill='transparent'
          onMouseEnter={() => setIsShown(9) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 9 && setIsShown(false)
        }}
      >
        {isShown === 9 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--9'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/elti-molestie'>
        <SubGr10
          className='sub__gr10'
          fill='transparent'
          onMouseEnter={() => setIsShown(10) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 10 && setIsShown(false)
        }}
      >
        {isShown === 10 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--10'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/attica'>
        <SubGr11
          className='sub__gr11'
          fill='transparent'
          onMouseEnter={() => setIsShown(11) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 11 && setIsShown(false)
        }}
      >
        {isShown === 11 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--11'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/aegean'>
        <SubGr12
          className='sub__gr12'
          fill='transparent'
          onMouseEnter={() => setIsShown(12) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 12 && setIsShown(false)
        }}
      >
        {isShown === 12 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--12'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/cyclades'>
        <SubGr13
          className='sub__gr13'
          fill='transparent'
          onMouseEnter={() => setIsShown(13) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 13 && setIsShown(false)
        }}
      >
        {isShown === 13 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--13'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/crete'>
        <SubGr14
          className='sub__gr14'
          fill='transparent'
          onMouseEnter={() => setIsShown(14) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 14 && setIsShown(false)
        }}
      >
        {isShown === 14 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--14'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/macedonia'>
        <SubGr15
          className='sub__gr15'
          fill='transparent'
          onMouseEnter={() => setIsShown(15) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 15 && setIsShown(false)
        }}
      >
        {isShown === 15 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--15'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img
                src='/images/cart__picture-hover.jpg'
                alt='cart picture image'
              />
            </div>
            <h3 className='destination__cart-title'>Central Macedonia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link className='link__detail-cart--map' to='/destinations/area'>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </>
  )
}
