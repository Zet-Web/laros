import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { motion } from 'framer-motion'

/*react-redux*/
import { Provider } from 'react-redux'
import { store } from './store/index'

/* components */
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
/*----region pages----*/
import { Destinations } from './pages/Destinations'
import { DestinationsCyprus } from './pages/Destinations/DestinationsCyprus'
import { Kyrenia } from './pages/Destinations/CyprusPages/Kyrenia'
import { Nicosia } from './pages/Destinations/CyprusPages/Nicosia'
import { Paphos } from './pages/Destinations/CyprusPages/Paphos'
import { Lamaca } from './pages/Destinations/CyprusPages/Lamaca'
import { Limassol } from './pages/Destinations/CyprusPages/Limassol'
import { Macedonia } from './pages/Destinations/GreecePages/Macedonia'
import { NibnSagittis } from './pages/Destinations/GreecePages/NibnSagittis'
import { ElitMolestie } from './pages/Destinations/GreecePages/ElitMolestie'
import { Attica } from './pages/Destinations/GreecePages/Attica'
import { LonianIslands } from './pages/Destinations/GreecePages/LonianIslands'
import { Aegean } from './pages/Destinations/GreecePages/Aegean'
import { Cyclades } from './pages/Destinations/GreecePages/Cyclades'
import { Crete } from './pages/Destinations/GreecePages/Crete'
/*----area page---*/
import { Area } from './pages/Area'
/*----requests pages (flight, package)----*/
import { FlightRequest } from './pages/Destinations/PagesReuest/FlightRequest'
import { RequestPackage } from './pages/Destinations/PagesReuest/RequestPackage'
/*----brochure page----*/
import { Brochure } from './pages/Brochure'
/* ----Tpip Planners */
import { TripPlanner } from './pages/TripPlanner/Planners'
import { IslandHopping } from './pages/TripPlanner/Planners/IslandHopping'
/** ----home page---- **/
import { Home } from './pages/Home'

import Cursor from './svg/cursor.png'

const PageLayout = ({ children }) => children

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 1,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.75,
}

const AnimationLayout = () => {
  const { pathname } = useLocation()
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial='initial'
        animate='in'
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  )
}

function App() {
  return (
    <div
      style={{
        cursor: 'url(' + Cursor + '), auto',
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Navigation />

          <Routes>
            <Route element={<AnimationLayout />}>
              <Route path='/destinations' element={<Destinations />} />
              <Route
                path='/destinations/cyprus'
                element={<DestinationsCyprus />}
              />
              <Route path='/destinations/kyrenia' element={<Kyrenia />} />
              <Route path='/destinations/nicosia' element={<Nicosia />} />
              <Route path='/destinations/paphos' element={<Paphos />} />
              <Route path='/destinations/lamaca' element={<Lamaca />} />
              <Route path='/destinations/limassol' element={<Limassol />} />
              <Route path='/destinations/macedonia' element={<Macedonia />} />

              <Route
                path='/destinations/nibn-sagittis'
                element={<NibnSagittis />}
              />
              <Route
                path='/destinations/elti-molestie'
                element={<ElitMolestie />}
              />
              <Route path='/destinations/attica' element={<Attica />} />
              <Route
                path='/destinations/lonian-islands'
                element={<LonianIslands />}
              />
              <Route path='/destinations/aegean' element={<Aegean />} />
              <Route path='/destinations/cyclades' element={<Cyclades />} />
              <Route path='/destinations/crete' element={<Crete />} />

              <Route path='/destinations/area' element={<Area />} />

              <Route
                path='/destinations/flight-request'
                element={<FlightRequest />}
              />
              <Route
                path='/destinations/request-package'
                element={<RequestPackage />}
              />

              <Route path='/brochure' element={<Brochure />} />
              <Route path='/trip-planner' element={<TripPlanner />} />
              <Route
                path='/trip-planner/island-hopping'
                element={<IslandHopping />}
              />

              <Route path='/home' element={<Home />} />
            </Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
