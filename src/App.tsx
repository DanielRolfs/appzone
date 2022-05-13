import React from 'react';
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import deLocale from 'date-fns/locale/de'

import MainWithTabBar from './pages/MainWithTabBar'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

const localeMap = {
  de: deLocale,
}

function App() {
  const [locale] = React.useState<keyof typeof localeMap>('de')
  return (
    <div className="App w-screen h-screen">
    
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
        <BrowserRouter basename="">
          <Routes>
            <Route path="/" element={<MainWithTabBar />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
}

export default App;
