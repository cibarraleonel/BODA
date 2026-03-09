// Lista de regalos
// Cada ítem tiene: titulo, precio, imagen, link

const gifts = [
  {
    title: "Balanza digital",
    price: 17417,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_855640-MLA85651576357_062025-F.webp",
    link: "https://www.mercadolibre.com.ar/balanza-digital-de-cocina-madera-bambo-5kg-madera-5-kg/up/MLAU3222744536#polycard_client=search-desktop&search_layout=grid&position=22&type=product&tracking_id=de793704-9977-4084-8609-92d7106849ea&wid=MLA2102373246&sid=search"
  },
  //{
  //  title: "<s>Pava electrica</s> Reservado",
  //  price: 45559,
  //  img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00502100/00502191.jpg",
  //  link: "https://www.cotodigital.com.ar/sitios/cdigi/productos/pava-el%C3%A9ctrica-top-house-hhb1795d-1-7-l-vidrio/_/R-00502191-00502191-200"
  //},
  {
    title: "Microondas",
    price: 229499,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00536000/00536085.jpg",
    link: "https://www.cotodigital.com.ar/sitios/cdigi/productos/microondas-whirlpool-25-l-plata-wmg25bs/_/R-00536085-00536085-200"
  },
  {
    title: "Batidora de mano",
    price: 53999,
    img: "https://http2.mlstatic.com/D_Q_NP_685146-MLA99443802538_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/batidora-de-mano-bm8739a-con-box-blanco-atma/p/MLA45761468"
  },
  {
    title: "Mixer",
    price: 50789,
    img: "https://http2.mlstatic.com/D_Q_NP_856875-MLA74781978523_022024-F.webp",
    link: "https://www.mercadolibre.com.ar/mixer-liliana-rainbow-mix-ah10-negro/p/MLA18351018"
  },
  {
    title: "Lavarropas Samsung Inverter 6.5kg",
    price: 579599,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_831634-MLA74290394631_012024-F.webp",
    link: "https://www.mercadolibre.com.ar/lavarropas-samsung-ww65a4000ee-inverter-65kg-blanco-1000rpm/up/MLAU241425580"
  },
  {
    title: "Licuadora Liliana 1Lt",
    price: 50999,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00610300/00610324.jpg",
    link: "https://www.cotodigital.com.ar/sitios/cdigi/productos/licuadora-top-house-l-28-500-w-1-5-l-negro/_/R-00610324-00610324-200%3FDy%3D1&&idSucursal%3D200"
  },
  {
    title: "Cafetera Digital De Filtro",
    price: 78999,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_746249-MLA99451199974_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/cafetera-digital-de-filtro-automatica-con-timer-ca8182p-atma/p/MLA21239144"
  },
  //{
  //  title: "<s>Set toallones y toallas (marrón o gris)</s> Reservado",
  //  price: 24992,
  //  img: "https://http2.mlstatic.com/D_Q_NP_666514-MLA75104059586_032024-F.webp",
  //  link: "https://articulo.mercadolibre.com.ar/MLA-1113298065-juego-de-toalla-y-toallon-palette-500-gramos-grandes-pesados-_JM"
  //},
  {
    title: "Set manopla + repasadores + paño + agarradera (rayado)",
    price: 17450,
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
    title: "Juego de sábanas tamaño Queen (color arena o gris claro)",
    price: 38308,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_867579-MLA99506594576_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/jean-cartier-oxford-platinum-700-hq-juego-de-sabanas-queen-oxford-platinum-700-hq-arena-liso-240-cm-unidad-1/p/MLA49097726"
  },
  {
    title: "Velador Trípode x2",
    price: 42980,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_811120-MLA93971142667_102025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-930004189-velador-tripode-vintage-nordico-x2-_JM"
  },
  {
    title: "Acolchado Queen (beige o gris claro)",
    price: 53900,
    img: "https://acdn-us.mitiendanube.com/stores/382/262/products/img_1890-a3bc97b0711744891417581360116843-1024-1024.webp",
    link: "https://www.telas.com.ar/productos/edredon-queen-4-estaciones-beige-gris-claro/"
  },
  {
    title: "Colchón y Sommier Piero",
    price: 558892,
    img: "https://images.fravega.com/f300/cee64279427a776dd465b684aa401fc1.jpg.webp",
    link: "https://www.fravega.com/p/colchon-y-sommier-dos-plazas-piero-foam-espuma-alta-densidad-190-x-140-cm-22006849/"
  },
  {
    title: "Ventilador Liliana 65W",
    price: 32249,
    img: "https://www.megatone.net/images/Articulos/65/205/67/thumb/MKT1167LTA-1.webp",
    link: "https://www.megatone.net/producto/ventilador-turbo-vtf16p-16-65w-3-velocidades-liliana_MKT1167LTA/"
  },
  {
    title: "Sillas En Paraíso Macizo x4",
    price: 508000,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_686774-MLA54982177543_052023-F.webp",
    link: "https://www.mercadolibre.com.ar/combo-de-4-sillas-en-paraiso-macizo-colores-a-eleccion/up/MLAU310357693"
  },
  {
    title: "Tabla de planchar",
    price: 20706,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_905111-MLA76808116288_062024-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1694650402-tabla-plegable-para-planchar-de-mesa-con-posa-plancha-_JM"
  },
  {
    title: "Plancha",
    price: 29500,
    img: "https://http2.mlstatic.com/D_Q_NP_917300-MLA99981505103_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/plancha-seca-de-ropa-con-base-de-acero-inoxidable-winco-w-35/p/MLA33388394"
  },
  {
    title: "Cestos para ropa (gris)",
    price: 10800,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_770904-MLA79303516016_092024-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1145077418-cesto-canasto-ropa-sucia-plegable-impermeable-con-tapa-tela-_JM"
  },
  {
    title: "Caja organizadora GRIS x3",
    price: 10800,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_771876-MLA93499715036_102025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1908499246-set-x-3-canasto-caja-organizador-plastico-simil-rattan-chico-_JM"
  },
  {
    title: "Papeleras/Basureros",
    price: 10916,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_757196-MLA74311800194_022024-F.webp",
    link: "https://www.mercadolibre.com.ar/cesto-plastico-residuos-pedal-12lts-star/up/MLAU248275222"
  },
  {
    title: "Platos playos x6",
    price: 32997,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_812505-MLA98379460228_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x6-plato-playo-gourmet-ala-ancha-24-cm-porcelana-oxford/up/MLAU3560897559"
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
  //{
  //  title: "<s>Tazas de té x6</s> Reservado",
  //  price: 49892,
  //  img: "https://http2.mlstatic.com/D_NQ_NP_2X_675269-MLA95669068682_102025-F.webp",
  //  link: "https://www.mercadolibre.com.ar/taza-desayuno-y-plato-porcelana-gastronomia-kit-x-6-unidades/p/MLA28708447"
  //},
  //{
  //  title: "<s>Vasos x6</s> Reservado",
  //  price: 22171,
  //  img: "https://http2.mlstatic.com/D_Q_NP_707475-MLA95599998252_102025-F.webp",
  //  link: "https://www.mercadolibre.com.ar/set-x-12-vaso-vidrio-rigolleau-copon-gourmet-flint-450-ml-transparente/p/MLA57776307"
  //},
  {
    title: "Medio canasto Matero de Cuero",
    price: 49900,
    img: "https://acdn-us.mitiendanube.com/stores/001/104/123/products/1x1-canasta3x3negra-big-b2fadd74d0d4af99a217404962503183-1024-1024.webp",
    link: "https://www.cushe.com.ar/productos/medio-canasto-matero-de-cuero-con-sujetador/"
  }
  ,
  {
    title: "Jarra hervidor",
    price: 10100,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_762631-MLA94020509621_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/jarro-hervidor-07-lts-ml-ramos-10-cm-teflon-linea-siempra-color-negro/p/MLA26253243"
  },
  {
    title: "Olla antiadherente",
    price: 39123,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_691466-MLA99496683670_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/cacerola-de-aluminio-con-antiadherente-20-cm-daily-color-negro/p/MLA47451884"
  },
  {
    title: "Sartén antiadherente",
    price: 22943,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_612353-MLA95838103987_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/sarten-antiadherente-hudson-22cm-excelente-calidad-color-negro/p/MLA27437846"
  },
  {
    title: "Bífera antiadherente",
    price: 28057,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_916594-MLA98653081053_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/bifera-hudson-daily-antiadherente-26-cm-2-l/up/MLAU236144105#polycard_client=search-desktop&search_layout=grid&position=4&type=product&tracking_id=a96d0fb7-fd29-40bf-a737-57053d1db86c&wid=MLA1141180299&sid=search"
  },
  {
    title: "Set de espátulas/cucharones (acero inoxidable)",
    price: 23900,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_629981-MLA92802609928_092025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x5-utensilios-cocina-acero-inoxidable-cucharon-espatula/up/MLAU3444158830"
  },
  //{
  //  title: "<s>Frascos hermeticos  x6</s> Reservado",
  //  price: 24699,
  //  img: "https://http2.mlstatic.com/D_NQ_NP_2X_856144-MLA96307592080_102025-F.webp",
  //  link: "https://www.mercadolibre.com.ar/x-6-frascos-transparentes-gadnic-plastico-reforzado-blanco/p/MLA61441371"
  //},
  {
    title: "Especieros",
    price: 29999,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_836356-MLA81224486733_122024-F.webp",
    link: "https://www.mercadolibre.com.ar/raitot-especiero-negro-16-16/p/MLA44582605"
  },
  {
    title: "Set de tablas de madera",
    price: 18050,
    img: "https://http2.mlstatic.com/D_Q_NP_951241-MLA51491049370_092022-B.webp",
    link: "https://www.mercadolibre.com.ar/set-x3-tablas-para-picar-de-corte-madera-bambu-cocina/up/MLAU221898251"
  },
  {
    title: "Set de ensaladeras x4",
    price: 30662,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_683426-MLA82164758149_012025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-2004749938-set-juego-de-bowls-vidrio-sempre-_JM"
  },
  {
    title: "Tabla para pizza",
    price: 14860,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_731413-MLA81070621345_112024-F.webp",
    link: "https://www.mercadolibre.com.ar/tabla-pizzera-picar-cortar-servir-madera-bambu-33cm-filula-color-bambu-natural-tabla-redonda-diametro-33-cm/p/MLA44258486#polycard_client=search-desktop&search_layout=grid&position=12&type=product&tracking_id=d0f23fc7-8ade-47d1-aeb1-8de223894513&wid=MLA1463485577&sid=search"
  },
  {
    title: "Bandeja para horno",
    price: 9289,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_858309-MLA85627617506_062025-F.webp",
    link: "https://www.mercadolibre.com.ar/bandeja-para-horno-fuente-placa-acero-antiadherente-cocina/up/MLAU3169487862"
  },
  {
    title: "Pizzera molde antiadherente x3",
    price: 19490,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_719666-MLA53901030254_022023-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1349432743-pizzera-molde-antiadherente-35cm-x-3-babymovil-_JM"
  },
  {
    title: "Fuente de vidrio",
    price: 25354,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_821870-MLA100008250493_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/p/MLA27728340"
  },
  {
    title: "Organizador de ropa x3",
    price: 20499,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_732401-MLA105996204360_022026-F.webp",
    link: "https://www.mercadolibre.com.ar/contenedor-de-tela-plegable-organizador-canasto-bazar/up/MLAU3771013831?picker=true&quantity=1"
  }
  ];

// Export para que app.js pueda usarlo
window.gifts = gifts;
