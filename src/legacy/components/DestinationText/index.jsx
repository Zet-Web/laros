import { useState } from 'react'

import './DestinationText.scss'

export const DestinationText = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='white__text-bg'>
      <p className='destination__text-top--content'>
        Please select the region on the map
      </p>

      <div className='destination__content'>
        <h2 className='destination__tetx-title'>Destintaions</h2>
        <div className='destination__text-block'>
          <p className='destination__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            alias incidunt voluptatibus tenetur velit mollitia, inventore
            quibusdam eos quis. Fuga, perspiciatis at?
          </p>
          <p
            className='destination__more'
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? '' : 'More'}
          </p>
          <p className={isVisible ? 'destination__text' : 'hidden'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sequi quaerat corporis accusamus earum amet placeat a modi. Quia
            nobis distinctio fugit cum, nisi sapiente minus corporis enim
            fugiat! Repellendus omnis enim culpa delectus ea est quae dicta
            totam consequatur neque quisquam adipisci tempora nihil deleniti
            modi ipsam, impedit doloribus suscipit. Aliquam quam velit a rem
            modi commodi.
          </p>
        </div>
      </div>
    </div>
  )
}

export const DestinationTextRegion = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='white__text-bg'>
      <p className='destination__text-top--content'>
        Please select the region on the map
      </p>

      <div className='destination__content'>
        <h2 className='destination__tetx-title'>Macedonia</h2>
        <div className='destination__text-block'>
          <p className='destination__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            alias incidunt voluptatibus tenetur velit mollitia, inventore
            quibusdam eos quis. Fuga, perspiciatis at?
          </p>
          <p
            className='destination__more'
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? '' : 'More'}
          </p>
          <p className={isVisible ? 'destination__text' : 'hidden'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sequi quaerat corporis accusamus earum amet placeat a modi. Quia
            nobis distinctio fugit cum, nisi sapiente minus corporis enim
            fugiat! Repellendus omnis enim culpa delectus ea est quae dicta
            totam consequatur neque quisquam adipisci tempora nihil deleniti
            modi ipsam, impedit doloribus suscipit. Aliquam quam velit a rem
            modi commodi.
          </p>
        </div>
      </div>
    </div>
  )
}
