import './app.css'
import Card from './components/Card/Card'

export function App() {
  return (
    <div
      class={
        'flex justify-center items-center h-[100vh] w-full bg-bg-primary  bg-primary-10 '
      }
    >
      <Card />
    </div>
  )
}
