import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './PazaraGirisBelgesiDestegi.module.css'

const PazaraGirisBelgesiDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="PAZARA GİRİŞ BELGESİ DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Şirketlerin{' '}
            <b>
              pazara giriş belgeleri, ruhsatlandırma ve kayıt işlemlerine
              ilişkin giderleri %50
            </b>{' '}
            oranında ve&nbsp;
            <span>şirket başına yıllık</span>&nbsp;<b>15.260.421 TL</b>&apos;ye
            kadar desteklenmektedir. Bu kapsamda;
          </p>
          <ul>
            <li>Eğitim, danışmanlık giderleri</li>
            <li>Yol, konaklama giderleri</li>
            <li>Tarım ürünlerine ilişkin muayene ücretleri</li>
          </ul>
          <p>desteklenmemektedir.</p>
          <p>
            Pazara giriş belgesi yenilenmesi ve kapsam genişletmesine yönelik
            giderler ve tarım ürünleri analizine ilişkin akreditasyon ücretleri
            de destek kapsamındadır.
          </p>
          <p>
            Pazara girişte zorunlu olan ve avantaj sağlayan test/analiz
            raporlarına ilişkin giderler sonucunda bir belge düzenlenmese de
            veya mevzuat eki listede yer almasa da desteklenebilmektedir.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default PazaraGirisBelgesiDestegi
