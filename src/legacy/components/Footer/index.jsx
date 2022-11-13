import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='partners'>
          <div className='footer__block-img'>
            <img
              className='footer__img-first'
              src='/images/airport__footer.svg'
              alt='airport icon'
            />
            <img
              src='/images/reisegarantie__footer.svg'
              alt='reise garantie icon'
            />
          </div>

          <div className='footer__block-img'>
            <img
              className='footer__img-first'
              src='/images/srv__footer.svg'
              alt='srv icon'
            />
            <img src='/images/tps__footer.svg' alt='tps icon' />
          </div>
        </div>

        <div className='footer__about'>
          <div className='site__links'>
            <div className='subtitle__footer'>
              <span>SITE LINKS</span>
            </div>
            <ul className='footer__list-links'>
              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Home page
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Destination
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Trip planner
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Hotels
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Special offers
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Inspiration
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  About us
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Careers
                </Link>
              </li>

              <li className='footer__item-link'>
                <Link className='footer__link' to=''>
                  Brochure
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer__list-info'>
            <div className='footer__item-info'>
              <div className='subtitle__footer'>
                <span>CONTACT US</span>
              </div>
              <ul className='about__info-list'>
                <li className='footer__about-item'>
                  <p className='footer__link'>Hauptstrasse 94 CH-4147 Aesch</p>
                </li>
                <li className='footer__about-item'>
                  <p className='footer__link'>
                    Tel / Fax:
                    <span className='footer__link-num'>061 / 756 80 80</span>
                  </p>
                </li>
                <li className='footer__about-item'>
                  <p className='footer__link'>Email: info@laros.ch</p>
                </li>
              </ul>
            </div>

            <div className='footer__item-info'>
              <div className='subtitle__footer'>
                <span>WORKING HOURS:</span>
              </div>
              <ul className='about__info-list'>
                <li className='footer__about-item'>
                  <p className='footer__link'>
                    Mo:<span className='footer__link-num'>14:00 - 17:00</span>
                  </p>
                </li>
                <li className='footer__about-item'>
                  <p className='footer__link'>
                    Tu-Fr:
                    <span className='footer__link-num'>
                      10:00 - 12:00 and 14:00 - 17:00
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            <div className='footer__item-info'>
              <div className='subtitle__footer'>
                <span>FOLLOW US ON</span>
              </div>

              <ul className='social__list-footer'>
                <li className='social__item-footer'>
                  <Link to=''>
                    <img src='/images/instagram__footer.svg' alt='instagram' />
                  </Link>
                </li>

                <li className='social__item-footer'>
                  <Link to=''>
                    <img src='/images/facebook__footer.svg' alt='instagram' />
                  </Link>
                </li>

                <li className='social__item-footer'>
                  <Link to=''>
                    <img src='/images/linkedIn__footer.svg' alt='instagram' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='footer__navigation'>
        <div className='footer__nav'>
          <ul className='footer__nav-list'>
            <li className='footer__nav-item'>
              <Link className='footer__nav-link' to=''>
                Travel policy
              </Link>
            </li>
            <li>
              <span className='divide__line'>|</span>
            </li>
            <li className='footer__nav-item'>
              <Link className='footer__nav-link' to=''>
                Car rental policyTravel policy
              </Link>
            </li>
            <li>
              <span className='divide__line'>|</span>
            </li>
            <li className='footer__nav-item'>
              <Link className='footer__nav-link' to=''>
                Cookies policy
              </Link>
            </li>
            <li>
              <span className='divide__line'>|</span>
            </li>
            <li className='footer__nav-item'>
              <Link className='footer__nav-link' to=''>
                Terms of use
              </Link>
            </li>
            <li>
              <span className='divide__line'>|</span>
            </li>
            <li className='footer__nav-item'>
              <Link className='footer__nav-link' to=''>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer__text-info'>
          <p>© Laros Reisen. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
