// Lista de regalos
// Cada ítem tiene: titulo, precio, imagen, link

const gifts = [
  {
    title: "Balanza digital",
    price: 22484,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00477800/00477860.jpg",
    link: "https://articulo.mercadolibre.com.ar/MLA-873094922-balanza-digital-de-cocina-top-house-hasta-3-kg-_JM?searchVariation=72380545588#polycard_client=search-nordic&searchVariation=72380545588&search_layout=grid&position=1&type=item&tracking_id=f552306f-19a3-4569-8f42-45d57f2680fd"
  },
  {
    title: "Pava electrica",
    price: 37519,
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
    price: 46233,
    img: "https://http2.mlstatic.com/D_Q_NP_856875-MLA74781978523_022024-F.webp",
    link: "https://www.mercadolibre.com.ar/mixer-liliana-rainbow-mix-ah10-negro/p/MLA18351018"
  },
  {
    title:"Licuadora Liliana 1Lt",
    price: 46999,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_855543-MLA100034007339_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/licuadora-liliana-whitenblack-albw10-capacidad-1-lt-color-blanco/p/MLA28034654?pdp_filters=SHIPPING_ORIGIN%3A10215068%7Cprice%3A*-75000#polycard_client=search-nordic&search_layout=stack&position=4&type=product&tracking_id=62ecc425-b351-453c-9a44-f1529c8ebda0&wid=MLA2655755450&sid=search"
  },
  {
    title: "Secador de pelo",
    price: 19430,
    img: "https://http2.mlstatic.com/D_Q_NP_785666-MLA99464312694_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/secador-de-pelo-aire-frio-calor-2000w-kanji-beauty-color-negro/p/MLA42519614"
  },
  {
    title: "Cafetera Digital De Filtro",
    price: 64468,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_746249-MLA99451199974_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/cafetera-digital-de-filtro-automatica-con-timer-ca8182p-atma/p/MLA21239144?pdp_filters=price%3A25000-80000#polycard_client=search-nordic&search_layout=stack&position=1&type=product&tracking_id=2ae2ae5d-ea9a-4bac-a89d-3b5cb0de3f55&wid=MLA1395481987&sid=search"

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
    price: 48300,
    img: "https://http2.mlstatic.com/D_Q_NP_927635-MLA99991272635_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/juego-de-sabanas-king-premium-hotelera-700h-tacto-suave-color-oxford-platinum-700-hq-blanco-diseno-de-la-tela-lisa/p/MLA49823735"
  },
  {
    title: "Velador Trípode x2",
    price: 42980,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_811120-MLA93971142667_102025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-930004189-velador-tripode-vintage-nordico-x2-_JM?attributes=STRUCTURE_COLOR%3AUGlubw%3D%3D%2CSCREEN_COLOR%3AYXJwaWxsZXJh#origin=share&sid=share&action=whatsapp"
  },
  {
    title: "Acolchado / duvet King (beige)",
    price: 50990,
    img: "https://acdn-us.mitiendanube.com/stores/001/487/825/products/img_1307-50ac7195560272589517655071507826-1024-1024.webp",
    link: "https://www.gangahome.com.ar/productos/acolchado-4-estaciones-california-king-beige-gh-0012-k-bg-ls4gf/"
  },
  {
    title: "Sillas En Paraíso Macizo x4",
    price: 484000,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_706559-MLA69210402707_052023-F.webp",
    link: "https://www.mercadolibre.com.ar/combo-de-4-sillas-en-paraiso-macizo-colores-a-eleccion/up/MLAU310357693#polycard_client=search-nordic&search_layout=grid&position=19&type=product&tracking_id=75b87aa7-07f1-4ab8-8dd3-197c54fc3381&wid=MLA928669715&sid=search"
  },
  {
    title: "Tabla de planchar",
    price: 23195,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_755882-MLA83771621030_042025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1816196586-tabla-de-planchar-para-mesa-con-patas-plegables-_JM"
  },
  {
    title: "Plancha",
    price: 24437,
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
    price: 10800,
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
    price: 13198,
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
    price: 21833,
    img: "https://http2.mlstatic.com/D_Q_NP_752493-MLA99575030790_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/jarro-hervidor-hudson-14-cm-antiadherente-color-negro/p/MLA26253215"
  },
  {
    title: "Olla antiadherente",
    price: 33423,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_691466-MLA99496683670_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/cacerola-de-aluminio-con-antiadherente-20-cm-daily-color-negro/p/MLA47451884"
  },
  {
    title: "Sartén antiadherente",
    price: 18341,
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
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_629981-MLA92802609928_092025-F.webp",
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
    price: 18050,
    img: "https://acdn-us.mitiendanube.com/stores/001/487/825/products/apc_9694-89dc95164cf390e05417338538623954-1024-1024.webp",
    link: "https://www.mercadolibre.com.ar/set-x3-tablas-para-picar-de-corte-madera-bambu-cocina/up/MLAU221898251#polycard_client=search-nordic&search_layout=grid&position=24&type=product&tracking_id=de242958-d007-438a-8a54-0f67b7b9526b&wid=MLA1166154900&sid=search"
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
    price: 9989,
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