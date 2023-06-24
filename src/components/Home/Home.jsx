import { Container } from '@mui/material'
import HomeLamp from '../../assets/images/home-lamp.png'

const Home = () => {
  return (
    <section className="home section">
      <div className="home__bg"></div>

      <Container>
        <div className="home__grid grid">
          <div className="home__content grid">
            <div className="home__data">
              <h3 className="home__subtitle">
                The best light bulbs
              </h3>
              <h1 className="home__title">
                Unique Light <br />
                For Your Home
              </h1>

              <div className="home__btns">
                <a className="btn-contained" href="#">Discover Now</a>
                <a className="btn-icon" href="#">
                  <i className="ri-play-circle-line"></i> Watch Video
                </a>
              </div>
            </div>

            <div className="home__info">
              <div>
                <h3 className="home__info-title">
                  9K<span>+</span>
                </h3>
                <p className="home__info-subtitle">
                  Premium <br /> Product
                </p>
              </div>

              <div>
                <h3 className="home__info-title">
                  2K<span>+</span>
                </h3>
                <p className="home__info-subtitle">
                  Happy <br /> Customers
                </p>
              </div>

              <div>
                <h3 className="home__info-title">
                  28<span>+</span>
                </h3>
                <p className="home__info-subtitle">
                  Awards <br /> Winning
                </p>
              </div>
            </div>
          </div>

          <div className="home__image">
            <div className="home__blob">
              <img className="home__img" src={HomeLamp} alt="Home lamp image" />
              <h1 className="home__blob-title">LIGHT</h1>
            </div>
            <div className="home__shadow"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Home
