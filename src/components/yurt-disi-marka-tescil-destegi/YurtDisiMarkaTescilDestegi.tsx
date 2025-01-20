import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './YurtDisiMarkaTescilDestegi.module.css'

const YurtDisiMarkaTescilDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="YURT DIŞI MARKA TESCİL DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Yurt içi marka tescil belgesine sahip olan şirketlerin, markalarının
            yurt dışında tescili ve korunmasına yönelik giderleri kapsamında;
          </p>
          <ul>
            <li>
              <b>Marka/patent bürosu hizmet, danışmanlık giderleri</b>
            </li>
            <li>
              <b>
                Markanın o ülkede başka bir şirket adına tescil ettirilip
                ettirilmediğine yönelik yapılacak araştırma, inceleme, avukatlık
                giderleri
              </b>
            </li>
            <li>
              <b>
                Yurt dışında tescil ettirilen markaların korunmasına yönelik
                avukatlık giderleri
              </b>
            </li>
          </ul>
          <p>
            en fazla <b>4 yıl</b> süreyle <b>%50</b> oranında yıllık&nbsp;
            <b>2.860.670 TL</b>&apos;ye kadar desteklenmektedir.
          </p>
          <p>
            Destekten faydalanabilmek için marka tescil başvurusunun yapılmış
            olması yeterlidir. Tescil aynı şirket adına olmalı ve ilk tescilin
            Türkiye&apos;de bulunan şirket adına gerçekleşmiş olması
            gerekmektedir.
          </p>
          <p>
            Bu kapsamda <b>yenileme giderleri desteklenmemektedir</b>.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default YurtDisiMarkaTescilDestegi
