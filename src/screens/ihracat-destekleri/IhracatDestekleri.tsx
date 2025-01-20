'use client'
import {useEffect, useState} from 'react'
import styles from './IhracatDestekleri.module.css'
import CustomTabComponent from '@/common/customTabComponent/CustomTabComponent'
import KüreselTedarikZinciri from '@/components/küresel-tedarik-zinciri/KüreselTedarikZinciri'
import PazaraGirisBelgesiDestegi from '@/components/pazara-giris-belgesi-destegi/PazaraGirisBelgesiDestegi'
import YurtDisiMarkaTescilDestegi from '@/components/yurt-disi-marka-tescil-destegi/YurtDisiMarkaTescilDestegi'
import PazaraGirisProjesiHazirlamaDestegi from '@/components/pazara-giris-projesi-hazirlama-destegi/PazaraGirisProjesiHazirlamaDestegi'
import YurtDisiPazarArastirmasiDestegi from '@/components/yurt-disi-pazar-arastirmasi-destegi/YurtDisiPazarArastirmasiDestegi'
import YurtDisiFuarDestegi from '@/components/yurt-disi-fuar-destegi/YurtDisiFuarDestegi'
import YurtİciFuarDestegi from '@/components/yurt-ici-fuar-destegi/YurtİciFuarDestegi'
import SirketVeMarkaAlimDestegi from '@/components/sirket-ve-marka-alim-destegi/SirketVeMarkaAlimDestegi'
import BirimKiraDestegi from '@/components/birim-kira-destegi/BirimKiraDestegi'
import TanitimDestegi from '@/components/tanitim-destegi/TanitimDestegi'
import TasarimciSirketVeTasarimOfisiDestegi from '@/components/tasarimci-sirket-ve-tasarim-ofisi-destegi/TasarimciSirketVeTasarimOfisiDestegi'
import GemiYatSektorundeFaaliyetGosterenSirketlereTasarimDestegi from '@/components/gemi-yat-sektorunde-faaliyet-gosteren-sirketlere-tasarim-destegi/GemiYatSektorundeFaaliyetGosterenSirketlereTasarimDestegi'

const IhracatDestekleriScreen = () => {
  // const [selectedTab, setSelectedTab] = useState(0)
  // const getLabel = (label: string, value: number) => {
  //   return (
  //     <div className={styles.labelContainer}>
  //       <p className={styles.label}>{label}</p>
  //     </div>
  //   )
  // }
  // const options = [
  //   {
  //     label: getLabel('Küresel Tedarik Zinciri', 0),
  //     value: 0,
  //   },
  //   {label: getLabel('Birim Kira Desteği', 1), value: 1},
  //   {label: getLabel('Yurt Dışı Fuar Desteği', 2), value: 2},
  //   {label: getLabel('Yurt İçi Fuar Desteği', 3), value: 3},
  //   {label: getLabel('Tanıtım Desteği', 4), value: 4},
  //   {label: getLabel('Yurt Dışı Marka Tescil Desteği', 5), value: 5},
  //   {label: getLabel('Pazara Giriş Belgesi Desteği', 6), value: 6},
  //   {label: getLabel('Pazara Giriş Projesi Hazırlama Desteği', 7), value: 7},
  //   {label: getLabel('Yurt Dışı Pazar Araştırması Desteği', 8), value: 8},
  //   {
  //     label: getLabel('Şirket ve Marka Alım Desteği', 9),
  //     value: 9,
  //   },
  //   {
  //     label: getLabel('Tasarımcı Şirket ve Tasarım Ofisi Desteği', 10),
  //     value: 10,
  //   },
  //   {
  //     label: getLabel(
  //       'Gemi ve Yat Sektöründe Faaliyet Gösteren Şirketlere Tasarım Desteği',
  //       11,
  //     ),
  //     value: 11,
  //   },
  // ]

  // const handleTabChange = (value: number) => {
  //   setSelectedTab(value)
  //   const activeTab: any = document.querySelector(
  //     `.${styles.switchWrapperStyle} div div:nth-child(${selectedTab + 1})`,
  //   )
  //   const switchWrapper: any = document.querySelector(
  //     `.${styles.switchWrapperStyle}`,
  //   )
  //   console.log(activeTab)
  //   const tabWidth: any = activeTab ? `${activeTab?.offsetWidth}` : null

  //   if (switchWrapper) {
  //     switchWrapper.style.setProperty(
  //       '--left-position',
  //       `${tabWidth * value}px`,
  //     )
  //     switchWrapper.style.setProperty('--tab-width', `${tabWidth}px`)
  //   }
  // }

  // useEffect(() => {
  //   handleTabChange(0)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    <div className="wrapper main">
      {/* <CustomTabComponent
        options={options}
        initialTab={selectedTab}
        onTabChange={(value) => handleTabChange(value)}
        switchWrapperStyle={styles.switchWrapperStyle}
      />
      {selectedTab == 0 && <KüreselTedarikZinciri />}
      {selectedTab == 1 && <BirimKiraDestegi />}
      {selectedTab == 2 && <YurtDisiFuarDestegi />}
      {selectedTab == 3 && <YurtİciFuarDestegi />}
      {selectedTab == 4 && <TanitimDestegi />}
      {selectedTab == 5 && <YurtDisiMarkaTescilDestegi />}
      {selectedTab == 6 && <PazaraGirisBelgesiDestegi />}
      {selectedTab == 7 && <PazaraGirisProjesiHazirlamaDestegi />}
      {selectedTab == 8 && <YurtDisiPazarArastirmasiDestegi />}
      {selectedTab == 9 && <SirketVeMarkaAlimDestegi />}
      {selectedTab == 10 && <TasarimciSirketVeTasarimOfisiDestegi />}
      {selectedTab == 11 && (
        <GemiYatSektorundeFaaliyetGosterenSirketlereTasarimDestegi />
      )} */}
      <KüreselTedarikZinciri />
      <BirimKiraDestegi />
      <YurtDisiFuarDestegi />
      <YurtİciFuarDestegi />
      <TanitimDestegi />
      <YurtDisiMarkaTescilDestegi />
      <PazaraGirisBelgesiDestegi />
      <PazaraGirisProjesiHazirlamaDestegi />
      <YurtDisiPazarArastirmasiDestegi />
      <SirketVeMarkaAlimDestegi />
      <TasarimciSirketVeTasarimOfisiDestegi />
      <GemiYatSektorundeFaaliyetGosterenSirketlereTasarimDestegi />
    </div>
  )
}
export default IhracatDestekleriScreen
