import { render } from 'preact'
import { App } from './app.tsx'
import { QueryClientProvider } from 'react-query'
import queryClient from './services/queryClient.ts'
import './index.css'

render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('app')!
)
