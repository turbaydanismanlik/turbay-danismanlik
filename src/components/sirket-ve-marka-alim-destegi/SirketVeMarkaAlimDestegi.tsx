import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './SirketVeMarkaAlimDestegi.module.css'

const SirketVeMarkaAlimDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="ŞİRKET VE MARKA ALIM DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Yurt dışında yerleşik şirketlerin/markaların alımına yönelik mali ve
            hukuki danışmanlık giderleri <b>%50</b> oranında, yıllık&nbsp;
            <b>11.444.788 TL</b>&apos;ye kadar, bu şirketler ileri teknolojiye
            sahip ve teknoloji transferi sağlayacak nitelikte ise&nbsp;
            <b>28.615.135 TL</b>&apos;ye kadar desteklenmektedir.
          </p>
          <p>
            İleri teknolojiye sahip şirketlerin alımında kullanılan kredi faiz
            giderlerinin TL cinsi kredilerde <b>5 puanı</b>, döviz cinsi
            kredilerde <b>2 puanı</b> toplam <b>171.697.139 TL</b>&apos;ye
            kadar, yerleşik marka alımında ise TL cinsi kredilerde{' '}
            <b>5 puanı</b>, döviz cinsi kredilerde <b>2 puanı</b> toplam{' '}
            <b>114.464.759 TL</b>&apos;ye kadar desteklenmektedir.
          </p>
          <p>
            Faiz desteği miktarı ödenen faiz giderinin <b>%50</b>&apos;sini
            aşamaz ve <span>ilk 5 yıl</span> gerçekleştirilecek ödemeler için
            verilmektedir.
          </p>
          <p>
            Faiz desteği verilecek kredi tutarında alım bedelinin <b>%50</b>
            &apos;si esas alınmaktadır.
          </p>
          <p>
            Yurt dışında yerleşik marka alımında ilgili marka ülkede&nbsp;
            <span>en az 5 yıldır tescilli olmalı</span> ve geçerlilik süresi
            devam ediyor olmalıdır.
          </p>
          <p>
            Bir şirket <span>en fazla 3 marka</span> için kredi desteğinden
            faydalanabilir.
          </p>
          <p>
            Danışmanlık hizmeti kapsamında ulaşım ve konaklama giderleri
            desteklenmemektedir.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default SirketVeMarkaAlimDestegi
