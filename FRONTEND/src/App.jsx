import React from 'react'
import Home from './pages/home'
import Trending from './pages/trending'
import Food from './pages/food'
import Profile from './pages/profile'
import Detailfilm from './pages/detail-film'
import PilihBioskop from './pages/pilih-bioskop'
import PilihKursi from './pages/Pilih-kursi'
import Pembayaran from './pages/Pembayaran'
import Login from './pages/login'

import { BookingProvider } from './contexts/BookingContext'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavigationProvider } from './contexts/NavigationContext'

function App() {
  return (
    <div>
      <NavigationProvider>
        <BookingProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/trending' element={<Trending/>} />
            <Route path='/food' element={<Food/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/detail-film' element={<Detailfilm/>} />
            <Route path='/pilih-bioskop' element={<PilihBioskop/>} />
            <Route path='/pilih-kursi' element={<PilihKursi/>} />
            <Route path='/Pembayaran' element={<Pembayaran/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </BrowserRouter>
        </BookingProvider>
      </NavigationProvider>
    </div>
  )
}

export default App
