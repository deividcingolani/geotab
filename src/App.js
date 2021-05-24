import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/globalTheme'
import { Map } from './components/Map/Map'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Map />
    </ThemeProvider>
  )
}

