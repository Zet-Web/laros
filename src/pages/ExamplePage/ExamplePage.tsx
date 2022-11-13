import React, { FC, useEffect, useState } from 'react'
import { HotelCard } from 'features/HotelCard'
import { Input } from 'components/Input'
import { Slider } from 'features'
import { CategoryCard } from 'pages/TravelPlannerPage/CategoryCard'
import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import { ContactForm } from 'features/ContactForm'
import { Radio } from 'components/Radio'
import { Map, Modal, ReactPlayer } from 'components'
import { Checkbox } from 'components/Checkbox'
import { Tags } from 'components/Tags'
import { mockTags } from 'shared/mocks/tags'
import { ChangeLocationModal } from 'features/ChangeLocationModal'
import { destinationsMock } from 'shared/mocks/destinations'
import { TripCard } from 'features/TripCard'
import { tripCards } from 'shared/mocks/tripCards'

import s from './example.module.scss'
import { InputCalendar } from 'components/InputCalendar'

const gjson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [23.82335240986305, 37.97466393870391],
          [23.792187593783012, 37.87928330038466],
        ],
        type: 'LineString',
      },
    },
  ],
}

export const ExamplePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChangeCarOpen, setIsChangeCarOpen] = useState(false)
  const [input, setInput] = useState<any>()
  const [checkboxValue, setCheckboxValue] = useState('man')
  const [counter, setCounter] = useState<any | Date>('')
  const [counter1, setCounter1] = useState<any | Date>('')
  const [tags, setTags] = useState(mockTags)
  const tripCardData = tripCards[0]

  const [route, setRoute] = useState(
    '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://127.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90812],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835121],[23.796691,37.834666],[23.788354,37.834461],[23.784012,37.833139],[23.779146,37.832808],[23.772711,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://127.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://127.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003511],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961286],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908124],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://127.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}'
  )
  const [e, setE] = useState('ssssssssss')

  const location = 'SRID=4326;POINT (23.800629 37.813474)'

  const ee = (ee: string) => {
    setE(ee)
  }
  // @ts-ignore
  return (
    <div
      style={{
        marginTop: '45px',
        margin: '45px',
        width: '100%',
        backgroundColor: '#FAFBFC',
      }}
    >
      <div style={{ height: '750px', width: 'calc(100% - 50px)' }}>
        <Map route={route} />
      </div>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <div style={{ width: '1200px', margin: 'auto' }}>
        <Slider
          withNavigation
          nextEl='moreNext'
          prevEl='morePrev'
          classname={s.sliderCustom}
        >
          {moreCategoriesMock.map((card, id) => {
            return <CategoryCard {...card} key={id} vertical />
          })}
        </Slider>
      </div>

      <div
        style={{ marginTop: '15px', backgroundColor: '#FAFBFC', width: '100%' }}
      >
        <div style={{ width: '400px', marginLeft: 50 }}>
          {/* <InputCalendar label='Earliest depature' /> */}
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Counter'
            type='number'
            id='100'
            onChange={value => setCounter(value)}
            value={counter}
            withCounter
            max={5}
            min={1}
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Name&nbsp;&&nbsp;Surname:'
            placeholder='Enter your Name'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Email:'
            placeholder='Email'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='email'
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Phone&nbsp;number:'
            placeholder='Enter Phone'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='phone'
          />
        </div>
        <div style={{ width: '400px', marginTop: 100, marginLeft: 50 }}>
          <InputCalendar label='Earliest depature' />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Counter'
            type='number'
            id='100'
            onChange={value => setCounter(value)}
            value={counter}
            withCounter
            max={5}
            min={1}
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Name&nbsp;&&nbsp;Surname:'
            placeholder='Enter your Name'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            shorten
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Email:'
            placeholder='Email'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='email'
            shorten
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Phone&nbsp;number:'
            placeholder='Enter Phone'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='phone'
            shorten
          />
        </div>
        <div
          style={{ marginTop: '15px' }}
          onClick={() => setIsModalOpen(true)}
        />
        <Slider>
          {moreCategoriesMock.map((card, id) => {
            return <CategoryCard {...card} key={id} />
          })}
        </Slider>
        <ContactForm />
        <Radio
          onChange={v => setCheckboxValue(v)}
          name='sex'
          options={[
            { label: 'Man', value: 'man' },
            { label: 'Woman', value: 'woman' },
            { label: 'No', value: 'no' },
          ]}
          value={checkboxValue}
        />
        <Input
          id='num'
          value=''
          type='phone'
          label='Number'
          onChange={v => setInput(v)}
        />
        <Input
          placeholder='Mark'
          id='name'
          value={input}
          label='Fullname and surname'
          onChange={v => setInput(v)}
        />
        <Modal
          title='Contact Form'
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          Hello!
        </Modal>
        <Checkbox label={'Текст Чекбокса'} />
        {/*<Tags tags={tags} value={'test'} onChange={setTags} />*/}
        {/*<ChangeLocationModal*/}
        {/*  destinations={destinationsMock}*/}
        {/*  onClick={() => 1}*/}
        {/*  isOpen={isModalOpen}*/}
        {/*  onClose={() => setIsModalOpen(false)}*/}
        {/*/>*/}
      </div>
      {/*<HotelCard*/}
      {/*  tags={tags}*/}
      {/*  address={''}*/}
      {/*  description={''}*/}
      {/*  destination={1}*/}
      {/*  id={1}*/}
      {/*  images={[]}*/}
      {/*  is_active*/}
      {/*  link={''}*/}
      {/*  location={''}*/}
      {/*  min_price={''}*/}
      {/*  name={'te'}*/}
      {/*  opinion={''}*/}
      {/*  period={'1'}*/}
      {/*  rating={1}*/}
      {/*  tripadvisor_id={2}*/}
      {/*/>*/}

      <div
        style={{
          width: '1152px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <TripCard images={[]} name={''} price={0} {...tripCardData} wide />
      </div>
    </div>
  )
}
