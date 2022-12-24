import { NextPage } from 'next'
import { HotelPage } from '../../../src/pages/HotelPage'
import { HotelPageProps } from '../[id]'
import { getHotelByName } from '../../../src/shared/api/routes/hotels'

const Hotel: NextPage<HotelPageProps> = ({ hotel }) => {
  return <HotelPage hotelProp={hotel} />
}

export async function getServerSideProps(context: any) {
  const { name } = context.query
  const { data } = await getHotelByName(name)
  //@ts-ignore
  return { props: { hotel: data.data } }
}

export default Hotel
