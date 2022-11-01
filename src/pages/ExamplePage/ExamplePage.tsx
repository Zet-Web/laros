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
import { TripCard } from 'pages/TravelPlannerPage/TripCard'
import { tripCards } from 'shared/mocks/tripCards'
import { ChangeTransferModal } from 'features/ChangeTransferModal'
import { carsMock } from 'shared/mocks/cars'
import { TransferType } from 'shared/types/car'
import axios from 'axios'

import s from './example.module.scss'
import { GeoJsonObject } from 'geojson'

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

  const [route, setRoute] = useState()
  const [newRoute, _] = useState<any>()

  React.useEffect(() => {
    async function getRoute() {
      await axios({
        method: 'GET',
        url: 'http://165.227.155.246/api/trip/1',
      }).then(data => setRoute(data.data.data.route))
    }
    getRoute()
  }, [])

  const [e, setE] = useState('ssssssssss')

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
      <button onClick={() => _(gjson)}>Click</button>
      <button onClick={() => _(null)}>Click</button>
      <div style={{ height: '800px', width: 'calc(100% - 50px)' }}>
        <Map route={route} additionalRoutes={JSON.stringify(newRoute)} />
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
          {/* <InputCalendar label='Earliest depature' shorten /> */}
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
        <Tags tags={tags} onChange={setTags} />
        <ChangeLocationModal
          // @ts-ignore
          destinations={destinationsMock}
          onClick={() => 1}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <HotelCard
        tags={tags}
        address={''}
        description={''}
        destination={1}
        id={1}
        images={[]}
        is_active
        link={''}
        location={''}
        min_price={''}
        name={'te'}
        opinion={''}
        period={'1'}
        rating={1}
        tripadvisor_id={2}
      />
      <ChangeTransferModal
        cars={carsMock}
        type={TransferType.PICKUP}
        onClick={() => 1}
        isOpen={isChangeCarOpen}
        onClose={() => setIsChangeCarOpen(false)}
      />
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
