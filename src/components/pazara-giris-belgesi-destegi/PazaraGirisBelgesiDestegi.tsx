import styles from './PazaraGirisBelgesiDestegi.module.css'

const PazaraGirisBelgesiDestegi = () => {
  return (
    <div className={styles.container}>
      <h1>Pazara Giriş Belgesi Desteği</h1>
      <div>
        <p>
          Şirketlerin pazara giriş belgeleri, ruhsatlandırma ve kayıt
          işlemlerine ilişkin giderleri <b>%50</b> oranında ve&nbsp;
          <span>şirket başına yıllık</span>&nbsp;<b>11.183.893 TL</b>&apos;ye
          kadar desteklenmektedir. Bu kapsamda;
        </p>
        <ul>
          <li>Eğitim, danışmanlık giderleri,</li>
          <li>Yol, konaklama giderleri,</li>
          <li>Tarım ürünlerine ilişkin muayene ücretleri</li>
        </ul>
        <p>desteklenmemektedir.</p>
        <p>
          Pazara giriş belgesi yenilenmesi ve kapsam genişletmesine yönelik
          giderler ve tarım ürünleri analizine ilişkin akreditasyon ücretleri de
          destek kapsamındadır.
        </p>
        <p>
          Pazara girişte zorunlu olan ve avantaj sağlayan test/analiz
          raporlarına ilişkin giderler sonucunda bir belge düzenlenmese de veya
          mevzuat eki listede yer almasa da desteklenebilmektedir.
        </p>
      </div>
    </div>
  )
}
export default PazaraGirisBelgesiDestegi
