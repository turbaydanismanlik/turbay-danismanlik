import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
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
            <td style={{padding: '12px 15px'}}>4.577.703 TL</td>
            <td style={{padding: '12px 15px'}}>5.722.393 TL</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Yurt dışı birimlerin konsept mimari çalışmaları ve
              kurulum/dekorasyon giderleri
            </td>
            <td style={{padding: '12px 15px'}}>1.143.635 TL</td>
            <td style={{padding: '12px 15px'}}>1.906.761 TL</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Yurt dışı birimlerin brüt kira ve kira danışmanlığı giderleri ile
              vergi/resim/harç giderleri
            </td>
            <td style={{padding: '12px 15px'}}>3.051.451 TL</td>
            <td style={{padding: '12px 15px'}}>3.814.578 TL</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Patent/faydalı model/endüstriyel tasarım tescili ve yurt dışı
              marka tescil/yenileme/koruma giderleri
            </td>
            <td style={{padding: '12px 15px'}}>1.143.635 TL</td>
            <td style={{padding: '12px 15px'}}>952.852 TL</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Tasarımcı/modelist istihdamı için brüt maaş desteği
            </td>
            <td style={{padding: '12px 15px'}}>6.103.957 TL</td>
            <td style={{padding: '12px 15px'}}>2.860.670 TL</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>
              Uluslararası pazarlarda rekabet avantajını arttırmak üzere alınan
              danışmanlık giderleri
            </td>
            <td style={{padding: '12px 15px'}}>3.051.451 TL</td>
            <td style={{padding: '12px 15px'}}>3.814.578 TL</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df', fontWeight: 'bold'}}>
            <td style={{padding: '12px 15px'}}>Yıllık toplam destek tutarı</td>
            <td style={{padding: '12px 15px'}}>19.071.832 TL</td>
            <td style={{padding: '12px 15px'}}>19.071.832 TL</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <ExpandCollapseButton sectionTitle="TASARIMCI ŞİRKET VE TASARIM OFİSİ DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Tasarımcı şirket ve tasarım ofislerinin yurt dışında tanınma ve
            markalaşma amacıyla marka, patent, faydalı model, endüstriyel
            tasarım tescili, ve marka tescilinin yenilenmesi/ korunması
            giderleri, yurt dışı birim kira, temel kurulum, dekorasyon, konsept
            mimari çalışmaları ile birimlerin kiralanmasına ilişkin danışmanlık
            giderleri , vergi/resim/harç giderleri, istihdam giderleri,
            danışmanlık, fuar ve tanıtım faaliyetleri giderleri <b>4 yıl</b>{' '}
            boyunca <b>%50</b>&nbsp; oranında <span>yıllık toplamda</span>&nbsp;
            <b>19.071.832 TL</b>
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
          {renderTable()}
          <p>
            Destek tutarı yıllık ihracat tutarının yarısından fazla
            olamayacaktır.
          </p>
          <p>Tanıtım faaliyetleri kapsamında;</p>
          <ul>
            <li>Ulaşım, konaklama</li>
            <li>Tanıtım malzemelerinin nakliye bedelleri</li>
            <li>Türkçe yapılan tanıtım harcamaları</li>
            <li>Yurt içine yönelik tanıtım harcamaları</li>
            <li>
              Yurt dışında Türkçe yayın yapan yayın organlarında yayınlanan
              tanıtım harcamaları
            </li>
          </ul>
          <p>desteklenmemektedir.</p>
          <p>
            Tasarımcı şirket, tasarım ofisine ait olmayan markalar/ürünlerin
            bulunduğu birimler ile hammadde, yarı mamul gibi ürünler/markaların
            olduğu birimler desteklenmemektedir.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default TasarimciSirketVeTasarimOfisiDestegi
