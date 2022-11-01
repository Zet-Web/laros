import React, { useState } from 'react'

import './FileCover.scss'
import '../items-in-cart/items-in-cart.scss'

export const FileCover = ({ file = '' }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {/* <button
				className="file__cover"
				style={{ backgroundImage: `url(${file})` }}
				onClick={() => setIsVisible(true)}
			/>


			<div className={isVisible ? "wrapper__menu" : "wrapper__menu-none"}>
				<div className={isVisible ? "cart-menu--download" : "cart-menu--none"}>
					<div className="top__cart-menu">
						<div className="top__cart-text"><span>Sending you our brochure</span></div>
						<button className="close__btn" onClick={() => setIsVisible(false)}>Close</button>
					</div>

					<div className="download__cart-content">

						<div className="brochure__download">

							<div className="brochure__border">
								<img className="download__picture-cart" src="/images/brochures/download__picture-cart.jpg" alt="download" />
								<div className="brochure__download-topic"><span>Brochure topic</span></div>
								<div className="brochure__download-name"><span>Name of the brochure</span></div>
							</div>

						</div>

						<div>
							<div className="brochure__item">
								<label className="label__input" htmlFor="">Full name and surname</label>
								<input
									id="marker__download"
									className="brochure__input-name"
									type="text"
									placeholder="Jon Snow"
								/>
								<label className="marker__download" htmlFor="marker__download"><img src="/images/brochures/edit__pen.svg" alt="edit svg" /></label>
							</div>

							<ul className="brochures__list-radio--buttons">
								<span className="salutation">Salutation*</span>

								<li className="brochure__item-radio">
									<label htmlFor="salutation01" className="radio__item">
										<label htmlFor="salutation01" className="radio__button"></label>
										<input className="radio__box"  type="radio" id="salutation01" value="salutation01" name="salutation" />
										<span className="radio__style"></span>
										<span className="name__job">Mr</span>
									</label>
								</li>

								<li className="brochure__item-radio">
									<label htmlFor="salutation02" className="radio__item">
										<label htmlFor="salutation02" className="radio__button"></label>
										<input className="radio__box" type="radio" id="salutation02" value="salutation02" name="salutation" />
										<span className="radio__style"></span>
										<span className="name__job">Mrs</span>
									</label>
								</li>

								<li className="brochure__item-radio">
									<label htmlFor="salutation03" className="radio__item">
										<label htmlFor="salutation03" className="radio__button"></label>
										<input className="radio__box" type="radio" id="salutation03" value="salutation03" name="salutation" />
										<span className="radio__style"></span>
										<span className="name__job">Ms</span>
									</label>
								</li>

							</ul>

							<div className="brochure__item">
								<label className="label__input" htmlFor="">Email*</label>
								<input
									id="marker__download_email"
									className="brochure__input-email"
									type="text"
									placeholder="knownothing@example.com"
								/>
								<label className="marker__download" htmlFor="marker__download_email"><img src="/images/brochures/edit__pen.svg" alt="edit svg" /></label>
							</div>

							<div className="buttons__brochure-download">
								<input className="brochure__cancel" value="Cancel" type="submit" />
								<input className="btn__brochure-download" value="Download (2)" type="submit" />
							</div>

						</div>
					</div>
				</div>
			</div> */}
    </>
  )
}
