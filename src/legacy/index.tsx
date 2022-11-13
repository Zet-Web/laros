// @ts-nocheck
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'

import { store } from './redux/store'

const rootElem = document.getElementById('root')

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem)

  root.render(
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
