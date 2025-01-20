import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './TanitimDestegi.module.css'

const TanitimDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="TANITIM DESTEĞİ">
      <div className={styles.container}>
        <h2>Birime Bağlı Tanıtım</h2>
        <div>
          <p>
            Yurt dışında birimi bulunan şirketlerin, Türkiye&apos;de üretilen
            ürünleri için tanıtım ve pazarlama giderleri <b>%50</b>&nbsp;
            oranında,&nbsp;
            <span>yıllık</span>&nbsp;<b>9.536.972 TL</b>&apos;ye kadar
            desteklenmektedir.
          </p>
          <p>
            Desteklenen yurt dışı birimi bulunan şirketlerin yurt dışı biriminin
            bulunmadığı ülkelerdeki tanıtım ve pazarlama giderleri yurt içi
            marka tescil belgesi bulunması ve tanıtım yapacağı ülkede marka
            tescil belgesine sahip olması veya başvurmuş olması kaydıyla{' '}
            <b>%50</b>
            &nbsp;oranında,&nbsp;
            <span>yıllık</span>&nbsp;<b>9.536.972 TL</b>&apos;ye kadar
            desteklenmektedir.
          </p>
          <p>
            Birime bağlı tanıtım desteği, birim kapanırsa veya destek
            kapsamından çıkarılırsa sona erecektir.
          </p>
        </div>
        <h2>Marka Tesciline Bağlı Tanıtım</h2>
        <div>
          <p>
            Yurt dışı birimi olmayan fakat yurt içi marka tescil belgesi bulunan
            şirketlerin tanıtım yapacağı ülkede marka tescili olması veya
            başvurusunu yapmış olması kaydıyla Türkiye&apos;de üretilen ürünlere
            yönelik gerçekleştirecekleri tanıtım ve pazarlama giderleri{' '}
            <b>%50</b>
            &nbsp; oranında, <span>yıllık</span>&nbsp;<b>15.260.421 TL</b>&apos;
            ye kadar desteklenmektedir.
          </p>
          <p>
            Şirketler tanıtım desteklerinden <b>en fazla 4 yıl</b> süreyle
            yararlanabilmektedir.
          </p>
          <p>
            Dijital pazaryerlerine yönelik tanıtımlar destek kapsamı dışındadır.
          </p>
          <p>
            Destekten yararlanacak şirket destek başvuru tarihinden en az 1 yıl
            önce kurulmuş olmalı ve ilk marka tescili yurt içinde gerçekleşmiş
            olmalıdır.
          </p>
          <p>
            Aynı ülkedeki tanıtım faaliyetleri için birime bağlı tanıtım ve
            marka tesciline bağlı tanıtım desteklerinin sadece birisinden
            faydalanılabilir.
          </p>
          <p>
            Destek tutarı, ilgili ülkeye yapılan yıllık ihracatın yarısından
            fazla olamayacaktır.
          </p>
          <p>Bu kapsamda;</p>
          <ul>
            <li>Ulaşım, konaklama, yemek giderleri</li>
            <li>Tanıtım malzemelerinin nakliye bedelleri</li>
            <li>Türkçe yapılan tanıtım harcamaları</li>
            <li>Yurt içine yönelik tanıtım harcamaları</li>
            <li>
              Yurt dışında Türkçe yayın yapan yayın organlarında yayınlanan
              tanıtım harcamaları
            </li>
          </ul>
          <p>desteklenmemektedir.</p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default TanitimDestegi
