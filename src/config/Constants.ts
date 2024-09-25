export const headerMenu = [
  {id: 0, title: 'Hakkımızda'},
  {
    id: 1,
    title: 'Hizmetlerimiz',
    subList: [
      {
        id: 'h-1',
        title: 'İhracat Destekleri',
        linkTo: '/hizmetlerimiz/ihracat-destekleri',
      },
      {
        id: 'h-2',
        title: 'Yatırım Teşvik',
        linkTo: '/hizmetlerimiz/yatirim-tesvik',
      },
      {
        id: 'h-3',
        title: 'E-İhracat Destekleri',
        // linkTo: '/hizmetlerimiz/e-ihracat',
      },
      {
        id: 'h-4',
        title: 'SGK Teşvik',
        // linkTo: '/hizmetlerimiz/sgk-tesvik'
      },
    ],
  },
  {id: 2, title: 'Blog'},
  {id: 3, title: 'İletişim', linkTo: '/iletisim'},
]

export const footerLinks = [
  {id: 0, title: 'Hakkımızda', linkTo: ''},
  {
    id: 1,
    title: 'Gizlilik Sözleşmesi',
    linkTo: '',
  },
  {id: 2, title: 'KVKK', linkTo: ''},
  {id: 3, title: 'Çerez Politikası', linkTo: ''},
  {id: 4, title: 'Bize Ulaşın', linkTo: '/iletisim'},
]
