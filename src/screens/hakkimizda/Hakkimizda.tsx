import Image from 'next/image'
import styles from './Hakkimizda.module.css'
import {Images} from '@/theme'

const HakkimizdaScreen = () => {
  return (
    <div className={`wrapper main ${styles.outerContainer}`}>
      <div className={styles.container}>
        <p className={styles.hakkimizda}>
          Küresel Tedarik Zinciri (KTZ), Yatırım Teşvik, İhracat ve E-İhracat
          alanlarında hizmet vermekte olan firmamız müşterilerine benzersiz bir
          danışmanlık hizmeti sunmaktadır. Bu kapsamda bir proje özelinde
          danışmanlık hizmeti almak isteyen firmalara bunun da ötesinde
          yararlanabilecekleri bütün destek kalemleri hakkında bilgi vermeyi ve
          maksimum faydayı sağlamalarını amaç edinmekteyiz. İş ortaklarımıza,
          deneyimli, alanında uzman ve günceli takip eden çalışanlarımızla doğru
          ve güvenilir bilgileri sunmayı, çalıştığımız süre boyunca bütün soru
          ve sorunlarına çözüm üretmeyi görev bilmekteyiz. Kısa süreli bir
          danışmanlık hizmeti vermekten ziyade maksimum müşteri memnuniyeti ve
          güvene dayalı uzun süreli iş ortaklığı modelini benimseyen firmamızın
          müşterileri arasında siz de yerini alın.
        </p>
        <Image
          src={Images.hakkimizda.hakkimizda}
          alt="Hakkımızda"
          className={styles.image}
          width={500}
          height={800}
          objectFit="contain"
        />
      </div>
    </div>
  )
}
export default HakkimizdaScreen
