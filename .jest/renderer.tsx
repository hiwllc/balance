import { ReactNode, ReactElement } from "react";
import { render, RenderOptions } from '@testing-library/react'
import { AppProviders } from '../src/components/providers'

interface ProvidersProps {
  children?: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AppProviders>
      {children}
    </AppProviders>
  )
}

const renderer = (ui: ReactElement, options?: RenderOptions) => (
  render(ui, { wrapper: Providers, ...options })
)

export * from '@testing-library/react'
export { renderer as render }
