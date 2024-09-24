import styles from './YurtİciFuarDestegi.module.css'

const YurtİciFuarDestegi = () => {
  return (
    <div className={styles.container}>
      <h1>Yurt İçi Fuar Desteği</h1>
      <div>
        <p>
          Yurt içi fuar katılımlarında yer kirası ve stant masrafları (stant
          tasarımı, konstrüksiyonu, kurulumu, raf, askılık, ışıklandırma, masa
          ve sandalye harcamaları) için yapılacak giderler <b>%50</b>{' '}
          oranında&nbsp;
          <b>222.472 TL</b>&apos;ye kadar desteklenmektedir.
        </p>
        <p>
          Destekten faydalanabilmek için fuara&nbsp;
          <span>
            <b>
              en az 9 m<sup>2</sup> stant
            </b>
          </span>
          &nbsp;ile katılım sağlanması ve ilgili sektörde faaliyet gösterilmesi
          gerekmektedir.
        </p>
        <p>
          Bir takvim yılında <span>en fazla 3 fuar katılımı</span>&nbsp;
          desteklenmektedir.
        </p>
        <p>Sezonluk fuarlar tek fuar olarak değerlendirilmektedir.</p>
        <p>
          Fuarın ilk günü standın açılması zorunlu olup, fuar bitmeden stant
          boşaltılamaz, personel geri çekilemez.
        </p>
      </div>
    </div>
  )
}
export default YurtİciFuarDestegi
