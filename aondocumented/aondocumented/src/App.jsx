import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col p-4 max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header/>
        <Home />
      </section>
      <h1 className='text-yellow-400'></h1>
      <footer></footer>
      </div>
    </>
  )
}

export default App
