import { NextPage } from 'next'
import { HotelPage } from 'pages/HotelPage/HotelPage'
import { getHotel } from '../../src/shared/api/routes/hotels'
import { Hotel } from '../../src/shared/types/hotel'

export interface HotelPageProps {
  hotel: Hotel
}

const Hotel: NextPage<HotelPageProps> = ({ hotel }) => {
  return <HotelPage hotelProp={hotel} />
}

export async function getServerSideProps(context: any) {
  const { id } = context.query
  const hotelId = Number(id)

  const { data } = await getHotel(hotelId)

  //@ts-ignore
  const hotel = data.data
  return { props: { hotel } }
}

export default Hotel
