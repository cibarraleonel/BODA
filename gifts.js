// Lista de regalos
// Cada ítem tiene: titulo, precio, imagen, link

const gifts = [
  {
    title: "Balanza digital",
    price: 14999,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00477800/00477860.jpg",
    link: "https://www.cotodigital.com.ar/sitios/cdigi/productos/balanza-de-cocina-top-house-ek321105/_/R-00477860-00477860-200"
  },
  {
    title: "Pava eléctrica",
    price: 40199,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00502100/00502191.jpg",
    link: "https://www.cotodigital.com.ar/sitios/cdigi/productos/pava-el%C3%A9ctrica-top-house-hhb1795d-1-7-l-vidrio/_/R-00502191-00502191-200"
  },
  {
    title: "Microondas",
    price: 229499,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00536000/00536085.jpg",
    link: "https://www.cotodigital.com.ar/sitios/cdigi/productos/microondas-whirlpool-25-l-plata-wmg25bs/_/R-00536085-00536085-200"
  },
  {
    title: "Batidora de mano",
    price: 51586,
    img: "https://http2.mlstatic.com/D_Q_NP_685146-MLA99443802538_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/batidora-de-mano-bm8739a-con-box-blanco-atma/p/MLA45761468"
  },
  {
    title: "Mixer",
    price: 45599,
    img: "https://http2.mlstatic.com/D_Q_NP_856875-MLA74781978523_022024-F.webp",
    link: "https://www.mercadolibre.com.ar/mixer-liliana-rainbow-mix-ah10-negro/p/MLA18351018"
  },
  {
    title: "Secador de pelo",
    price: 19430,
    img: "https://http2.mlstatic.com/D_Q_NP_785666-MLA99464312694_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/secador-de-pelo-aire-frio-calor-2000w-kanji-beauty-color-negro/p/MLA42519614"
  },
  {
    title: "Platos playos x6",
    price: 22999,
    img: "https://http2.mlstatic.com/D_Q_NP_616758-MLA91424799305_092025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x6-plato-playo-24cm-vop-vidrio-opal-carol/up/MLAU3046661560"
  },
  {
    title: "Cubiertos",
    price: 22505,
    img: "https://http2.mlstatic.com/D_Q_NP_746948-MLA97532245326_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-de-12-cubiertos-tramontina-churrasco-dynamic-acero-inoxidable-mango-madera-22399030/p/MLA32486600"
  },
  {
    title: "Cucharas x12",
    price: 22199,
    img: "https://http2.mlstatic.com/D_Q_NP_673541-MLA100013206353_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x12-cuchara-mesa-tramontina-dynamic-madera-pack/p/MLA55750281"
  },
  {
    title: "Cucharitas x12",
    price: 13144,
    img: "https://http2.mlstatic.com/D_Q_NP_804162-MLA95972174479_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/pack-12-cucharitas-de-te-tramontina-athenas/p/MLA26783686"
  },
  {
    title: "Tazas de té x6",
    price: 32699,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_782928-MLA31035898135_062019-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x6-taza-de-te-con-plato-vajilla-germer-gastronomico/up/MLAU190909011"
  },
  {
    title: "Vasos x6",
    price: 15922,
    img: "https://http2.mlstatic.com/D_Q_NP_707475-MLA95599998252_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/vaso-copa-stallo-copon-vino-gourmet-rigolleau-x6-premium/up/MLAU3513997772"
  },
  {
    title: "Jarra hervidor",
    price: 21061,
    img: "https://http2.mlstatic.com/D_Q_NP_752493-MLA99575030790_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/jarro-hervidor-hudson-14-cm-antiadherente-color-negro/p/MLA26253215"
  },
  {
    title: "Olla antiadherente",
    price: 33156,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_691466-MLA99496683670_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/cacerola-de-aluminio-con-antiadherente-20-cm-daily-color-negro/p/MLA47451884"
  },
  {
    title: "Sartén antiadherente",
    price: 19327,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_612353-MLA95838103987_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/sarten-antiadherente-hudson-22cm-excelente-calidad-color-negro/p/MLA27437846"
  },
  {
    title: "Bífera antiadherente",
    price: 22909,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_788797-MLA95398150138_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/bifera-de-aluminio-cantiadherente-26x26cm-color-negro/p/MLA47599503"
  },
  {
    title: "Set de espátulas y cucharones",
    price: 22950,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_788797-MLA95398150138_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x5-utensilios-cocina-acero-inoxidable-cucharon-espatula/up/MLAU3444158830"
  },
  {
    title: "Frascos herméticos x6",
    price: 24849,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_856144-MLA96307592080_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/x-6-frascos-transparentes-gadnic-plastico-reforzado-blanco/p/MLA61441371"
  },
  {
    title: "Especieros",
    price: 29999,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_836356-MLA81224486733_122024-F.webp",
    link: "https://www.mercadolibre.com.ar/raitot-especiero-negro-16-16/p/MLA44582605"
  },
  {
    title: "Set de tablas de madera",
    price: 18990,
    img: "https://acdn-us.mitiendanube.com/stores/001/487/825/products/apc_9694-89dc95164cf390e05417338538623954-1024-1024.webp",
    link: "https://www.gangahome.com.ar/productos/set-x3-tablas-de-madera-gh-518/"
  }
];



// Export para que app.js pueda usarlo
window.gifts = gifts;