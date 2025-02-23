import ExpandCollapseButton from '@/common/customExpandCollapse/ExpandCollapseButton'
import styles from './YatirimTesvik.module.css'

const YatirimTesvikScreen = () => {
  return (
    <div className="wrapper main">
      <div className={styles.container}>
        <ExpandCollapseButton sectionTitle="YATIRIM TEŞVİK BELGESİ NEDİR?">
          <div>
            <p>
              <b>Yatırım Teşvik Belgesi</b>, yatırımların mevzuatta belirlenen
              asgari şartlara uygun gerçekleştirilmesi durumunda, yatırımın
              niteliğine göre&nbsp;
              <b>
                KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi, sigorta
                primi işveren ve işçi hissesi desteği
              </b>
              &nbsp;unsurlarından yararlanma imkânı sağlayan ve elektronik
              ortamda düzenlenen bir belgedir.
            </p>
            <p>
              Normal şartlarda yatırım dönemi <b>3 yıllık</b> bir süreyi
              kapsamaktadır. Ancak bu süre içerisinde yatırımların
              tamamlanamaması halinde belgede kayıtlı sürenin yarısı kadar daha
              ilave süre talep edilebilmektedir. Bu durumda yatırımcıların{' '}
              <b>4,5 yıllık</b> bir süre içerisinde belgenin kendilerine
              sağladığı avantajlardan yararlanması mümkündür.
            </p>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton
          sectionTitle="YATIRIM TEŞVİK SİSTEMİ ve YATIRIM TEŞVİK BELGESİNİN SAĞLADIĞI
          AVANTAJLAR"
        >
          <div>
            <p>
              Yatırım teşvik sistemi&nbsp;
              <b>genel, bölgesel, stratejik ve proje bazlı yatırımların</b>
              &nbsp; teşviki uygulamalarından oluşmaktadır.
            </p>
            <p>
              Yatırım teşvik sisteminde birçok yatırım konusu için teşvik
              belgesi düzenlenebilmekle birlikte sistem dışında tutulan yatırım
              konuları da yer almaktadır. Bu alanlar mevzuatta teşvik
              edilmeyecek ve teşviki belli şartlara bağlı yatırım konuları
              başlığı altında açıkça ifade edilmiştir. Desteklenmeyen ve teşviki
              için öngörülen şartları sağlayamayan yatırım konularıyla birlikte
              bölgesel ve stratejik yatırımlar hariç tutulduğunda, yatırımların
              bölgesinde öngörülen asgari sabit yatırım tutarında
              gerçekleştirilecek olması halinde genel destekleme sınıfında belge
              alınabilecektir.
            </p>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton sectionTitle="GENEL DESTEKLİ BELGELERİN YATIRIMCILARA SAĞLADIĞI AVANTAJLAR">
          <div>
            <ul>
              <li>Gümrük vergisi muafiyeti</li>
              <li>KDV istisnası</li>
              <li>
                Sigorta primi işveren hisse desteği&nbsp;
                <b>(Tersanelerin gemi inşa yatırımları için)</b>
              </li>
              <li>
                Gelir vergisi stopaj desteği&nbsp;
                <b>(6&apos;ncı bölgede gerçekleştirilecek yatırımlar için)</b>
              </li>
            </ul>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton sectionTitle="BÖLGESEL DESTEKLİ BELGELERİN YATIRIMCILARA SAĞLADIĞI AVANTAJLAR">
          {' '}
          <div>
            <p>
              Yatırım teşvik mevzuatında bölgesel desteklerden yararlanabilecek
              sektörler açıkça belirtilmiştir. Bu sektörlerin, yatırım yapılacak
              ilde desteklenen sektörler arasında yer alması ve asgari sabit
              yatırım tutarı şartının karşılanması halinde aşağıdaki destek
              unsurlarından yararlanılabilecektir.
            </p>
            <ul>
              <li>Gümrük vergisi muafiyeti</li>
              <li>KDV istisnası</li>
              <li>Vergi indirimi</li>
              <li>Sigorta primi işveren hisse desteği</li>
              <li>Yatırım yeri tahsisi</li>
              <li>
                Faiz veya kâr payı desteği&nbsp;
                <b>
                  (3&apos;üncü, 4&apos;üncü, 5&apos;inci ve 6&apos;ncı
                  bölgelerde gerçekleştirilecek yatırımlar için)
                </b>
              </li>
              <li>
                Sigorta primi desteği&nbsp;
                <b>(6&apos;ncı bölgede gerçekleştirilecek yatırımlar için)</b>
              </li>
              <li>
                Gelir vergisi stopaj desteği&nbsp;
                <b>(6&apos;ncı bölgede gerçekleştirilecek yatırımlar için)</b>
              </li>
            </ul>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton sectionTitle="STRATEJİK YATIRIMLARDA SAĞLANAN ÖZEL DESTEKLER">
          {' '}
          <div>
            <p>
              Stratejik yatırımlarda ise&nbsp;
              <b>
                bölgesel teşvik kapsamında sağlanan tüm destek unsurlarından
                yararlanılabilmekle beraber ek olarak
              </b>
              &nbsp;aşağıdaki desteklerden de yararlanılabilecektir.
            </p>
            <ul>
              <li>
                Faiz veya kâr payı desteği&nbsp;
                <b>
                  (1&apos;inci ve 2&apos;nci bölgelerde yapılacak yatırımlar da
                  yararlanılabilmektedir.)
                </b>
              </li>
              <li>
                KDV iadesi&nbsp; (Sabit yatırım tutarı&nbsp;
                <b>500 milyon Türk lirasının üzerindeki stratejik yatırımlar</b>
                &nbsp;kapsamında yapılacak <b>bina-inşaat harcamalarında</b> KDV
                iadesinden yararlanma imkânı bulunmaktadır.)
              </li>
            </ul>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton sectionTitle="YATIRIM TEŞVİK BELGESİ DESTEK UNSURLARI">
          {' '}
          <div className={styles.destekUnsurlari}>
            <ul>
              <li>
                <p>
                  <b>Gümrük Vergisi Muafiyeti:&nbsp;</b>Yatırım teşvik belgesi
                  kapsamında&nbsp;
                  <b>
                    yurt dışından temin edilecek makine-teçhizat için gümrük
                    vergisi ödenmemektedir
                  </b>
                  . Ancak makine-teçhizatın, gümrük vergisi muafiyetinden
                  yararlanamayacak makine-teçhizat listesinde yer alması ya da
                  belgede kayıtlı makineye ait yedek parça olması halinde gümrük
                  vergisi muafiyetinden yararlanılamayacaktır.
                </p>
              </li>
              <li>
                <p>
                  <b>KDV İstisnası:&nbsp;</b>Yatırım teşvik belgesi
                  kapsamında&nbsp;
                  <b>
                    yurt içinden ve yurt dışından temin edilecek makine-teçhizat
                    için KDV ödenmemektedir
                  </b>
                  . Ayrıca yürürlükteki mevzuat hükümleri uyarınca imalat sanayi
                  ve turizm sektöründe faaliyet gösteren firmaların belge
                  kapsamındaki inşaat harcamaları da KDV&apos;den istisnadır.
                </p>
              </li>
              <li>
                <p>
                  <b>Vergi İndirimi:&nbsp;</b>Bölgesel teşvik uygulamaları
                  kapsamında gerçekleştirilecek yatırımlarda&nbsp;
                  <b>
                    gelir veya kurumlar vergisi, sabit yatırım tutarının belli
                    bir oranına ulaşıncaya kadar indirimli olarak
                    uygulanmaktadır
                  </b>
                  . Belge kapsamında yatırımcılara, sabit yatırım tutarının
                  belli bir kısmına kadar vergi ödememe hakkı tanınmaktadır.
                  Örneğin 4.bölgede gerçekleştirilecek 4 milyon TL tutarındaki
                  bir yatırım sonucunda firmanın 1,2 milyon TL vergi
                  indiriminden yararlanma hakkı doğacaktır. İlk geçici vergi
                  döneminden itibaren yatırımcılar indirim hakkını
                  kullanabileceklerdir. Ayrıca yatırım dönemi içerisinde diğer
                  faaliyetlerden elde edilen kazançlara da indirimli gelir veya
                  kurumlar vergisi uygulanabilmektedir. Belgenin tamamlama
                  vizesi işlemleri için başvuru yapılmasıyla birlikte kalan
                  vergi indirim hakkı yeniden değerleme oranıyla değerlenerek
                  bir sonraki yıla aktarılmaktadır. Bu noktada belge tamamlama
                  vizesi işlemleriyle birlikte sadece yatırımdan elde edilen
                  gelirlerin vergi indirimine konu edilebileceği, diğer
                  faaliyetlerden elde edilen gelirlerde vergi indirim hakkının
                  kullanılamayacağı unutulmamalıdır.
                </p>
              </li>
              <li>
                <p>
                  <b>Sigorta Primi İşveren Hissesi Desteği:&nbsp;</b>Stratejik
                  yatırımlar ve bölgesel teşvik uygulamaları kapsamında
                  desteklenen yatırımlarda&nbsp;
                  <b>
                    sigorta primi işveren hissesinin asgari ücrete tekabül eden
                    kısmının ödenmemesi şeklinde uygulanmaktadır
                  </b>
                  . Komple yeni yatırımlarda belge kapsamında gerçekleşen
                  istihdam için, diğer yatırım cinslerinde ise yatırıma
                  başlamadan önceki son 6 aylık ortalama sigortalı sayısına
                  ilave olarak yatırım kapsamında istihdam edilen sigortalılar
                  için destek sağlanmaktadır. İstisnaları olmakla birlikte
                  yatırım teşvik belgesinin tamamlama vizesi işlemlerinin
                  yapılmasıyla birlikte destekten yararlanılmaya başlanmaktadır.
                  Yatırımın bölgesine göre söz konusu destekten&nbsp;
                  <b>2 yıldan 12 yıla kadar yararlanılması mümkündür</b>. Destek
                  süresi içerisinde her ay, tanımlanan her bir çalışan için brüt
                  asgari ücretin %15,5&apos;i kadar destekten
                  yararlanılmaktadır.
                </p>
              </li>
              <li>
                <p>
                  <b>Yatırım Yeri Tahsisi:&nbsp;</b>Yatırım teşvik belgesi
                  düzenlenmiş stratejik yatırımlar ve bölgesel desteklerden
                  yararlanacak yatırımlar için Çevre ve Şehircilik Bakanlığınca
                  belirlenen usul ve esaslara göre yatırım yeri tahsis
                  edilebilmektedir.
                </p>
              </li>
              <li>
                <p>
                  <b>Faiz veya Kâr Payı Desteği:&nbsp;</b>Bölgesel teşvik
                  uygulamaları ve stratejik yatırımlar kapsamında desteklerden
                  yararlanacak yatırımlar kapsamında&nbsp;
                  <b>
                    kullanılan kredilerde faizin veya kâr payının belli
                    oranlarda azami 5 yıl süreyle bütçe kaynaklarından
                    karşılanması şeklinde uygulanmaktadır
                  </b>
                  . Destekten yararlanılabilmesi için kredinin yatırım kredisi
                  olarak kullanılması ve vadesinin minimum 1 yıl olması
                  gerekmektedir.
                </p>
              </li>
              <li>
                <p>
                  <b>Sigorta Primi Desteği:&nbsp;</b>6&apos;ncı bölgede
                  stratejik yatırımlar ve bölgesel teşvik uygulamaları
                  kapsamında gerçekleştirilecek yatırımla sağlanan ilave
                  istihdam için işveren tarafından ödenmesi gereken&nbsp;
                  <b>
                    sigorta primi işçi hissesinin asgari ücrete tekabül eden
                    kısmının tamamlama vizesinin yapılmasını müteakip 10 yıl
                    süreyle Sanayi ve Teknoloji Bakanlığı bütçesinden
                    karşılanması şeklinde uygulanmaktadır
                  </b>
                  . Öte yandan Teknoloji Odaklı Sanayi Hamlesi Programı
                  kapsamında desteklenmesine karar verilen stratejik
                  yatırımlarda 6&apos;ncı bölge dışındaki bölgelerde söz konusu
                  destek, yatırıma konu ürün yüksek teknoloji seviyesinde ise 7
                  yıl, diğerlerinde ise 5 yıl süreyle uygulanmaktadır.
                </p>
              </li>
              <li>
                <p>
                  <b>Gelir Vergisi Stopaj Desteği:&nbsp;</b>6&apos;ncı bölge
                  ve/veya Teknoloji Odaklı Sanayi Hamlesi Programı kapsamında
                  desteklenmesine karar verilen stratejik yatırımlar için
                  düzenlenen teşvik belgeleri kapsamında gerçekleştirilecek
                  yatırımla sağlanan ilave istihdam için,&nbsp;
                  <b>
                    işçi ücretlerinin asgari ücrete tekabül eden kısmı üzerinden
                    hesaplanan gelir vergisinin
                  </b>
                  , yatırımın kısmen veya tamamen faaliyete geçtiği tarihten
                  itibaren <b>10 yıl süreyle</b> verilecek muhtasar beyanname
                  üzerinden tahakkuk eden vergiden terkin edilmesi şeklinde
                  uygulanmaktadır.
                </p>
              </li>
            </ul>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton sectionTitle="KİMLER YATIRIM TEŞVİK BELGESİ ALABİLİR?">
          {' '}
          <div>
            <ul>
              <li>
                <b>Gerçek kişiler</b>
              </li>
              <li>
                <b>Adi ortaklıklar</b>
              </li>
              <li>
                <b>Sermaye şirketleri</b>
              </li>
              <li>
                <b>Kooperatifler</b>
              </li>
              <li>
                <b>Birlikler</b>
              </li>
              <li>
                <b>İş ortaklıkları</b>
              </li>
              <li>
                <b>Kamu kurum ve kuruluşları</b>&nbsp;(genel ve özel bütçeli
                kurum ve kuruluşlar, il özel idareleri, belediyeler ve kamu
                iktisadi teşebbüsleri ile bunların sermaye bileşimindeki hisse
                oranları yüzde elliyi geçen kurum ve kuruluşlar)
              </li>
              <li>
                <b>Kamu kuruluşu niteliğindeki meslek kuruluşları</b>
              </li>
              <li>
                <b>Dernekler</b>
              </li>
              <li>
                <b>Vakıflar</b>
              </li>
              <li>
                <b>
                  Yurt dışındaki yabancı şirketlerin Türkiye&apos;deki şubeleri{' '}
                </b>
              </li>
            </ul>
            <p>
              teşvik belgesi düzenlenmesi için Sanayi ve Teknoloji Bakanlığına
              müracaat edebilir.
            </p>
            <p>
              Yatırım teşvik belgesi başvurusunda bulunabilmek için kuruluş
              işlemlerinin tamamlanmış olması gerekmektedir. Kuruluş sürecini
              tamamlamış ancak faaliyete başlamamış yatırımcıların yanı sıra
              faaliyetlerini devam ettiren yatırımcılar da belge alma hakkına
              sahiptirler.
            </p>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton sectionTitle="ASGARİ SABİT YATIRIM TUTARI NE KADARDIR?">
          {' '}
          <div>
            <p>
              Yatırım teşvik sisteminde iller 6 bölge içerisinde
              sınıflandırılmıştır. Yatırım teşvik belgesi düzenlenebilmesi için
              arazi-arsa, bina-inşaat, makine-teçhizat ile diğer yatırım
              harcaması kalemlerinin toplamı;
              <ul>
                <li>
                  <b>1&apos;inci ve 2&apos;nci Bölgelerde:</b>&nbsp;3 Milyon TL
                </li>
                <li>
                  <b>
                    3&apos;üncü, 4&apos;üncü, 5&apos;inci ve 6&apos;ncı
                    Bölgelerde:
                  </b>
                  &nbsp;1.5 Milyon TL
                </li>
                <li>
                  <b>Stratejik Yatırımlarda:</b>&nbsp;50 Milyon TL
                </li>
              </ul>
              olması gerekmektedir. Öte yandan bölgesel teşvik uygulamalarında
              asgari kapasite, sabit yatırım tutarı ve yatırımın sağlaması
              gereken başkaca şartlar talep edilebilmektedir.
            </p>
          </div>
        </ExpandCollapseButton>
        <ExpandCollapseButton sectionTitle="YATIRIM TEŞVİK KAPSAMINDA SUNDUĞUMUZ HİZMETLER">
          <div>
            <ul>
              <li>
                Yatırımın konu, kapasite, asgari sabit yatırım tutarı ve
                mevzuatta belirlenen diğer şartlar açısından incelenmesi
                ve&nbsp;
                <b>
                  teşvikten yararlanmaya uygun olup olmadığı konusunda
                  yatırımcının bilgilendirilmesi
                </b>
                ,
              </li>
              <li>
                Yatırımcı bilgilerinin elektronik teşvik uygulama ve yabancı
                sermaye bilgi sistemine girilmesi, ortaklık yapısının değişmesi
                durumunda&nbsp;
                <b>güncelleme işlemlerinin yapılması</b>,
              </li>
              <li>
                Yatırım teşvik belgesi kapsamına dahil edilebilecek&nbsp;
                <b>harcamaların tespiti</b>,
              </li>
              <li>
                Yatırım teşvik belgesi başvurusu için&nbsp;
                <b>fizibilite raporu hazırlanması</b>,
              </li>
              <li>
                <b>Yatırım teşvik belgesi başvurusunun yapılması</b>,
              </li>
              <li>
                Yatırım teşvik belgesinin alınmasından sonraki süreçte&nbsp;
                <b>
                  firmanın dikkat etmesi gereken noktalar ve destek unsurları
                  hakkında bilgilendirilmesi
                </b>
                ,
              </li>
              <li>
                Makine-teçhizat ve bina-inşaat harcamalarında KDV istisnasından
                yararlanılabilmesi için&nbsp;
                <b>KDV istisna yazısının alınması</b>, belgede yapılacak revize
                işlemleri sonrasında mevcut yazının güncellenmesine yönelik
                işlemlerin tesisi,
              </li>
              <li>
                Yatırım teşvik belgesinin ithal ve yerli listelerinde yer alan
                makine-teçhizat için gerçekleşme gönderilmesi, fatura/beyanname
                kayıtlarının yapılması ve yevmiye bilgilerinin sisteme
                işlenmesi, bina-inşaat, arazi-arsa ve diğer yatırım harcamaları
                için&nbsp;
                <b>
                  fatura/beyanname kayıtlarının yapılması ve yevmiye
                  bilgilerinin sisteme işlenmesi
                </b>
                ,
              </li>
              <li>
                Yatırım teşvik belgesinin ithal ve yerli listelerinde yer alan
                makine-teçhizatlarda firmanın değişiklik yapmak istemesi
                hâlinde&nbsp;
                <b>revize işlemlerinin yapılması</b>,
              </li>
              <li>
                Yatırım teşvik belgesinin ithal ve yerli listelerinde yer
                alan&nbsp;
                <b>
                  makine-teçhizatın finansal kiralama yoluyla temin edilmek
                  istenmesi hâlinde sürecin yönetilmesi, gerekli revize
                  işlemlerinin yapılması
                </b>
                ,
              </li>
              <li>
                Sabit yatırım tutarı, kapasite, yatırım yeri değişikliği, süre
                uzatımı, yatırım cinsi vs. revize işlemlerinin yapılması,
              </li>
              <li>
                Yatırım teşvik belgesinin&nbsp;
                <b>tamamlama vizesi işlemlerinin yapılması</b>,
              </li>
              <li>
                Talep edilmesi hâlinde&nbsp;
                <b>
                  vergi indirim hakkının kullanılabilmesi için süreç yönetimi
                </b>
                ,
              </li>
              <li>
                Tamamlama vizesi işlemleri sonrasında firmanın talebi
                hâlinde&nbsp;
                <b>SGK Teşvik sürecinin yönetilmesi</b>
              </li>
            </ul>
          </div>
        </ExpandCollapseButton>
      </div>
    </div>
  )
}
export default YatirimTesvikScreen
