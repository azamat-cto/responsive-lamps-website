import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Popular } from './components/Popular'
import { Choose } from './components/Choose'
import { Features } from './components/Features'

function App() {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className="layout">
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <main className="main">
        <Home />
        <Popular />
        <Choose />
        <Features />
      </main>
    </div>
  )
}

export default App
