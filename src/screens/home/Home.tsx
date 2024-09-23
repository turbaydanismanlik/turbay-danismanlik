import {Images} from '@/theme'
import Image from 'next/image'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div style={{minHeight: '100vh'}}>
      <Image
        src={Images.home.yatirimTesvik}
        alt="Yatırım Teşvik Görsel"
        className={styles.images}
      />
    </div>
  )
}
export default Home
