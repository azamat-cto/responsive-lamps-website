import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Popular } from './components/Popular'
import { Choose } from './components/Choose'

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
      </main>
    </div>
  )
}

export default App
