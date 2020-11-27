import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global.styles'
import lightTheme from 'styles/lightTheme'
import darkTheme from 'styles/darkTheme'
import accessibilityTheme from 'styles/accessibilityTheme'

import { ManageThemeContext } from 'contexts/ThemeContext'
const defaultMode = 'light'

function App({ Component, pageProps }: AppProps) {
  const [themeState, setThemeState] = useState({
    mode: defaultMode
  })

  const changeTheme = (event: React.ChangeEvent<HTMLSelectElement>): void =>
    setThemeState({ mode: event.target.value })

  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <ManageThemeContext.Provider
        value={{
          mode: themeState.mode,
          changeTheme
        }}
      >
        <ThemeProvider
          theme={
            themeState.mode == 'dark'
              ? darkTheme
              : themeState.mode == 'accessibility'
              ? accessibilityTheme
              : lightTheme
          }
        >
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ManageThemeContext.Provider>
    </>
  )
}

export default App
