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
          <h1>Şirketlerin Yararlanabileceği E-İhracat Destekleri</h1>
          <p>
            5986 sayılı E-İhracat Destekleri Hakkında Karar kapsamında Amazon,
            Etsy, Walmart, Otto, Kaufland, Mercado Libre gibi yurt dışı pazar
            yerlerinde tescilli markalarıyla satış yapan şirketlerin, ürünlerini
            ön plana çıkarmak amacıyla katlandığı tanıtım giderleri, siparişlere
            ilişkin teslimat giderleri, pazar yerlerine ödedikleri komisyon
            giderleri, çevrim içi mağaza ve danışmanlık giderleri
            desteklenmektedir.
          </p>
          <p>
            Şirketlerin desteklerden yararlanabilmesi için yurt içinde tescilli
            markalarını destekten yararlanılacak ülkelerde de tescil ettirmeleri
            gerekmektedir.
          </p>
          <p>
            E-ihracat desteklerinden yararlanabilmenin bir diğer koşulu ise
            destekten faydalanılmak istenen ürünlerin üretim süreçlerinin
            tamamının ya da bir bölümünün Türkiye&apos;de gerçekleştirilmesidir.
            Ancak Marka ve Turquality Destek Programı kapsamındaki şirketlerde
            bu şart aranmamaktadır. Destek kapsamına alınma başvurusu yapan
            şirketler, ürünlerini kendileri imal edebileceği gibi tedarikçi
            firmalardan da temin edebileceklerdir.
          </p>
          <p>
            Yurt dışı pazar yerlerinde satış yapan şirketlerin yararlanabileceği
            destek kalemlerine aşağıda sırasıyla yer verilmiştir.
          </p>
        </div>
        <div>
          <h2>1. Dijital Pazar Yeri Tanıtım Desteği</h2>
          <p>
            Bu başlık altında dijital pazar yerlerinde ürünlerin ön plana
            çıkarılmasını amaçlayan tıklama başına ödeme, görüntüleme reklamları
            ve yorum hizmetlerine ait giderler desteklenmektedir. Destek
            tutarının hesaplanmasında dijital reklamlar üzerinden dönen toplam
            satışlar dikkate alınmaktadır. Dolayısıyla bu satışların
            %20&apos;sine (Satışların reklam maliyeti oranı-SRMO en fazla %20
            olabilir) kadar olan dijital pazar yeri tanıtım giderleri %50
            oranında desteklenmektedir. Hedef ülkelerde bu oran %70 olarak
            uygulanmaktadır.
          </p>
          <p>
            Yurt dışı pazar yerinde satış yapan bir firma için örnek destek
            hesaplamasına aşağıda yer verilmiştir.
          </p>
          {renderDigitalMarketPlaceTable()}
          <p>
            Şirketler dijital pazar yeri tanıtım desteğinden her pazar yeri için
            3 yıl boyunca yararlanabilmektedir. Destek tutarının üst sınırı 2024
            yılı için <b>20.971.151 TL</b>&apos;dir.
          </p>
        </div>
        <div>
          <h2>2. Sipariş Karşılama Hizmeti Desteği</h2>
          <p>
            Şirketlerin sipariş karşılama hizmeti sunan firma listesinde yer
            alan firmalardan ya da doğrudan ilgili pazar yerlerinden alacağı
            yurt dışı sipariş karşılama hizmetine ilişkin giderleri ilgili
            ülkedeki e-ticaret satışlarının %10&apos;una kadar %50 oranında
            desteklenmektedir. Bu oran hedef ülkelerde %70 olarak
            uygulanmaktadır. Bu kapsamda elleçleme, paketleme, iade dahil kargo
            ücretleri desteğe konu edilmektedir. Örneğin Almanya Amazon üzerinde
            satış yapan bir şirket DHL&apos;den aldığı hizmet karşılığındaki
            giderlerini iade alabileceği gibi doğrudan FBA hizmetini kullanması
            neticesinde oluşan giderlerini de iade alabilecektir. Sipariş
            karşılama hizmetinden bir ülkede en fazla 3 yıl boyunca
            yararlanılabilmektedir. Destek tutarının üst sınırı 2024 yılı
            için&nbsp;
            <b>20.971.151 TL</b>&apos;dir.
          </p>
          <p>Örnek bir hesaplamaya aşağıda yer verilmiştir.</p>
          {renderSampleCalculation()}
        </div>
        <div>
          <h2>3. Pazar Yeri Komisyon Gideri Desteği</h2>
          <p>
            Bu başlık altında Arjantin, Brezilya, Endonezya, Filipinler,
            Hindistan ve Mısır&apos;da bulunan yurt dışı pazar yerlerine ödenen
            komisyon giderleri desteklenmektedir. Destek oranı %50 olup,
            şirketler bir yıl içerisinde maksimum <b>2.096.497 TL</b> destek
            ödemesinden faydalanabilmektedir.
          </p>
        </div>
        <div>
          <h2>
            4. Çevrim İçi Mağaza ve Hedef Ülke E-Ticaret Paydaşlarından Alınan
            Hizmet Desteği
          </h2>
          <p>
            Şirketlerin Çin, Japonya, Hindistan ve Brezilya&apos;daki pazar
            yerlerinde çevrim içi mağaza açılmasına, bu mağazaların yıllık
            ödemelerine ve ülkelerin e-ticaret paydaşlarından alacağı hizmetlere
            ilişkin giderleri her ülke için 3 yıl süresince ve %50 oranında
            desteklenmektedir. Destek tutarının üst sınırı 2024 yılı için&nbsp;
            <b>4.192.994 TL</b>&apos;dir. Destekten faydalanmak isteyen
            şirketlerin bir önceki yılda en az 2.500.000$ ihracat
            gerçekleştirmiş olması gerekmektedir.
          </p>
        </div>
        <div>
          <h1>Katkılarımız</h1>
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
