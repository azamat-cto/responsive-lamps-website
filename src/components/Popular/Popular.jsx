import { useRef } from 'react'
import { Container } from '@mui/material'
import ModernLamp from '../../assets/images/modern-lamp.png'
import IndustrialLamp from '../../assets/images/industrial-lamp.png'
import SuperbolwLamp from '../../assets/images/superbolw-lamp.png'
import UltrawideLamp from '../../assets/images/ultrawide-lamp.png'
import RoundnessLight from '../../assets/images/roundness-light.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

const Popular = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className="popular section" id="popular">
      <Container>
        <div className="popular__grid">
          <div className="popular__data">
            <h2 className="section__title">Popular Products</h2>
            <p className="popular__desc">
              Find our best products faster and get the quality lights we have
              for you.
            </p>
          </div>

          <div className="popular__content">
            <Swiper
              slidesPerView="1"
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
              }}
              modules={[Navigation]}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current
                  swiper.params.navigation.nextEl = navigationNextRef.current
                  swiper.navigation.destroy()
                  swiper.navigation.init()
                  swiper.navigation.update()
                })
              }}
            >
              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__blob">
                    <img
                      className="popular__img"
                      src={ModernLamp}
                      alt="Modern lamp"
                    />
                  </div>
                  <h3 className="popular__name">Modern Light</h3>
                  <p className="popular__subtitle">Hanging Light</p>
                  <p className="popular__price">
                    <span>$</span>14
                  </p>
                  <button className="popular__button">
                    <i className="ri-add-line"></i>
                  </button>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__blob">
                    <img
                      className="popular__img"
                      src={IndustrialLamp}
                      alt="Industrial lamp"
                    />
                  </div>
                  <h3 className="popular__name">Industrial Lamp</h3>
                  <p className="popular__subtitle">Hanging Light</p>
                  <p className="popular__price">
                    <span>$</span>20
                  </p>
                  <button className="popular__button">
                    <i className="ri-add-line"></i>
                  </button>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__blob">
                    <img
                      className="popular__img"
                      src={SuperbolwLamp}
                      alt="Superbolw lamp"
                    />
                  </div>
                  <h3 className="popular__name">Superbolw Light</h3>
                  <p className="popular__subtitle">Hanging Light</p>
                  <p className="popular__price">
                    <span>$</span>18
                  </p>
                  <button className="popular__button">
                    <i className="ri-add-line"></i>
                  </button>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__blob">
                    <img
                      className="popular__img"
                      src={UltrawideLamp}
                      alt="Ultrawide lamp"
                    />
                  </div>
                  <h3 className="popular__name">Ultrawide Light</h3>
                  <p className="popular__subtitle">Hanging Light</p>
                  <p className="popular__price">
                    <span>$</span>16
                  </p>
                  <button className="popular__button">
                    <i className="ri-add-line"></i>
                  </button>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="popular__blob">
                    <img
                      className="popular__img"
                      src={RoundnessLight}
                      alt="Roundness light"
                    />
                  </div>
                  <h3 className="popular__name">Roundness Light</h3>
                  <p className="popular__subtitle">Hanging Light</p>
                  <p className="popular__price">
                    <span>$</span>17
                  </p>
                  <button className="popular__button">
                    <i className="ri-add-line"></i>
                  </button>
                </article>
              </SwiperSlide>
            </Swiper>
            <div>
              <button className="swiper-button-prev" ref={navigationPrevRef}>
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button className="swiper-button-next" ref={navigationNextRef}>
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Popular
