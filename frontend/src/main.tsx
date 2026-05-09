import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Products from './components/Products.tsx'
import { Provider } from 'react-redux'
import store from "./redux/reduxStore.ts"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <Products />
    </Provider>
  </StrictMode>,
)
