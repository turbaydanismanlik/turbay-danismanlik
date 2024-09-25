'use client'
import Image from 'next/image'
import styles from './Iletisim.module.css'
import {Images} from '@/theme'
import AppUtil from '@/util/AppUtil'
import {ImLocation2} from 'react-icons/im'
import {MdEmail, MdPhoneIphone} from 'react-icons/md'

const IletisimScreen = () => {
  const {width} = AppUtil.useWindowDimensions()
  return (
    <div className={`wrapper main ${styles.container}`}>
      <div className={styles.topContainer}>
        <Image
          src={Images.iletisim.yda}
          alt="YDA Center"
          width={800}
          height={500}
          objectFit="contain"
          className={styles.image}
          priority={true}
        />
        <div className={styles.contactInfo}>
          <h1>Turbay Danışmanlık İç ve Dış Ticaret A.Ş.</h1>
          <div className={styles.itemsContainer}>
            <ImLocation2 color="var(--text-color)" size={25} />
            <p>
              Kızılırmak Mahallesi Dumlupınar Bulvarı
              <br />
              9A YDA Center İç Kapı No:158 Çankaya/ANKARA
            </p>
          </div>
          <div className={styles.itemsContainer}>
            <MdEmail color="var(--text-color)" size={25} />
            <div>
              <p>mucahit@turbaydanismanlik.com</p>
              <p>faruk@turbaydanismanlik.com</p>
            </div>
          </div>
          <div className={styles.itemsContainer}>
            <MdPhoneIphone color="var(--text-color)" size={25} />
            <p>0532 350 59 64</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IletisimScreen
