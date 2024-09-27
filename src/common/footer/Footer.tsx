'use client'
import {footerLinks} from '@/config/Constants'
import styles from './Footer.module.css'
import Image from 'next/image'
import {Images} from '@/theme'
import AppUtil from '@/util/AppUtil'
import {useRouter} from 'next/navigation'

const Footer = () => {
  const {width} = AppUtil.useWindowDimensions()
  const router = useRouter()
  return (
    <footer className={styles.footer}>
      <Image
        src={Images.footer.mayFairWhiteLogo}
        alt="Şirket Logosu"
        height={50}
        width={100}
        className={styles.logo}
      />
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          {footerLinks?.map((item) => {
            return (
              <button key={item?.id} onClick={() => router.push(item?.linkTo)}>
                <p>{item?.title}</p>
              </button>
            )
          })}
        </div>
        <div>
          <p className={styles.allRigthsReservedText}>
            Tüm hakları saklıdır © 2024 {width <= 768 && <br />}Turbay
            Danışmanlık İç ve Dış Ticaret A.Ş.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
