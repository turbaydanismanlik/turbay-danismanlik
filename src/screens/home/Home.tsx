'use client'
import {Images} from '@/theme'
import Image from 'next/image'
import styles from './Home.module.css'
import {useRouter} from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <div
    // style={{minHeight: '100vh'}}
    >
      <div className={styles.textContainer}>
        <h1>Yatırım Teşvik Belgesi</h1>
        <p>
          Yatırımlarınızı gerçekleştirmeden önce alacağınız belge sayesinde KDV
          istisnası, gümrük vergisi muafiyeti, vergi indirimi gibi birçok
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
  )
}
export default Home
