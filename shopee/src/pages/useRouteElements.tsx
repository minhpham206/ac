import React from 'react'
import { useRoutes } from 'react-router-dom'
import RegisterLayout from 'src/layouts/RegisterLayout'
import Login from './Login'
import ProductList from './ProductList'
import Register from './Register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return routeElements
}
