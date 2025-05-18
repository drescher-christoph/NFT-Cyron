import { useState } from 'react'
import NavBar from './components/NavBar'
import MintSection from './sections/MintSection'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <NavBar />
    </header>
      <main>
        <MintSection />
      </main>
      <Footer />
    </>
  )
}

export default App
