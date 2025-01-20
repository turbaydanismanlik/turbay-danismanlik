import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './BirimKiraDestegi.module.css'

const BirimKiraDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="BİRİM KİRA DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Şirketlerin&nbsp;
            <b>Türkiye&apos;de üretilen ürünlerinin pazarlandığı</b> yurt dışı
            birimlerinin kira giderleri ile paylaşımlı ofislere ilişkin üyelik
            giderleri <b>%50</b> oranında her bir&nbsp;
            <b>birim başına yıllık 7.629.156 TL</b>&apos;ye kadar
            desteklenmektedir.
          </p>
          <p>
            <b>Her ülke için</b>&nbsp;destek süresi <b>4 yıldır</b>.
          </p>
          <p>
            Bir şirket <b>en fazla 25 birim</b> için kira desteğinden
            faydalanabilir.
          </p>
          <p>
            Verilecek&nbsp;
            <b>
              destek tutarı ilgili ülkeye yapılan yıllık ihracatın yarısından
              fazla olamayacaktır
            </b>
            .
          </p>
          <p>
            Türkiye&apos;de bulunan şirket doğrudan birim açabileceği gibi yurt
            dışındaki şirketi veya şubesi de birim açabilir. Yurt içindeki
            şirket ile yurt dışındaki şirket/şube arasında organik bağ
            olmalıdır.
          </p>
          <p>
            Şirketin destek başvuru tarihinden en az 1 yıl önce kurulmuş olması
            gerekmektedir. Öte yandan yurt dışındaki şirket Türkiye&apos;deki
            şirketten sonra kurulmuş olmalıdır.
          </p>
          <p>
            Yabancı markalar için üretilen (fason) ürünlerin pazarlandığı
            birimler destekten faydalanamamaktadır.
          </p>
          <p>
            Birimin bulunduğu ülkeden pazarlanan ürünlere ilişkin
            Türkiye&apos;ye ithalat olması durumunda destekten
            faydalanılamayacaktır.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default BirimKiraDestegi
