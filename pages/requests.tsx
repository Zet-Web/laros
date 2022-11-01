import { NextPage } from 'next'
import { RequestsLayout } from 'features/RequestsLayout'

const Home: NextPage = () => (
  <RequestsLayout>
    <div>Test children</div>
  </RequestsLayout>
)

export default Home
