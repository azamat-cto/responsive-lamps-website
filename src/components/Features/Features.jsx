import { Container } from '@mui/material'
import FeaturesLamp from '../../assets/images/features-lamp.png'

const Features = () => {
  return (
    <section className="features section" id="features">
      <Container>
        <div className="features__grid grid">
          <div className="features__image">
            <div className="features__blob">
              <img className="features__img" src={FeaturesLamp} alt="Features Lamp" />
              <h1 className="features__blob-title">LIGHT</h1>
            </div>

            <div className="img-shadow"></div>
          </div>

          <div className="features__content">
            <div className="features__data">
              <h2 className="section__title">
                Latest Features
              </h2>
              <p className="features__desc">
                We always provide the latest and best
                features for your customer, don't worry, we
                provide the latest technology for you.
              </p>
            </div>

            <div className="features__info">
              <div className="features__info-card">
                <h3 className="features__info-title">
                  Voltage <br /> Settings
                </h3>
              </div>

              <div className="features__info-card">
                <h3 className="features__info-title">
                  Application <br /> Control
                </h3>
              </div>

              <div className="features__info-card">
                <h3 className="features__info-title">
                  Voice <br /> Control
                </h3>
              </div>

              <div className="features__info-card">
                <h3 className="features__info-title">
                  Schedule <br /> Settings
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features
