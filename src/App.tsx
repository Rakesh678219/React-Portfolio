import React from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'
export const App = () => {
  const name = 'Rakesh'
  return (
    <>
      <h1>
        {' '}
        React Portfolio {name} - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={IMAGE} alt="React logo" width="300" height="300" />
      <img src={LOGO} alt="React logo" width="300" />
      <ClickCounter />
    </>
  )
}
