import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CustomerDetails from './pages/CustomerDetails'
import CustomerOrders from './pages/CustomerOrders'
import Customers from './pages/Customers'
import CustomerEdit from './pages/CustomerEdit'
import Layout from './Layout'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/customers"/>} />
            <Route path="customers" element={<Customers />}>
              <Route path=":id/details" element={<CustomerDetails />} />
              <Route path=":id/orders" element={<CustomerOrders />} />
              <Route path=":id/edit" element={<CustomerEdit />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
