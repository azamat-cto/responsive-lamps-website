import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'

function App() {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false);
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
      </main>
    </div>
  )
}

export default App
