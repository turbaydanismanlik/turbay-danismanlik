'use client'
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
import {useSearchParams} from 'next/navigation'
import {Suspense} from 'react'

const IhracatDestekleriScreen = () => {
  return (
    <Suspense fallback={<></>}>
      <Content />
    </Suspense>
  )
}
const Content = () => {
  const params = useSearchParams()
  const isFromHomePage = params.get('fromHome')
  return (
    <div className="wrapper main">
      <KüreselTedarikZinciri isFromHomePage={isFromHomePage} />
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
