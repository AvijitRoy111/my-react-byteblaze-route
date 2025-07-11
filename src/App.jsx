import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1">
        <Outlet></Outlet>
      </main>


      <Footer />
    </div>
  )
}

export default App
