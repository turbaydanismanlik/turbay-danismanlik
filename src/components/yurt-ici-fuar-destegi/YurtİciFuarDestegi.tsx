import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './YurtİciFuarDestegi.module.css'

const YurtİciFuarDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="YURT İÇİ FUAR DESTEĞİ">
      {' '}
      <div className={styles.container}>
        <div>
          <p>
            Yurt içi fuar katılımlarında yer kirası ve stant masrafları (stant
            tasarımı, konstrüksiyonu, kurulumu, raf, askılık, ışıklandırma, masa
            ve sandalye harcamaları) için yapılacak giderler <b>%50</b>&nbsp;
            oranında&nbsp;
            <b>303.563 TL</b>&apos;ye kadar desteklenmektedir.
          </p>
          <p>
            Destekten faydalanabilmek için fuara&nbsp;
            <span>
              <b>
                en az 9 m<sup>2</sup> stant
              </b>
            </span>
            &nbsp;ile katılım sağlanması ve ilgili sektörde faaliyet
            gösterilmesi gerekmektedir.
          </p>
          <p>
            Bir takvim yılında <span>en fazla 3 fuar katılımı</span>&nbsp;
            desteklenmektedir.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default YurtİciFuarDestegi
