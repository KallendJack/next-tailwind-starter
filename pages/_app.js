import '../css/_main.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useState } from 'react'
import { Context, UpdateContext } from '../Context'

const App = ({ Component, pageProps }) => {
  const { pageData } = pageProps

  const Provider = ({ children }) => {
    const [state, setState] = useState({
      pageData: pageData,
    })

    const updateState = {}

    return (
      <Context.Provider value={state}>
        <UpdateContext.Provider value={updateState}>
          {children}
        </UpdateContext.Provider>
      </Context.Provider>
    )
  }

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
