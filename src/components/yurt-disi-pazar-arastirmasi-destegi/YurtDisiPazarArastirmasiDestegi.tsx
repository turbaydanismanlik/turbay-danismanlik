import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './YurtDisiPazarArastirmasiDestegi.module.css'

const YurtDisiPazarArastirmasiDestegi = () => {
  return (
    <ExpandCollapseButton sectionTitle="YURT DIŞI PAZAR ARAŞTIRMASI DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Pazara Giriş Projesi Hazırlama Desteği&apos;ne ilişkin genelge
            kapsamında onaylanan ihracat planında yer alan hedef pazarlar
            hakkında bilgi sağlanması ve potansiyel alıcılarla iş görüşmeleri
            yapmak amacıyla gerçekleştirilen <b>ulaşım ve konaklama</b>{' '}
            giderleri desteklenmektedir.
          </p>
          <p>
            Toplam ulaşım ve konaklama giderleri <b>%50</b> oranında ve&nbsp;
            <span>faaliyet başına</span>&nbsp;<b>379.455 TL</b>&apos;ye kadar,
            kişi başı günlük konaklama gideri <b>9.486 TL</b>&apos;ye kadar
            desteklenmektedir.
          </p>
          <p>
            Bir takvim yılında <span>en fazla 5 defa</span> olmak üzere,
            toplamda&nbsp;
            <span>en fazla 20 defa</span> destekten faydalanılabilir.
          </p>
          <p>
            Bir yurt dışı pazar araştırma faaliyeti kapsamında&nbsp;
            <span>en fazla 2 şirket çalışanının</span> ulaşım ve konaklama
            giderleri desteklenmektedir.
          </p>
          <p>
            <b>En az 2 gün araştırma yapılması zorunlu</b> olup gidiş-dönüş
            hariç <b>en fazla 10 gün</b> desteklenmektedir.
          </p>
          <p>
            <b>
              Her gün birbirinden farklı en az 1 firma ile görüşme yapılmalıdır.
            </b>
            &nbsp;Resmî tatiller ve yolculuk hariç görüşme yapılmayan günler
            konaklama giderleri desteklenmemektedir.
          </p>
          <p>
            Bir takvim yılında aynı ülkeye en fazla 2 faaliyet
            desteklenmektedir.
          </p>
          <p>
            Araştırma yapılan ülkede yurt dışı birim/ofis bulunması durumunda o
            ülkeye ilişkin giderler desteklenmemektedir.
          </p>
          <p>
            <b>Desteklenmeyecek Faaliyetler</b>
          </p>
          <ul>
            <li>Pazar araştırmasının amaçlanmadığı seyahatler</li>
            <li>
              Grup seyahati veya resmî/özel kurum/kuruluşlarca gerçekleştirilen
              toplantı, sergi, konferans vb. organizasyonlar
            </li>
            <li>
              Beş ve üzeri şirketin birlikte gerçekleştirdiği grup seyahatleri
            </li>
            <li>
              İlgili ülkede aynı tarihlerde düzenlenen bir fuara stant ile
              iştirak
            </li>
            <li>
              Şirket çalışanlarının eşleri ve 2. dereceye kadar kan hısımlarının
              (şirket ortağı veya çalışanı olsalar dahi) eşlik ettiği seyahatler
            </li>
          </ul>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default YurtDisiPazarArastirmasiDestegi
