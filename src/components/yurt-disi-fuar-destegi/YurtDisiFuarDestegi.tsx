import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './YurtDisiFuarDestegi.module.css'

const YurtDisiFuarDestegi = () => {
  const renderTable = () => {
    return (
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          margin: '20px 0',
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#e7f0df',
              borderBottom: '2px solid #141414',
            }}
          >
            <th style={{padding: '12px 15px', textAlign: 'left'}}>
              Destek Türü
            </th>
            <th style={{padding: '12px 15px', textAlign: 'left'}}>
              Destek Tutarları (TL)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>Genel Nitelikli Fuarlar</td>
            <td style={{padding: '12px 15px'}}>571.290</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>Sektörel Nitelikli Fuarlar</td>
            <td style={{padding: '12px 15px'}}>952.853</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e7f0df'}}>
            <td style={{padding: '12px 15px'}}>Prestijli Fuarlar</td>
            <td style={{padding: '12px 15px'}}>2.860.670</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <ExpandCollapseButton sectionTitle="YURT DIŞI FUAR DESTEĞİ">
      <div className={styles.container}>
        <div>
          <p>
            Yurt dışı fuar katılımcıları tarafından yurt dışı fuar organizasyonu
            kapsamında gerçekleştirilen fuar katılımları ve bireysel katılımlar,
            bir takvim yılında <span>en fazla 5 defa</span> stant alanının
            metrekare cinsinden büyüklüğü dikkate alınarak desteğe esas tutar
            üzerinden desteklenmektedir.
          </p>
          <p>
            Üretici-imalatçı kuruluşları ve genelgede nitelikleri belirtilen
            katılımcılar bir takvim yılında <span>en fazla 10</span> fuar
            desteğinden faydalanabilmektedir.
          </p>
          {renderTable()}
          <p>
            Desteğe esas tutar metrekare başına toplam maliyetin <b>%50</b>
            &apos;sini, hedef ülkelerde <b>%70</b>&apos;ini, hedef ülkede hedef
            sektör ise <b>%75</b>&apos;ini geçemez.
          </p>
          <p>
            Aynı yurt dışı fuar katılımı için <span>en fazla 10 kez</span>&nbsp;
            destekten yararlanılabilir.
          </p>
          <p>
            Bir takvim yılında <span>en fazla 2 prestijli fuar</span>{' '}
            desteğinden yararlanılabilir.
          </p>
          <p>
            Mikro ve küçük işletmeler %75 oran ve en fazla 10 fuar desteğinden
            yararlanabilmektedir.
          </p>
        </div>
      </div>
    </ExpandCollapseButton>
  )
}
export default YurtDisiFuarDestegi
