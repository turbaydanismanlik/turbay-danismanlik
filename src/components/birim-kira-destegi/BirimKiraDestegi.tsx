import styles from './BirimKiraDestegi.module.css'

const BirimKiraDestegi = () => {
  return (
    <div className={styles.container}>
      <h1>Birim Kira Desteği</h1>
      <div>
        <p>
          Şirketlerin&nbsp;
          <span>Türkiye&apos;de üretilen ürünlerinin pazarlandığı</span> yurt
          dışı birimlerinin kira giderleri ile paylaşımlı ofislere ilişkin
          üyelik giderleri <b>%50</b> oranında&nbsp;
          <span>her bir birim başına yıllık</span>&nbsp;
          <b>5.591.174 TL</b>&apos;ye kadar desteklenmektedir.
        </p>
        <p>
          Her ülke için&nbsp;
          <span>
            destek süresi <b>4 yıldır</b>
          </span>
          .
        </p>
        <p>
          Bir şirket <span>en fazla 25 birim</span> için kira desteğinden
          faydalanabilir.
        </p>
        <p>
          Verilecek destek tutarı ilgili ülkeye yapılan yıllık ihracatın
          yarısından fazla olamayacaktır.
        </p>
        <p>
          Türkiye&apos;de bulunan şirket doğrudan birim açabileceği gibi yurt
          dışındaki şirketi veya şubesi de birim açabilir. Yurt içindeki şirket
          ile yurt dışındaki şirket/şube arasında organik bağ olmalıdır.
        </p>
        <p>
          Şirketin destek başvuru tarihinden en az 1 yıl önce kurulmuş olması
          gerekmektedir. Öte yandan yurt dışındaki şirket Türkiye&apos;deki
          şirketten sonra kurulmuş olmalıdır.
        </p>
        <p>
          Yabancı markalar için üretilen (fason) ürünlerin pazarlandığı birimler
          destekten faydalanamamaktadır.
        </p>
        <p>
          Birimin bulunduğu ülkeden pazarlanan ürünlere ilişkin Türkiye&apos;ye
          ithalat olması durumunda destekten faydalanılamayacaktır.
        </p>
        <p>
          Birimlere ilişkin net kira harcaması desteklenmektedir. Sözleşmede net
          kira tutarının açık bir şekilde belirtilmesi veya kiraya verenden
          alınacak açıklayıcı bir yazı sunulması zorunludur.
        </p>
      </div>
    </div>
  )
}
export default BirimKiraDestegi
