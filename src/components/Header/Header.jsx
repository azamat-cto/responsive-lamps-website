import { useEffect, useState } from 'react'
import { Container, Drawer } from '@mui/material'

const Header = (props) => {
  const { open, handleDrawerClose, handleDrawerOpen } = props
  const [scroll, setScroll] = useState(false)

  const listenScrollEvent = (e) => {
    if (window.scrollY >= 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [scroll])

  return (
    <header className={`${scroll ? 'header scroll-header' : 'header'}`}>
      <Container>
        <div className="header__toolbar">
          <div className="logo">
            <a className="logo__link" href="#home">
              SUN<span className="logo__decor">LIGHT</span>
            </a>
          </div>

          <div className="desktop-navbar">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#popular">
                    Popular
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#choose">
                    Choose
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#products">
                    Products
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <Drawer
            className="mobile-navbar"
            anchor="top"
            open={open}
            onClose={handleDrawerClose}
            sx={{
              '& .MuiDrawer-paper': {
                boxShadow: '0 2px 16px hsla(0, 0%, 0%, 0.1)'
              },
              '& .MuiModal-backdrop': {
                backgroundColor: 'transparent'
              }
            }}
          >
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#home"
                    onClick={handleDrawerClose}
                  >
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#popular"
                    onClick={handleDrawerClose}
                  >
                    Popular
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#choose"
                    onClick={handleDrawerClose}
                  >
                    Choose
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#products"
                    onClick={handleDrawerClose}
                  >
                    Products
                  </a>
                </li>
              </ul>
            </nav>

            <button className="btn close-menu" onClick={handleDrawerClose}>
              <i className="ri-close-line"></i>
            </button>
          </Drawer>

          <div className="header__action">
            <button className="btn change-theme">
              <i className="ri-contrast-2-line"></i>
            </button>
            <button className="btn open-menu" onClick={handleDrawerOpen}>
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
