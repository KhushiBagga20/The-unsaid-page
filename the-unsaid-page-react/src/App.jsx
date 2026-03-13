import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Poems from './pages/Poems'
import Stories from './pages/Stories'
import Read from './pages/Read'
import Submit from './pages/Submit'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
