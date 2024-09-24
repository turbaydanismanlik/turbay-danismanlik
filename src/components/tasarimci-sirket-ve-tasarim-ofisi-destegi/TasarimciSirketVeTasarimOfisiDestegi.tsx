import styles from './TasarimciSirketVeTasarimOfisiDestegi.module.css'

const TasarimciSirketVeTasarimOfisiDestegi = () => {
  const renderTable = () => {
    return (
      <table
        style={{width: '100%', borderCollapse: 'collapse', margin: '20px 0'}}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#e7f0df',
              borderBottom: '2px solid #141414',
            }}
          >
            <th style={{padding: '12px 15px', textAlign: 'left'}}>
              Desteklenen Giderler
            </th>
            <th style={{padding: '12px 15px', textAlign: 'left'}}>
              Tasarım Ofisi Desteği
            </th>
            <th style={{padding: '12px 15px', textAlign: 'left'}}>
              Tasarımcı Şirket Desteği
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Tanıtım harcamaları/yurt dışı fuar katılımlarına ilişkin giderler
            </td>
            <td style={{padding: '12px 15px'}}>3.354.858</td>
            <td style={{padding: '12px 15px'}}>4.193.766</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Yurt dışı birimlerin konsept mimari çalışmaları ve
              kurulum/dekorasyon giderleri
            </td>
            <td style={{padding: '12px 15px'}}>838.135</td>
            <td style={{padding: '12px 15px'}}>1.397.407</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Yurt dışı birimlerin brüt kira ve kira danışmanlığı giderleri ile
              vergi/resim/harç giderleri
            </td>
            <td style={{padding: '12px 15px'}}>2.236.315</td>
            <td style={{padding: '12px 15px'}}>2.795.587</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Patent/faydalı model/endüstriyel tasarım tescili ve yurt dışı
              marka tescil/yenileme/koruma giderleri
            </td>
            <td style={{padding: '12px 15px'}}>838.135</td>
            <td style={{padding: '12px 15px'}}>698.316</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Tasarımcı/modelist istihdamı için brüt maaş desteği
            </td>
            <td style={{padding: '12px 15px'}}>4.473.402</td>
            <td style={{padding: '12px 15px'}}>2.096.497</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Uluslararası pazarlarda rekabet avantajını arttırmak üzere alınan
              danışmanlık giderleri
            </td>
            <td style={{padding: '12px 15px'}}>2.236.315</td>
            <td style={{padding: '12px 15px'}}>2.795.587</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df', fontWeight: 'bold'}}>
            <td style={{padding: '12px 15px'}}>Yıllık toplam destek tutarı</td>
            <td style={{padding: '12px 15px'}}>13.977.160</td>
            <td style={{padding: '12px 15px'}}>13.977.160</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className={styles.container}>
      <h1>Tasarımcı Şirket ve Tasarım Ofisi Desteği</h1>
      <div>
        <p>
          Tasarımcı şirket ve tasarım ofislerinin yurt dışında tanınma ve
          markalaşma amacıyla marka, patent, faydalı model, endüstriyel tasarım
          tescili, ve marka tescilinin yenilenmesi/ korunması giderleri, yurt
          dışı birim kira, temel kurulum, dekorasyon, konsept mimari çalışmaları
          ile birimlerin kiralanmasına ilişkin danışmanlık giderleri ,
          vergi/resim/harç giderleri, istihdam giderleri, danışmanlık, fuar ve
          tanıtım faaliyetleri giderleri <b>4 yıl</b> boyunca <b>%50</b>&nbsp;
          oranında <span>yıllık toplamda</span>&nbsp;<b>13.977.160 TL</b>
          &apos;ye kadar desteklenmektedir.
        </p>
        <p>
          Tasarımcı şirket, tasarım ofisi münhasıran moda veya endüstriyel
          tasarım alanında faaliyet göstermeli ve tasarımcı/tasarımcıların
          şirket hissesinin %50&apos;den fazlasına sahip olması gerekmektedir.
          Tasarımcıların üniversitelerin ilgili bölümlerinden en az lisans
          derecesinde mezun olmaları gerekmektedir.
        </p>
        <p>
          Başvuru yapılan markanın başvuru tarihinden en az 1 yıl önce yurt
          içinde tescili gerçekleşmiş olmalıdır.
        </p>
        <p>
          Destek tutarı yıllık ihracat tutarının yarısından fazla olamayacaktır.
        </p>
        {renderTable()}
        <p>Tanıtım faaliyetleri kapsamında;</p>
        <ul>
          <li>Ulaşım, konaklama,</li>
          <li>Tanıtım malzemelerinin nakliye bedelleri,</li>
          <li>Türkçe yapılan tanıtım harcamaları,</li>
          <li>Yurt içine yönelik tanıtım harcamaları,</li>
          <li>
            Yurt dışında Türkçe yayın yapan yayın organlarında yayınlanan
            tanıtım harcamaları
          </li>
        </ul>
        <p>desteklenmemektedir.</p>
        <p>
          Bayilere yönelik düzenlenen etkinlikler destek kapsamı dışındadır.
        </p>
        <p>
          Tasarımcı şirket, tasarım ofisine ait olmayan markalar/ürünlerin
          bulunduğu birimler ile hammadde, yarı mamul gibi ürünler/markaların
          olduğu birimler desteklenmemektedir.
        </p>
      </div>
    </div>
  )
}
export default TasarimciSirketVeTasarimOfisiDestegi
