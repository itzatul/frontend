import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import monitorReducersEnhancer from './utils/monitorReducer'
import loggerMiddleware from './utils/logger'
import rootReducer from './utils/reducers'

export default (preloadedState) => {
    const store = configureStore({
      reducer: rootReducer,
      middleware: [loggerMiddleware, ...getDefaultMiddleware()],
      preloadedState,
      enhancers: [monitorReducersEnhancer]
    })
  
    if (process.env.NODE_ENV !== 'production' && module.hot) {
      module.hot.accept('./utils/reducers', () => store.replaceReducer(rootReducer))
    }
  
    return store
  }