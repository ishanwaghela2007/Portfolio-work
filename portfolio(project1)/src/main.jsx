import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormProvider from './Context/ContextProvider.jsx'
import {Provider} from './components/ui/provider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <FormProvider>
      <App />
    </FormProvider>
    </Provider>
  </StrictMode>,
)
