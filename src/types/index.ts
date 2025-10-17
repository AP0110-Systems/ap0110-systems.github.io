// Advanced TypeScript patterns for better type safety

export interface Country {
  id: string
  name: string
  lat: number
  lng: number
  color: string
}

export interface GlobeConfig {
  width: number
  height: number
  backgroundColor: string
  showGlobe: boolean
  showGraticules: boolean
  autoRotate: boolean
  autoRotateSpeed: number
}

export interface GlobeControls {
  enableZoom: boolean
  enableRotate: boolean
  minPolarAngle: number
  maxPolarAngle: number
}

export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  fonts: {
    primary: string
    mono: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}



export interface Connection {
  id: string
  from: string
  to: string
  strength: number
  color: string
  animated: boolean
}


// Utility types
export type Color = Country['color']
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Generic types for API handling
export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ErrorResponse {
  error: string
  code: string
  details?: Record<string, unknown>
}
