import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './GemiYatSektorundeFaaliyetGosterenSirketlereTasarimDestegi.module.css'

const GemiYatSektorundeFaaliyetGosterenSirketlereTasarimDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="GEMİ VE YAT SEKTÖRÜNDE FAALİYET GÖSTEREN ŞİRKETLERE TASARIM DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Bu şirketlerin alacakları tasarım hizmetine ilişkin giderleri&nbsp;
            <b>5 yıl</b>&nbsp;süreyle <b>%50</b> oranında, <span>yıllık</span>
            &nbsp;
            <b>11.444.788 TL</b>&apos;ye kadar desteklenmektedir.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default GemiYatSektorundeFaaliyetGosterenSirketlereTasarimDestegi
