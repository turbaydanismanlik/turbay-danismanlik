'use client'
import {Images} from '@/theme'
import Image from 'next/image'
import styles from './Home.module.css'
import {useRouter} from 'next/navigation'
import Slider from 'react-slick'
import React from 'react'
import AppUtil from '../../util/AppUtil'

const Home = () => {
  const router = useRouter()
  const {width} = AppUtil.useWindowDimensions()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactElement) => (
      <div
        style={{
          width: 'fit-content',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: 10,
          backgroundColor: width <= 768 ? 'transparent' : 'var(--text-color)',
          padding: width <= 768 ? '0 5px' : '20px 20px 5px',
          bottom: width <= 768 ? 5 : 20,
        }}
      >
        <ul className={styles.dots} style={{margin: '0px'}}>
          {dots}
        </ul>
      </div>
    ),
  }
  return (
    <Slider {...settings} className="slick-slider">
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Yatırım Teşvik Belgesi</h1>
          <p>
            Yatırımlarınızı gerçekleştirmeden önce alacağınız belge sayesinde
            KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi gibi birçok
            avantajdan yararlanabilirsiniz.
          </p>
          <button onClick={() => router.push('/hizmetlerimiz/yatirim-tesvik')}>
            Detaylı Bilgi İçin Tıklayınız
          </button>
        </div>
        <Image
          src={Images.home.yatirimTesvik}
          alt="Yatırım Teşvik Görsel"
          className={styles.images}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Küresel Tedarik Zinciri</h1>
          <p>
            Ara mal üreticisi firmalarımızın, yurt dışında yerleşik küresel
            firmalara tedarikçi olabilmeleri için ihtiyaç duyduğu makine-ekipman
            alımları, yazılım, eğitim-danışmanlık harcamaları 42 milyon
            TL&apos;ye kadar hibe şeklinde desteklenmektedir.
          </p>
          <button
            onClick={() => router.push('/hizmetlerimiz/ihracat-destekleri')}
          >
            Detaylı Bilgi İçin Tıklayınız
          </button>
        </div>
        <Image
          src={Images.home.ktz}
          alt="Küresel Tedarik Zinciri Görsel"
          className={styles.images}
        />
      </div>
      {/* <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>E-İhracat</h1>
          <p>
            Tescilli markasıyla Amazon, Etsy, Walmart gibi yurt dışı pazar
            yerlerinde satış yapan şirketler, e-ihracat desteklerinden
            faydalanabilmektedir.
          </p>
          <button
            onClick={() => router.push('/hizmetlerimiz/e-ihracat-destekleri')}
          >
            Detaylı Bilgi İçin Tıklayınız
          </button>
        </div>
        <Image
          src={Images.home.eihracat}
          alt="E-ihracat Görsel"
          className={styles.images}
        />
      </div> */}
    </Slider>
  )
}
export default Home
