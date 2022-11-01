import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { FiPlus } from 'react-icons/fi'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Area.scss'
import './slider.scss'

export const Area = () => {
  const [isVisible, setIsVisible] = useState(false)

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return <div className='next__arrow' onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <div className='prev__arrow' onClick={onClick} />
  }

  function HoverNextArrow(props) {
    const { className, style, onClick } = props
    return <div className='next__arrow-hover' onClick={onClick} />
  }

  function HoverPrevArrow(props) {
    const { className, style, onClick } = props
    return <div className='prev__arrow-hover' onClick={onClick} />
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const settingsHover = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/images/area-images/${i + 1}.jpg`} />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HoverNextArrow />,
    prevArrow: <HoverPrevArrow />,
  }

  return (
    <>
      <div className='area__content'>
        <div className='area__bg'></div>

        <div className='thessaloniki__out-block'>
          <h2 className='thessaloniki__title'>Thessaloniki</h2>
          <div>
            <span className='thessaloniki__area-location'>
              Central Macedonia, Greece
            </span>
          </div>
          <p className='thessaloniki__area-text'>
            Thessaloniki is a Greek port city on the Thermaic Gulf of the Aegean
            Sea. Evidence of Roman, Byzantine and Ottoman history remains,
            especially around Ano Poli, the upper town. The ruins of Roman
            Emperor Galerius’ 4th-century palace include the Rotunda that has
            been both a church and a mosque
          </p>
          <p className='thessaloniki__area-text'>
            Much of the city center was destroyed in the Great Fire of 1917. The
            rebuilt 20th-century city has a modern European layout.
          </p>

          <div className='highlights'>
            <div className='highlight__block'>
              <img src='/images/area-images/binoculars.svg' alt='binoculars' />
              <span className='highlight__variants'>Highlights:</span>
            </div>

            <div className='highlights__list'>
              <div className='highlights__item'>
                <span>White tower of Thessaloniki</span>
              </div>
              <div className='highlights__item'>
                <span>Archaeological Museum of Thessaloniki</span>
              </div>
              <div className='highlights__item'>
                <span>Arch of Galerius</span>
              </div>
              <div className='highlights__item'>
                <span>Church of St. Demetrios</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='overview__area-block'>
        <h4 className='area__h4-title'>Overview</h4>
        <p className='overview__area-text'>
          Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius
          eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna
          a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est
          eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus
          rhoncus quis adipiscing.
        </p>
        <p className='overview__area-text'>
          Aenean fringilla vulputate maecenas amet, mattis id odio ultrices
          imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque
          pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget
          massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus,
          magna nisl blandit pellentesque.
        </p>
      </div>

      <div className='area__slider'>
        <Slider {...settings} className='slider'>
          <div className='slide__item' onDoubleClick={() => setIsVisible(true)}>
            <img
              className='slide__item-img'
              src='/images/area-images/slide__icon.png'
              alt='slide picture'
            />
          </div>
          <div className='slide__item' onDoubleClick={() => setIsVisible(true)}>
            <img
              className='slide__item-img'
              src='/images/area-images/slide__icon.png'
              alt='slide picture'
            />
          </div>
          <div className='slide__item' onDoubleClick={() => setIsVisible(true)}>
            <img
              className='slide__item-img'
              src='/images/area-images/slide__icon.png'
              alt='slide picture'
            />
          </div>
          <div className='slide__item' onDoubleClick={() => setIsVisible(true)}>
            <img
              className='slide__item-img'
              src='/images/area-images/slide__icon.png'
              alt='slide picture'
            />
          </div>
          <div className='slide__item' onDoubleClick={() => setIsVisible(true)}>
            <img
              className='slide__item-img'
              src='/images/area-images/slide__icon.png'
              alt='slide picture'
            />
          </div>
          <div className='slide__item' onDoubleClick={() => setIsVisible(true)}>
            <img
              className='slide__item-img'
              src='/images/area-images/slide__icon.png'
              alt='slide picture'
            />
          </div>
        </Slider>
      </div>

      <div className={isVisible ? 'area__slider2' : 'hidden'}>
        <button className='btn__area-close' onClick={() => setIsVisible(false)}>
          <FiPlus className='fi-plus' />
        </button>
        <div className='area__slider2-wrapper'>
          <Slider {...settingsHover} className='slider__hover'>
            <div className='slide__item'>
              <img
                className='picture__inside-slide'
                src='/images/area-images/slide__icon.png'
              />
            </div>
            <div className='slide__item'>
              <img
                className='picture__inside-slide'
                src='/images/area-images/slide__icon.png'
              />
            </div>
            <div className='slide__item'>
              <img
                className='picture__inside-slide'
                src='/images/area-images/slide__icon.png'
              />
            </div>
            <div className='slide__item'>
              <img
                className='picture__inside-slide'
                src='/images/area-images/slide__icon.png'
              />
            </div>
            <div className='slide__item'>
              <img
                className='picture__inside-slide'
                src='/images/area-images/slide__icon.png'
              />
            </div>
            <div className='slide__item'>
              <img
                className='picture__inside-slide'
                src='/images/area-images/slide__icon.png'
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className='sub__content-slider'>
        <p className='text__subcontent'>
          Sed pharetra sed egestas morbi sagittis senectus. Arcu imperdiet dolor
          velit diam, aliquam eu vitae nec sed. Pellentesque placerat convallis
          egestas in arcu a, est velit cras. Sit sed amet, amet enim.
          Condimentum amet, id vitae, neque gravida. Sed rhoncus vel dolor
          gravida vitae sed pharetra enim.
        </p>
        <p className='text__subcontent'>
          Facilisis tincidunt aenean nulla ipsum faucibus placerat. Nunc ipsum
          orci venenatis, suscipit mauris pharetra. Sagittis pharetra gravida
          metus, ipsum morbi nec elit tristique. Egestas senectus neque gravida
          est. Venenatis, egestas et mus lectus fringilla tortor odio faucibus.
          Enim proin at luctus sed arcu neque. Felis viverra convallis fames
          pulvinar massa mi, nulla tincidunt nisl. Non eu diam blandit nec enim.
          Aliquet quis at vel proin at tempor volutpat gravida. Quis auctor
          dignissim a ultrices nec duis aliquam. Sagittis ut eleifend vitae
          tellus. Ultricies nec suspendisse suspendisse dictum aliquam.
        </p>
      </div>

      <section className='section__carts-place--vacation'>
        <h4 className='area__h4-title'>Pre-defined trips in Tessaloniki</h4>
        <p className='area__subtitle-carts'>
          At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
          in orci, pretium nulla volutpat leo.
        </p>

        <div className={'SliderWrapper'}>
          <Swiper
            className='swiper__simple-slider'
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart'>
                      <div className='discount__vacation'>
                        <span>-15% OFF</span>
                        <img
                          src='/images/area-images/discount.svg'
                          alt='discount'
                        />
                      </div>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__vacation-first.png'
                        alt='picture'
                      />

                      <div className='description__cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Region name</span>
                          </div>
                          <div className='main__parameter'>
                            <span>Edessa - Archontiko</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter'>
                            <span>900 CHF</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__less-cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                        <div className='description__block description__block-less'>
                          <div className='pre__parameter'>
                            <span>Duration</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>10 Days</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='together__blocks'>
                          <img
                            src='/images/area-images/flight__plane.svg'
                            alt='plane'
                          />
                          <span>Flight start from Zurich</span>
                        </div>

                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Beach view</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>View offer</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__vacation-second.png'
                        alt='picture'
                      />

                      <div className='description__cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Region name</span>
                          </div>
                          <div className='main__parameter'>
                            <span>Kastoria - Archontiko</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter'>
                            <span>900 CHF</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__less-cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                        <div className='description__block description__block-less'>
                          <div className='pre__parameter'>
                            <span>Duration</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>10 Days</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='together__blocks'>
                          <img
                            src='/images/area-images/flight__plane.svg'
                            alt='plane'
                          />
                          <span>Flight start from Zurich</span>
                        </div>

                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Beach view</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>View offer</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__vacation-third.png'
                        alt='picture'
                      />

                      <div className='description__cart'>
                        <div className='description__block'>
                          <div className='pre__parameter pre__parameter-absolute'>
                            <span>Region name</span>
                          </div>
                          <div className='main__parameter main__parameter-absolute'>
                            <span>Lemos - Traditional House</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter'>
                            <span>900 CHF</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__less-cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                        <div className='description__block description__block-less'>
                          <div className='pre__parameter'>
                            <span>Duration</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>10 Days</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='together__blocks'>
                          <img
                            src='/images/area-images/flight__plane.svg'
                            alt='plane'
                          />
                          <span>Flight start from Zurich</span>
                        </div>

                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Beach view</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>View offer</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slider-block'>
                <div className='slide__item-car--div'>
                  <ul>
                    <li>
                      <div className='slide__item-cart'>
                        <div className='discount__vacation'>
                          <span>-15% OFF</span>
                          <img
                            src='/images/area-images/discount.svg'
                            alt='discount'
                          />
                        </div>
                        <img
                          className='cart__vacation-icon'
                          src='/images/area-images/cart__vacation-first.png'
                          alt='picture'
                        />

                        <div className='description__cart'>
                          <div className='description__block'>
                            <div className='pre__parameter'>
                              <span>Region name</span>
                            </div>
                            <div className='main__parameter'>
                              <span>Edessa - Archontiko</span>
                            </div>
                          </div>
                          <div className='description__block'>
                            <div className='pre__parameter'>
                              <span>From</span>
                            </div>
                            <div className='main__parameter'>
                              <span>900 CHF</span>
                            </div>
                            <div className='pre__parameter'>
                              <span>Pro person</span>
                            </div>
                          </div>
                        </div>

                        <div className='description__less-cart'>
                          <div className='description__block'>
                            <div className='pre__parameter'>
                              <span>Travel period</span>
                            </div>
                            <div className='main__subparameter'>
                              <span>Summer, 2022</span>
                            </div>
                          </div>
                          <div className='description__block description__block-less'>
                            <div className='pre__parameter'>
                              <span>Duration</span>
                            </div>
                            <div className='main__subparameter'>
                              <span>10 Days</span>
                            </div>
                          </div>
                        </div>

                        <div className='description__last-cart'>
                          <div className='together__blocks'>
                            <img
                              src='/images/area-images/flight__plane.svg'
                              alt='plane'
                            />
                            <span>Flight start from Zurich</span>
                          </div>

                          <div className='proses__hotel'>
                            <div className='pros__hotel cart__hotel-blue--light'>
                              <span>Beach view</span>
                            </div>
                            <div className='pros__hotel cart__hotel-blue--dark'>
                              <span>Beach view</span>
                            </div>
                          </div>
                        </div>
                        <Link to=''>
                          <div className='link_offer'>View offer</div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__vacation-second.png'
                        alt='picture'
                      />

                      <div className='description__cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Region name</span>
                          </div>
                          <div className='main__parameter'>
                            <span>Kastoria - Archontiko</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter'>
                            <span>900 CHF</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__less-cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                        <div className='description__block description__block-less'>
                          <div className='pre__parameter'>
                            <span>Duration</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>10 Days</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='together__blocks'>
                          <img
                            src='/images/area-images/flight__plane.svg'
                            alt='plane'
                          />
                          <span>Flight start from Zurich</span>
                        </div>

                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Beach view</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>View offer</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__vacation-third.png'
                        alt='picture'
                      />

                      <div className='description__cart'>
                        <div className='description__block'>
                          <div className='pre__parameter pre__parameter-absolute'>
                            <span>Region name</span>
                          </div>
                          <div className='main__parameter main__parameter-absolute'>
                            <span>Lemos - Traditional House</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter'>
                            <span>900 CHF</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__less-cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                        <div className='description__block description__block-less'>
                          <div className='pre__parameter'>
                            <span>Duration</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>10 Days</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='together__blocks'>
                          <img
                            src='/images/area-images/flight__plane.svg'
                            alt='plane'
                          />
                          <span>Flight start from Zurich</span>
                        </div>

                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Beach view</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>View offer</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slider-block'>
                <div className='slide__item-car--div'>
                  <ul>
                    <li>
                      <div className='slide__item-cart'>
                        <div className='discount__vacation'>
                          <span>-15% OFF</span>
                          <img
                            src='/images/area-images/discount.svg'
                            alt='discount'
                          />
                        </div>
                        <img
                          className='cart__vacation-icon'
                          src='/images/area-images/cart__vacation-first.png'
                          alt='picture'
                        />

                        <div className='description__cart'>
                          <div className='description__block'>
                            <div className='pre__parameter'>
                              <span>Region name</span>
                            </div>
                            <div className='main__parameter'>
                              <span>Edessa - Archontiko</span>
                            </div>
                          </div>
                          <div className='description__block'>
                            <div className='pre__parameter'>
                              <span>From</span>
                            </div>
                            <div className='main__parameter'>
                              <span>900 CHF</span>
                            </div>
                            <div className='pre__parameter'>
                              <span>Pro person</span>
                            </div>
                          </div>
                        </div>

                        <div className='description__less-cart'>
                          <div className='description__block'>
                            <div className='pre__parameter'>
                              <span>Travel period</span>
                            </div>
                            <div className='main__subparameter'>
                              <span>Summer, 2022</span>
                            </div>
                          </div>
                          <div className='description__block description__block-less'>
                            <div className='pre__parameter'>
                              <span>Duration</span>
                            </div>
                            <div className='main__subparameter'>
                              <span>10 Days</span>
                            </div>
                          </div>
                        </div>

                        <div className='description__last-cart'>
                          <div className='together__blocks'>
                            <img
                              src='/images/area-images/flight__plane.svg'
                              alt='plane'
                            />
                            <span>Flight start from Zurich</span>
                          </div>

                          <div className='proses__hotel'>
                            <div className='pros__hotel cart__hotel-blue--light'>
                              <span>Beach view</span>
                            </div>
                            <div className='pros__hotel cart__hotel-blue--dark'>
                              <span>Beach view</span>
                            </div>
                          </div>
                        </div>
                        <Link to=''>
                          <div className='link_offer'>View offer</div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__vacation-second.png'
                        alt='picture'
                      />

                      <div className='description__cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Region name</span>
                          </div>
                          <div className='main__parameter'>
                            <span>Kastoria - Archontiko</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter'>
                            <span>900 CHF</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__less-cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                        <div className='description__block description__block-less'>
                          <div className='pre__parameter'>
                            <span>Duration</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>10 Days</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='together__blocks'>
                          <img
                            src='/images/area-images/flight__plane.svg'
                            alt='plane'
                          />
                          <span>Flight start from Zurich</span>
                        </div>

                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Beach view</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>View offer</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__vacation-third.png'
                        alt='picture'
                      />

                      <div className='description__cart'>
                        <div className='description__block'>
                          <div className='pre__parameter pre__parameter-absolute'>
                            <span>Region name</span>
                          </div>
                          <div className='main__parameter main__parameter-absolute'>
                            <span>Lemos - Traditional House</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter'>
                            <span>900 CHF</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__less-cart'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                        <div className='description__block description__block-less'>
                          <div className='pre__parameter'>
                            <span>Duration</span>
                          </div>
                          <div className='main__subparameter'>
                            <span>10 Days</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='together__blocks'>
                          <img
                            src='/images/area-images/flight__plane.svg'
                            alt='plane'
                          />
                          <span>Flight start from Zurich</span>
                        </div>

                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Beach view</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>View offer</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className='insider__tips'>
        <div className='insider__tips-container'>
          <h4 className='area__h4-title'>Insider tips</h4>

          <div>
            <p>
              Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius
              eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et
              urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor
              est eleifend vulputate egestas. Lacus mollis vel, eu, congue
              tellus rhoncus quis adipiscing.
            </p>
            <p>
              Aenean fringilla vulputate maecenas amet, mattis id odio ultrices
              imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque
              pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut
              eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque
              lacus, magna nisl blandit pellentesque.
            </p>
          </div>

          <div className='insider__images'>
            <img
              className='inside__image-item'
              src='/images/area-images/insider__picture-one.jpg'
              alt='picture insider'
            />
            <img
              className='inside__image-item'
              src='/images/area-images/insider__picture-two.jpg'
              alt='picture insider'
            />
            <img
              className='inside__image-item'
              src='/images/area-images/insider__picture-three.jpg'
              alt='picture insider'
            />
          </div>
        </div>
      </section>

      <section className='section__cart-slider--hotels'>
        <h4 className='area__h4-title'>Hotels in Tessaloniki</h4>
        <p className='area__subtitle-carts'>
          At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
          in orci, pretium nulla volutpat leo.
        </p>

        <div className={'SliderWrapper'}>
          <Swiper
            className='swiper__simple-slider-last'
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-one.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-two.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-three.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-one.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-two.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-three.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-one.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-two.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper__slide-hotel'>
              <div className='slide__item-car--div'>
                <ul>
                  <li>
                    <div className='slide__item-cart--last'>
                      <img
                        className='cart__vacation-icon'
                        src='/images/area-images/cart__hotel-three.jpg'
                        alt='picture'
                      />

                      <div className='description__cart-hotel--description'>
                        <div className='hotel__stars'>
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                          <img
                            className='hotel__star'
                            src='/images/area-images/hotel__star.svg'
                            alt='star hotel'
                          />
                        </div>
                        <div className='pre__parameter hotel__area-pad'>
                          <span>Type (Hotel/hostel ect)</span>
                        </div>
                        <div className='main__parameter'>
                          <span>Hotel Name</span>
                        </div>
                      </div>

                      <div className='description__cart-hotel'>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>From</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>41 CHF / Night</span>
                          </div>
                          <div className='pre__parameter'>
                            <span>Pro person</span>
                          </div>
                        </div>
                        <div className='description__block'>
                          <div className='pre__parameter'>
                            <span>Travel period</span>
                          </div>
                          <div className='main__parameter-hotel'>
                            <span>Summer, 2022</span>
                          </div>
                        </div>
                      </div>

                      <div className='description__last-cart'>
                        <div className='proses__hotel'>
                          <div className='pros__hotel cart__hotel-blue--light'>
                            <span>Beach view</span>
                          </div>
                          <div className='pros__hotel cart__hotel-blue--dark'>
                            <span>Sea lovers</span>
                          </div>
                        </div>
                      </div>
                      <Link to=''>
                        <div className='link_offer'>Check available dates</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
