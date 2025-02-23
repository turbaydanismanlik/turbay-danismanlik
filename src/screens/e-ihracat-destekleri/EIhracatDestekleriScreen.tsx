'use client'
import AppUtil from '@/util/AppUtil'
import styles from './EIhracatDestekleri.module.css'

const EIhracatDestekleriScreen = () => {
  const {width} = AppUtil.useWindowDimensions()
  const renderDigitalMarketPlaceTable = () => {
    return (
      <div className={styles.tableContainer}>
        <table style={{borderCollapse: 'collapse', margin: '20px 0'}}>
          <thead>
            <tr
              style={{
                backgroundColor: '#e7f0df',
                borderBottom: '2px solid #141414',
              }}
            >
              <th style={{padding: '12px 15px', textAlign: 'left'}}>Ülke</th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Reklam Kampanyalarından Elde Edilen Gelir
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Reklam Harcamaları
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>SRMO</th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Desteğe Esas Maksimum Tutar
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Ülke Destek Oranı
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Hesaplanan Destek Tutarı
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #e7f0df'}}>
              <td style={{padding: '12px 15px'}}>Almanya</td>
              <td style={{padding: '12px 15px'}}>1.000.000 TL</td>
              <td style={{padding: '12px 15px'}}>100.000 TL</td>
              <td style={{padding: '12px 15px'}}>%10</td>
              <td style={{padding: '12px 15px'}}>100.000 TL</td>
              <td style={{padding: '12px 15px'}}>%50</td>
              <td style={{padding: '12px 15px'}}>50.000 TL</td>
            </tr>
            <tr style={{borderBottom: '1px solid #e7f0df'}}>
              <td style={{padding: '12px 15px'}}>İspanya</td>
              <td style={{padding: '12px 15px'}}>1.000.000 TL</td>
              <td style={{padding: '12px 15px'}}>400.000 TL</td>
              <td style={{padding: '12px 15px'}}>%40</td>
              <td style={{padding: '12px 15px'}}>200.000 TL</td>
              <td style={{padding: '12px 15px'}}>%50</td>
              <td style={{padding: '12px 15px'}}>100.000 TL</td>
            </tr>
            <tr style={{borderBottom: '1px solid #e7f0df'}}>
              <td style={{padding: '12px 15px'}}>Amerika</td>
              <td style={{padding: '12px 15px'}}>1.000.000 TL</td>
              <td style={{padding: '12px 15px'}}>200.000 TL</td>
              <td style={{padding: '12px 15px'}}>%20</td>
              <td style={{padding: '12px 15px'}}>200.000 TL</td>
              <td style={{padding: '12px 15px'}}>%70</td>
              <td style={{padding: '12px 15px'}}>140.000 TL</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  const renderSampleCalculation = () => {
    return (
      <div className={styles.tableContainer}>
        <table style={{borderCollapse: 'collapse', margin: '20px 0'}}>
          <thead>
            <tr
              style={{
                backgroundColor: '#e7f0df',
                borderBottom: '2px solid #141414',
              }}
            >
              <th style={{padding: '12px 15px', textAlign: 'left'}}>Dönem</th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Toplam E-İhracat
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Sipariş Karşılama Gideri
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Desteğe Esas Maksimum Tutar
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Destek Oranı
              </th>
              <th style={{padding: '12px 15px', textAlign: 'left'}}>
                Hesaplanan Destek Tutarı
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #e7f0df'}}>
              <td style={{padding: '12px 15px'}}>1. Çeyrek</td>
              <td style={{padding: '12px 15px'}}>100.000$</td>
              <td style={{padding: '12px 15px'}}>8.000$</td>
              <td style={{padding: '12px 15px'}}>8.000$</td>
              <td style={{padding: '12px 15px'}}>50%</td>
              <td style={{padding: '12px 15px'}}>4.000$</td>
            </tr>
            <tr style={{borderBottom: '1px solid #e7f0df'}}>
              <td style={{padding: '12px 15px'}}>2. Çeyrek</td>
              <td style={{padding: '12px 15px'}}>250.000$</td>
              <td style={{padding: '12px 15px'}}>30.000$</td>
              <td style={{padding: '12px 15px'}}>25.000$</td>
              <td style={{padding: '12px 15px'}}>50%</td>
              <td style={{padding: '12px 15px'}}>12.500$</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div className="wrapper main">
      <div className={styles.container}>
        <div>
          <h1>ŞİRKETLERİN YARARLANABİLECEĞİ E-İHRACAT DESTEKLERİ</h1>
          <p>
            5986 sayılı E-İhracat Destekleri Hakkında Karar kapsamında Amazon,
            Etsy, Walmart, Otto, Kaufland, Mercado Libre gibi&nbsp;
            <b>
              yurt dışı pazar yerlerinde tescilli markalarıyla satış yapan
              şirketlerin,
            </b>
            &nbsp;ürünlerini ön plana çıkarmak amacıyla katlandığı&nbsp;
            <b>tanıtım giderleri,</b> siparişlere ilişkin&nbsp;
            <b>teslimat giderleri,</b>&nbsp;pazar yerlerine ödedikleri&nbsp;
            <b>
              komisyon giderleri, çevrim içi mağaza ve danışmanlık giderleri
            </b>
            &nbsp;desteklenmektedir.
          </p>
          <h1>DESTEKTEN YARARLANMA ŞARTLARI NELERDİR?</h1>
          <ul>
            <li>
              <p>
                Şirketlerin&nbsp;
                <b>
                  yurt içinde tescilli markalarını destekten yararlanılacak
                  ülkelerde de tescil ettirmeleri
                </b>
                &nbsp;gerekmektedir.
              </p>
            </li>
            <li>
              <p>
                Destekten faydalanılmak istenen ürünlerin &nbsp;
                <b>
                  üretim süreçlerinin tamamının ya da bir bölümünün
                  Türkiye&apos;de gerçekleştirilmesi
                </b>
                &nbsp;gerekmektedir. Ancak Marka ve Turquality Destek Programı
                kapsamındaki şirketlerde bu şart aranmamaktadır. Destek
                kapsamına alınma başvurusu yapan şirketler, ürünlerini kendileri
                imal edebileceği gibi tedarikçi firmalardan da temin
                edebileceklerdir.
              </p>
            </li>
          </ul>
          <p>
            Yurt dışı pazar yerlerinde satış yapan şirketlerin yararlanabileceği
            destek kalemlerine aşağıda sırasıyla yer verilmiştir.
          </p>
        </div>
        <div>
          <h2>DİJİTAL PAZAR YERİ TANITIM DESTEĞİ</h2>
          <p>
            Bu başlık altında dijital pazar yerlerinde ürünlerin ön plana
            çıkarılmasını amaçlayan
            <ul>
              <li>
                <b>Tıklama başına ödeme</b>
              </li>
              <li>
                <b>Görüntüleme reklamları</b>
              </li>
              <li>
                <b>Yorum hizmetlerine ait giderler</b>
              </li>
            </ul>
            desteklenmektedir.
          </p>
          <p>
            Şirketler dijital pazar yeri tanıtım desteğinden&nbsp;
            <b>her pazar yeri için 3 yıl boyunca</b> yararlanabilmektedir.&nbsp;
            <b>Destek tutarının üst sınırı</b> 2025 yılı için&nbsp;
            <b>28.615.135 TL</b>&apos;dir.
          </p>
          <p>
            Destek tutarının hesaplanmasında&nbsp;
            <b>dijital reklamlar üzerinden dönen toplam satışlar</b> dikkate
            alınmaktadır. Dolayısıyla bu satışların <b>%20&apos;sine</b>&nbsp;
            (Satışların reklam maliyeti oranı-SRMO en fazla %20 olabilir) kadar
            olan dijital pazar yeri tanıtım giderleri <b>%50 oranında</b>&nbsp;
            desteklenmektedir. <b>Hedef ülkelerde</b> bu oran <b>%70</b> olarak
            uygulanmaktadır.
          </p>
          <p>
            Yurt dışı pazar yerinde satış yapan bir firma için örnek destek
            hesaplamasına aşağıda yer verilmiştir.
          </p>
          {renderDigitalMarketPlaceTable()}
        </div>
        <div>
          <h2>SİPARİŞ KARŞILAMA HİZMETİ DESTEĞİ</h2>
          <p>
            Şirketlerin sipariş karşılama hizmeti sunan firma listesinde yer
            alan firmalardan ya da doğrudan ilgili pazar yerlerinden alacağı
            yurt dışı sipariş karşılama hizmetine ilişkin giderleri&nbsp;
            <b>
              ilgili ülkedeki e-ticaret satışlarının %10&apos;una kadar %50
              oranında
            </b>
            &nbsp;desteklenmektedir. Bu oran <b>hedef ülkelerde %70</b> olarak
            uygulanmaktadır. Bu kapsamda&nbsp;
            <b>elleçleme, paketleme, iade dahil kargo ücretleri</b> desteğe konu
            edilmektedir. Örneğin Almanya Amazon üzerinde satış yapan bir şirket
            DHL&apos;den aldığı hizmet karşılığındaki giderlerini iade
            alabileceği gibi doğrudan FBA hizmetini kullanması neticesinde
            oluşan giderlerini de iade alabilecektir. Sipariş karşılama
            hizmetinden <b>bir ülkede en fazla 3 yıl boyunca</b>&nbsp;
            yararlanılabilmektedir. Destek tutarının üst sınırı 2025 yılı
            için&nbsp;
            <b>28.615.135 TL</b>&apos;dir.
          </p>
          <p>Örnek bir hesaplamaya aşağıda yer verilmiştir.</p>
          {renderSampleCalculation()}
        </div>
        <div>
          <h2>PAZAR YERİ KOMİSYON GİDERİ DESTEĞİ</h2>
          <p>
            Bu başlık altında&nbsp;
            <b>
              Brezilya, Çin Halk Cumhuriyeti, Endonezya, Filipinler, Hindistan
              ve Mısır
            </b>
            &apos;da bulunan yurt dışı pazar yerlerine ödenen komisyon giderleri
            desteklenmektedir. Destek oranı <b>%50</b> olup, şirketler 2025 yılı
            içerisinde maksimum <b>2.860.670 TL</b> destek ödemesinden
            faydalanabilmektedir.
          </p>
        </div>
        <div>
          <h2>
            ÇEVRİM İÇİ MAĞAZA VE HEDEF ÜLKE E-TİCARET PAYDAŞLARINDAN ALINAN
            HİZMET DESTEĞİ
          </h2>
          <p>
            Şirketlerin <b>Çin, Japonya, Hindistan ve Brezilya</b>&apos;daki
            pazar yerlerinde çevrim içi mağaza açılmasına, bu mağazaların yıllık
            ödemelerine ve ülkelerin e-ticaret paydaşlarından alacağı hizmetlere
            ilişkin giderleri <b>her ülke için 3 yıl</b> süresince ve <b>%50</b>
            &nbsp;oranında desteklenmektedir. Destek tutarının üst sınırı 2025
            yılı için&nbsp;
            <b>5.721.340 TL</b>&apos;dir. Destekten faydalanmak isteyen
            şirketlerin&nbsp;
            <b>
              bir önceki yılda en az 2.500.000$ ihracat gerçekleştirmiş olması
              gerekmektedir.
            </b>
          </p>
        </div>
        <div>
          <h1>KATKILARIMIZ</h1>
          <p>
            Yurt dışı pazar yerlerinde satış yapan firmalarımızın desteklerden
            faydalanabilmesi için kapsama alınma başvurularının yapılması, ürün
            listelerinin İhracatçı Birliğine sunulması, destek ödeme
            başvurularının yapılması ve şirket hesaplarına aktarımının takibine
            kadar ki tüm süreçler tarafımızca yürütülmektedir. Detaylı bilgi
            için bizi arayabilir ya da ana sayfada yer alan formu doldurarak
            tarafımıza iletebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}
export default EIhracatDestekleriScreen
