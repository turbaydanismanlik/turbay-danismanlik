import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './PazaraGirisProjesiHazirlamaDestegi.module.css'

const PazaraGirisProjesiHazirlamaDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="PAZARA GİRİŞ PROJESİ HAZIRLAMA DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Finansman ve fiyatlandırma stratejisi, pazarlama ve kanal stratejisi
            ve bunlara dair aksiyon planı ve bütçelerini içeren pazara giriş
            projesi hazırlık sürecine ilişkin danışmanlık ve rapor
            giderleri&nbsp;
            <b>%50</b>&nbsp;oranında, <span>proje başına</span>&nbsp;
            <b>761.017 TL</b>&apos;ye kadar desteklenmektedir.
          </p>
          <p>
            Bir şirketin <b>en fazla 2 projesi</b> desteklenmektedir.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default PazaraGirisProjesiHazirlamaDestegi
