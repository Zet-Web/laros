import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../PlannersStyles/TripPlanner.scss'

export const TripPlanner = () => {
  return (
    <>
      <div className='trip__planer-bg'>
        <h1 className='white__h1-title'>Travel planner</h1>
      </div>

      <div className='trip__planner'>
        <div className='trip__planner-container'>
          <div>
            <span className='trip__planner-span'>Our top trip categories</span>
          </div>
        </div>

        <Swiper
          className='swiper__trip-slider'
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={3}
          // loop={true}
          // loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Link to='/trip-planner/island-hopping'>
              <div className='slide__item-trip'>
                <div className='slide__item-cart slide__trip-image'>
                  <img
                    className='slide__trip-image'
                    src='/images/trip-planner/slide__trip-planner--one.jpg'
                    alt='picture'
                  />
                  <div className='slide__trip-title'>
                    <span>Fly Drive</span>
                  </div>
                </div>

                <div className='blue__trip-wrapper'>
                  <h3 className='wrapper__title-trip'>Island Hopping</h3>
                  <p className='wrapper__text-trip'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed. Urna pretium mattis condimentum et ultrices tellus
                    malesuada id. Libero fusce nisi, urna lacinia. Lobortis quis
                    malesuada id diam aliquam diam proin. Fringilla malesuada
                    enim fringilla diam egestas. Dui et ipsum semper lectus
                    purus. Nulla ut lorem nulla amet eget feugiat.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide__item-trip'>
              <div className='slide__item-cart'>
                <img
                  src='/images/trip-planner/slide__trip-planner--two.jpg'
                  alt='picture'
                />
                <div className='slide__trip-title slide__trip-title--two'>
                  <div className=''>
                    <span>Combination Island</span>
                  </div>
                  <div className=''>
                    <span>-</span>
                  </div>
                  <div className=''>
                    <span>Fly Drive</span>
                  </div>
                </div>
              </div>

              <div className='blue__trip-wrapper'>
                <h3 className='wrapper__title-trip'>Island Hopping</h3>
                <p className='wrapper__text-trip'>
                  Tempor nec pellentesque nisi in id fermentum. Mauris quis
                  dignissim augue pharetra diam ut. Et purus tristique
                  ullamcorper faucibus blandit tortor porta imperdiet
                  condimentum. In vitae turpis facilisis amet, sem. Porta nam
                  nisi vitae enim cras risus convallis posuere. Pretium vitae
                  iaculis sed lectus in. Quis sit nunc suscipit varius velit
                  malesuada. Amet nunc, turpis tempus convallis morbi integer.
                  Adipiscing aliquam lacus tempus, egestas id quis egestas sed.
                  Urna pretium mattis condimentum et ultrices tellus malesuada
                  id. Libero fusce nisi, urna lacinia. Lobortis quis malesuada
                  id diam aliquam diam proin. Fringilla malesuada enim fringilla
                  diam egestas. Dui et ipsum semper lectus purus. Nulla ut lorem
                  nulla amet eget feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide__item-trip'>
              <div className='slide__item-cart'>
                <img
                  src='/images/trip-planner/slide__trip-planner--one.jpg'
                  alt='picture'
                />
                <div className='slide__trip-title'>
                  <span>Fly Drive</span>
                </div>
              </div>

              <div className='blue__trip-wrapper'>
                <h3 className='wrapper__title-trip'>Island Hopping</h3>
                <p className='wrapper__text-trip'>
                  Tempor nec pellentesque nisi in id fermentum. Mauris quis
                  dignissim augue pharetra diam ut. Et purus tristique
                  ullamcorper faucibus blandit tortor porta imperdiet
                  condimentum. In vitae turpis facilisis amet, sem. Porta nam
                  nisi vitae enim cras risus convallis posuere. Pretium vitae
                  iaculis sed lectus in. Quis sit nunc suscipit varius velit
                  malesuada. Amet nunc, turpis tempus convallis morbi integer.
                  Adipiscing aliquam lacus tempus, egestas id quis egestas sed.
                  Urna pretium mattis condimentum et ultrices tellus malesuada
                  id. Libero fusce nisi, urna lacinia. Lobortis quis malesuada
                  id diam aliquam diam proin. Fringilla malesuada enim fringilla
                  diam egestas. Dui et ipsum semper lectus purus. Nulla ut lorem
                  nulla amet eget feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide__item-trip'>
              <div className='slide__item-cart slide__trip-image'>
                <img
                  className='slide__trip-image'
                  src='/images/trip-planner/slide__trip-planner--one.jpg'
                  alt='picture'
                />
                <div className='slide__trip-title'>
                  <span>Fly Drive</span>
                </div>
              </div>

              <div className='blue__trip-wrapper'>
                <h3 className='wrapper__title-trip'>Island Hopping</h3>
                <p className='wrapper__text-trip'>
                  Tempor nec pellentesque nisi in id fermentum. Mauris quis
                  dignissim augue pharetra diam ut. Et purus tristique
                  ullamcorper faucibus blandit tortor porta imperdiet
                  condimentum. In vitae turpis facilisis amet, sem. Porta nam
                  nisi vitae enim cras risus convallis posuere. Pretium vitae
                  iaculis sed lectus in. Quis sit nunc suscipit varius velit
                  malesuada. Amet nunc, turpis tempus convallis morbi integer.
                  Adipiscing aliquam lacus tempus, egestas id quis egestas sed.
                  Urna pretium mattis condimentum et ultrices tellus malesuada
                  id. Libero fusce nisi, urna lacinia. Lobortis quis malesuada
                  id diam aliquam diam proin. Fringilla malesuada enim fringilla
                  diam egestas. Dui et ipsum semper lectus purus. Nulla ut lorem
                  nulla amet eget feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide__item-trip'>
              <div className='slide__item-cart'>
                <img
                  src='/images/trip-planner/slide__trip-planner--two.jpg'
                  alt='picture'
                />
                <div className='slide__trip-title slide__trip-title--two'>
                  <div className=''>
                    <span>Combination Island</span>
                  </div>
                  <div className=''>
                    <span>-</span>
                  </div>
                  <div className=''>
                    <span>Fly Drive</span>
                  </div>
                </div>
              </div>

              <div className='blue__trip-wrapper'>
                <h3 className='wrapper__title-trip'>Island Hopping</h3>
                <p className='wrapper__text-trip'>
                  Tempor nec pellentesque nisi in id fermentum. Mauris quis
                  dignissim augue pharetra diam ut. Et purus tristique
                  ullamcorper faucibus blandit tortor porta imperdiet
                  condimentum. In vitae turpis facilisis amet, sem. Porta nam
                  nisi vitae enim cras risus convallis posuere. Pretium vitae
                  iaculis sed lectus in. Quis sit nunc suscipit varius velit
                  malesuada. Amet nunc, turpis tempus convallis morbi integer.
                  Adipiscing aliquam lacus tempus, egestas id quis egestas sed.
                  Urna pretium mattis condimentum et ultrices tellus malesuada
                  id. Libero fusce nisi, urna lacinia. Lobortis quis malesuada
                  id diam aliquam diam proin. Fringilla malesuada enim fringilla
                  diam egestas. Dui et ipsum semper lectus purus. Nulla ut lorem
                  nulla amet eget feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide__item-trip'>
              <div className='slide__item-cart'>
                <img
                  src='/images/trip-planner/slide__trip-planner--one.jpg'
                  alt='picture'
                />
                <div className='slide__trip-title'>
                  <span>Fly Drive</span>
                </div>
              </div>

              <div className='blue__trip-wrapper'>
                <h3 className='wrapper__title-trip'>Island Hopping</h3>
                <p className='wrapper__text-trip'>
                  Tempor nec pellentesque nisi in id fermentum. Mauris quis
                  dignissim augue pharetra diam ut. Et purus tristique
                  ullamcorper faucibus blandit tortor porta imperdiet
                  condimentum. In vitae turpis facilisis amet, sem. Porta nam
                  nisi vitae enim cras risus convallis posuere. Pretium vitae
                  iaculis sed lectus in. Quis sit nunc suscipit varius velit
                  malesuada. Amet nunc, turpis tempus convallis morbi integer.
                  Adipiscing aliquam lacus tempus, egestas id quis egestas sed.
                  Urna pretium mattis condimentum et ultrices tellus malesuada
                  id. Libero fusce nisi, urna lacinia. Lobortis quis malesuada
                  id diam aliquam diam proin. Fringilla malesuada enim fringilla
                  diam egestas. Dui et ipsum semper lectus purus. Nulla ut lorem
                  nulla amet eget feugiat.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className='planner__categories'>
          <div className='categories__more-span'>
            <span>More categories</span>
          </div>
        </div>

        <ul className='categories__planners-list'>
          <div>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Individual Trip Worldwide</span>
                </div>

                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Individual Trip Worldwide</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Wedding & Honeymoon Trips Worldwide</span>
                </div>

                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Wedding & Honeymoon Trips Worldwide</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Tailor made Experiences</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Tailor made Experiences</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Educational Trips</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Corporate & Incentive Trips In Greece</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>

            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Adult-Only</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Adult-Only</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
          </div>

          <div>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Group Trips</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Group Trips</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Corporate & Incentive Trips in Greece</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Corporate & Incentive Trips in Greece</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Holidays / Thematic holidays</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Holidays / Thematic holidays</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>

            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Luxury & Yachting Services</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Luxury & Yachting Services</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
            <li className='planner__list-item'>
              <div className='planner__default-content'>
                <div className='planner__default-title'>
                  <span>Villas</span>
                </div>
                <div className='planner__hover-content'>
                  <div className='planner__hover-title'>
                    <span>Villas</span>
                  </div>
                  <p className='planner__hover-text'>
                    Tempor nec pellentesque nisi in id fermentum. Mauris quis
                    dignissim augue pharetra diam ut. Et purus tristique
                    ullamcorper faucibus blandit tortor porta imperdiet
                    condimentum. In vitae turpis facilisis amet, sem. Porta nam
                    nisi vitae enim cras risus convallis posuere. Pretium vitae
                    iaculis sed lectus in. Quis sit nunc suscipit varius velit
                    malesuada. Amet nunc, turpis tempus convallis morbi integer.
                    Adipiscing aliquam lacus tempus, egestas id quis egestas
                    sed.
                  </p>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  )
}
