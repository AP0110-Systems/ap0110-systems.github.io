'use client'

import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  isLoading: false,
  error: null,
  selectedCountry: null,
  selectedConnection: null,
  theme: {
    colors: {
      primary: '#00b0ff',
      secondary: '#4ecdc4',
      accent: '#ff6b6b',
      background: '#000000',
      text: '#ffffff'
    },
    fonts: {
      primary: 'Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    }
  },
  autoRotate: true
}

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false }
    case 'SET_SELECTED_COUNTRY':
      return { ...state, selectedCountry: action.payload }
    case 'SET_SELECTED_CONNECTION':
      return { ...state, selectedConnection: action.payload }
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    case 'TOGGLE_AUTO_ROTATE':
      return { ...state, autoRotate: !state.autoRotate }
    case 'RESET_VIEW':
      return { ...state, selectedCountry: null, selectedConnection: null }
    default:
      return state
  }
}

const AppContext = createContext(undefined)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const selectCountry = (country) => {
    dispatch({ type: 'SET_SELECTED_COUNTRY', payload: country })
  }

  const selectConnection = (connection) => {
    dispatch({ type: 'SET_SELECTED_CONNECTION', payload: connection })
  }

  const clearSelection = () => {
    dispatch({ type: 'RESET_VIEW' })
  }

  const updateTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme })
  }

  const toggleAutoRotate = () => {
    dispatch({ type: 'TOGGLE_AUTO_ROTATE' })
  }

  const value = {
    state,
    dispatch,
    selectCountry,
    selectConnection,
    clearSelection,
    updateTheme,
    toggleAutoRotate
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

