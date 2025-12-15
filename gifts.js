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
    title: "Pava electrica",
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
    title: "Set toallones y toallas (marrón o gris)",
    price: 19999,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_750759-MLA96418639609_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/blanqueria-home-comfort-toalla-y-toallon-chocolate-lisa-unidad-1-1-70-cm/p/MLA53547310"
  },
  {
    title: "Set manopla + repasadores + paño + agarradera (rayado)",
    price: 15705,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_914055-MLA88010943300_072025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1510860941-kit-cocina-2-repasadores-pano-agarradera-manopla-_JM"
  },
  {
    title: "Mantel (natural)",
    price: 19900,
    img: "https://http2.mlstatic.com/D_Q_NP_684169-MLA72249572198_102023-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1145777132-mantel-ecocuero-texturado-impermeable-lavable-1-x-140-mts-_JM"
  },
  {
    title: "Juego de sábanas tamaño King (arena)",
    price: 46200,
    img: "https://http2.mlstatic.com/D_Q_NP_927635-MLA99991272635_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/juego-de-sabanas-king-premium-hotelera-700h-tacto-suave-color-oxford-platinum-700-hq-blanco-diseno-de-la-tela-lisa/p/MLA49823735"
  },
  {
    title: "Acolchado / duvet King (beige)",
    price: 50990,
    img: "https://acdn-us.mitiendanube.com/stores/001/487/825/products/img_1307-50ac7195560272589517655071507826-1024-1024.webp",
    link: "https://www.gangahome.com.ar/productos/acolchado-4-estaciones-california-king-beige-gh-0012-k-bg-ls4gf/"
  },
  {
    title: "Tabla de planchar",
    price: 23195,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_755882-MLA83771621030_042025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1816196586-tabla-de-planchar-para-mesa-con-patas-plegables-_JM"
  },
  {
    title: "Plancha",
    price: 23626,
    img: "https://http2.mlstatic.com/D_Q_NP_917300-MLA99981505103_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/plancha-seca-de-ropa-con-base-de-acero-inoxidable-winco-w-35/p/MLA33388394"
  },
  {
    title: "Cestos para ropa",
    price: 12023,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_667512-MLA76272749996_052024-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1778201668-cesto-canasto-ropa-sucia-tela-impermeable-plegable-c-manija-_JM"
  },
  {
    title: "Caja organizadora GRIS x3",
    price: 11400,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_771876-MLA93499715036_102025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1908499246-set-x-3-canasto-caja-organizador-plastico-simil-rattan-chico-_JM"
  },
  {
    title: "Papeleras/Basureros",
    price: 11151,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_757196-MLA74311800194_022024-F.webp",
    link: "https://www.mercadolibre.com.ar/cesto-plastico-residuos-pedal-12lts-star/up/MLAU248275222"
  },
  {
    title: "platos playos",
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
    title: "Set de espátulas/cucharones (acero inoxidable)",
    price: 22950,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_788797-MLA95398150138_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x5-utensilios-cocina-acero-inoxidable-cucharon-espatula/up/MLAU3444158830"
  },
  {
    title: "Frascos hermeticos  x6",
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
  },
  {
    title: "Set de ensaladeras",
    price: 36054,
    img: "https://http2.mlstatic.com/D_Q_NP_778130-MLA80595012477_112024-F.webp",
    link: "https://www.mercadolibre.com.ar/set-juego-4-bowls-ensaladera-marinex-vidrio-linea-plus/up/MLAU2731799981"
  },
  {
    title: "Tabla para pizza",
    price: 14860,
    img: "https://http2.mlstatic.com/D_Q_NP_820381-MLA70535283313_072023-F.webp",
    link: "https://www.mercadolibre.com.ar/pizzera-premium-35cm-algarrobo-reforzado-tabla-para-pizza/up/MLAU311472277"
  },
  {
    title: "Bandeja para horno",
    price: 9204,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_858309-MLA85627617506_062025-F.webp",
    link: "https://www.mercadolibre.com.ar/bandeja-para-horno-fuente-placa-acero-antiadherente-cocina/up/MLAU3169487862"
  },
  {
    title: "Pizzera molde antiadherente x3",
    price: 18515,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_719666-MLA53901030254_022023-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1349432743-pizzera-molde-antiadherente-35cm-x-3-babymovil-_JM"
  }
];





// Export para que app.js pueda usarlo
window.gifts = gifts;