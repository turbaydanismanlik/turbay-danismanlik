import styles from './YurtDisiMarkaTescilDestegi.module.css'

const YurtDisiMarkaTescilDestegi = () => {
  return (
    <div className={styles.container}>
      <h1>Yurt Dışı Marka Tescil Desteği</h1>
      <div>
        <p>
          Yurt içi marka tescil belgesine sahip olan şirketlerin, markalarının
          yurt dışında tescili ve korunmasına yönelik giderleri kapsamında;
        </p>
        <ul>
          <li>Marka/patent bürosu hizmet, danışmanlık giderleri,</li>
          <li>
            O ülkede başka bir şirket adına tescil ettirilip ettirilmediğine
            yönelik yapılacak araştırma, inceleme, avukatlık giderleri,
          </li>
          <li>
            Yurt dışında tescil ettirilen markaların korunmasına yönelik
            avukatlık giderleri
          </li>
        </ul>
        <p>
          en fazla <b>4 yıl</b> süreyle <b>%50</b> oranında <span>yıllık</span>
          &nbsp;
          <b>2.096.497 TL</b>&apos;ye kadar desteklenmektedir.
        </p>
        <p>
          Destekten faydalanabilmek için marka tescil başvurusunun yapılmış
          olması yeterlidir. Tescil aynı şirket adına olmalı ve ilk tescilin
          Türkiye&apos;de bulunan şirket adına gerçekleşmiş olması
          gerekmektedir.
        </p>
        <p>
          Bu kapsamda <span>yenileme giderleri desteklenmemektedir</span>.
        </p>
      </div>
    </div>
  )
}
export default YurtDisiMarkaTescilDestegi
