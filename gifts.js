// Lista de regalos
// Cada ítem tiene: titulo, precio, imagen, link

const gifts = [
  {
    title: "Alfombra de baño",
    price: 7799,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_670541-MLA100120744611_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/alfombra-de-bano-antideslizante-memory-foam-suave-lavable-y-absorbente-diseno-liso-y-confortable-ideal-para-bano-y-ducha-levys-bazar-color-beige/p/MLA52899740#polycard_client=search-nordic&search_layout=grid&position=8&type=product&tracking_id=cb8ea9eb-bc46-4784-b05a-3e6c2338dd4d&wid=MLA2206406626&sid=search"
  },
  {
    title: "Par de toallones grandes (gris o beige) x2",
    price: 14099,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_948073-MLA89445200867_082025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-701274738-set-x-2-toallas-grandes-lisas-100-algodon-absorbentes-_JM?searchVariation=89581492103#polycard_client=search-nordic&searchVariation=89581492103&search_layout=grid&position=39&type=item&tracking_id=310ff819-a7eb-4d83-bbaf-b096a79567f4"
  },
  {
    title: "Repasador x3 (beige, gris plata, negro, visón)",
    price: 7990,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_886292-MLA76400963180_052024-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1891265972-pack-3-repasador-de-cocina-nido-de-abeja-liso-100-algodon-_JM?searchVariation=184459373105#reviews"
  },
  {
    title: "Manopla cocina (beige, gris, negro)",
    price: 6375,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_668942-MLA98413767494_112025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-2583854894-manopla-cocina-agarradera-horno-manoplas-para-hornos-_JM?attributes=COLOR_SECONDARY_COLOR%3AVmVyZGU%3D&quantity=1&picker=true&searchVariation=193183931219"
  },
  {
    title: "Mantel (natural)",
    price: 10239,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_683099-MLA51276401395_082022-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-643555938-mantel-ecocuero-cuerina-250-x-140-mts-directo-de-fabrica-_JM?attributes=COLOR_SECONDARY_COLOR%3ATmF0dXJhbA%3D%3D&quantity=1&picker=true&searchVariation=61533695301"
  },
  {
    title: "Jarra hervidor",
    price: 5707,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_965080-MLA91549058192_092025-F.webp",
    link: "https://www.mercadolibre.com.ar/jarro-aluminio-n12-hervidor-capacidad-12-litros/up/MLAU282363572#polycard_client=search-nordic&search_layout=grid&position=28&type=product&tracking_id=19095e9f-2377-4312-90b7-33e2a40f6b09&wid=MLA793961875&sid=search"
  },
  {
    title: "Bandeja para horno",
    price: 9204,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_858309-MLA85627617506_062025-F.webp",
    link: "https://www.mercadolibre.com.ar/bandeja-para-horno-fuente-placa-acero-antiadherente-cocina/up/MLAU3169487862#polycard_client=search-nordic&search_layout=stack&position=12&type=product&tracking_id=0ccd3544-08e2-4c85-9df6-42bd458a1302&wid=MLA1496049121&sid=search"
  },
  {
    title: "Tablas de picar de madera",
    price: 5999,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_835018-MLA47497003252_092021-F.webp",
    link: "https://www.mercadolibre.com.ar/tabla-20x35-madera-asado-picar-cortar-excelente-calidad/up/MLAU302274432#polycard_client=search-nordic&search_layout=grid&position=44&type=product&tracking_id=33ce4d6b-371f-4ecc-a054-a4bdac6b6898&wid=MLA886119865&sid=search"
  },
  {
    title: "Cuchillo de cocina",
    price: 6318,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_756060-MLA97654164048_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/cuchillo-para-carne-pescado-cocina-6-tramontina-22902006-n6-acero-inoxidable-mango-madera/p/MLA27663245#polycard_client=search-nordic&search_layout=grid&position=24&type=product&tracking_id=f94a4e4f-e688-4ca8-b708-75ce4b51ef91&wid=MLA1546547413&sid=search"
  },
  {
    title: "Broches cierra bolsas",
    price: 3499,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_605647-MLA99151639396_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/broches-cierre-hermetico-bolsas-mini-clips-cocina-comidas-x5/up/MLAU3388375359#polycard_client=search-nordic&search_layout=grid&position=9&type=product&tracking_id=e9d45656-06ba-41bf-928a-e59b549d0dc8&wid=MLA2305555630&sid=search"
  },
  {
    title: "Set de ensaladeras",
    price: 3800,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_643969-MLA99601900670_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/bowl-ensaladera-compotera-recipiente-vidrio-rigolleau-17cm/p/MLA28113718#reviews"
  },
  {
    title: "Balanza digital",
    price: 4774,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_843016-MLA95941047347_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/balanza-de-cocina-digital-sq-cozinha-sf-400-pesa-hasta-5kg-blanco/p/MLA15462295#polycard_client=search_best-seller&tracking_id=2876886d-be19-4b61-bdd2-a18acecd2aa9&wid=MLA1585512855&sid=search"
  },
  {
    title: "Contenedores herméticos",
    price: 11875,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_618701-MLA92592449911_092025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1998907080-juego-set-x-5-tapers-contenedores-apto-alimentos-2litros-_JM?searchVariation=182791385694#reviews"
  },
  {
    title: "Platos playos",
    price: 14999,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_993049-MLA93831865623_092025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x6-juego-platos-playo-20cm-carol-vidrio-opal-premium/up/MLAU3046411263#polycard_client=search-nordic&search_layout=grid&position=5&type=product&tracking_id=2b101f99-6613-4230-95e5-990e686d996d&wid=MLA2024357608&sid=search"
  },
  {
    title: "Cuchillos",
    price: 3957,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_969862-MLA72016433022_102023-F.webp",
    link: "https://www.mercadolibre.com.ar/set-cubiertos-x3-cuchillos-de-mesa-mango-madera-cocina/up/MLAU260889702#polycard_client=search-nordic&search_layout=grid&position=12&type=product&tracking_id=163b8a0d-ade6-4c52-92c8-fd14043a7786&wid=MLA1527081952&sid=search"
  },
  {
    title: "Tenedores",
    price: 4399,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_829668-MLA81187769413_122024-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1464083773-set-cubiertos-x3-tenedor-de-mesa-mango-madera-cocina-asado-_JM?searchVariation=186304944825#polycard_client=search-nordic&searchVariation=186304944825&search_layout=grid&position=39&type=item&tracking_id=163b8a0d-ade6-4c52-92c8-fd14043a7786"
  },
  {
    title: "Cucharas",
    price: 3647,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_906595-MLA99627195926_122025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-3-cucharita-tramontina-dynamic-mango-madera/p/MLA37283392#reviews"
  },
  {
    title: "Cucharitas",
    price: 3908,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_795367-MLA74062887755_012024-F.webp",
    link: "https://www.mercadolibre.com.ar/cuchara-de-cafe-tramontina-maresias-acero-inoxidable-x3/up/MLAU247958676#polycard_client=search-nordic&search_layout=grid&position=34&type=product&tracking_id=ec2e6feb-21a8-48a7-9eb6-dba56d21fa0a&wid=MLA1634877282&sid=search"
  },
  {
    title: "Papeleras/Basureros",
    price: 11151,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_757196-MLA74311800194_022024-F.webp",
    link: "https://www.mercadolibre.com.ar/cesto-plastico-residuos-pedal-12lts-star/up/MLAU248275222#polycard_client=search-nordic&search_layout=grid&position=2&type=product&tracking_id=838140a4-6521-47a0-b2d4-d0d90c01b467&wid=MLA1641732072&sid=search"
  },
  {
    title: "Tabla de planchar",
    price: 19020,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_755882-MLA83771621030_042025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1816196586-tabla-de-planchar-para-mesa-con-patas-plegables-_JM?searchVariation=183228588147#polycard_client=search-nordic&searchVariation=183228588147&search_layout=grid&position=5&type=item&tracking_id=c049308d-b871-4711-b5be-d77af471df34"
  },
  {
    title: "Cestos para ropa",
    price: 12023,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_667512-MLA76272749996_052024-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1778201668-cesto-canasto-ropa-sucia-tela-impermeable-plegable-c-manija-_JM?searchVariation=180519390184#polycard_client=search-nordic&searchVariation=180519390184&search_layout=grid&position=14&type=item&tracking_id=1bf01c98-dcc9-4a51-b33d-1a442479dda4"
  },
  {
    title: "Caja organizadora GRIS x3",
    price: 11400,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_771876-MLA93499715036_102025-F.webp",
    link: "https://articulo.mercadolibre.com.ar/MLA-1908499246-set-x-3-canasto-caja-organizador-plastico-simil-rattan-chico-_JM?attributes=COLOR_SECONDARY_COLOR%3AR3Jpcw%3D%3D&picker=true&searchVariation=181640152756&quantity=1"
  },
  {
    title: "Organizador ducha",
    price: 4508,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_664370-MLA86606976931_062025-F.webp",
    link: "https://www.mercadolibre.com.ar/estante-repisa-organizador-ducha-bano-esquinero-adhesivo/up/MLAU3064254456#reviews"
  },
  {
    title: "Bolsa al vacío",
    price: 10119,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_601744-MLA95689079106_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/kit-x4-bolsas-al-vacio-gadnic-blv1-guarda-ropa-aspiradora-espacio-40-x-60-cm/p/MLA38659582#reviews"
  },
  {
    title: "Olla antiadherente",
    price: 33156,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_691466-MLA99496683670_112025-F.webp",
    link: "https://www.mercadolibre.com.ar/cacerola-de-aluminio-con-antiadherente-20-cm-daily-color-negro/p/MLA47451884#polycard_client=search_best-seller&tracking_id=77e96498-480c-4b89-97e8-c91e669e5bcb&wid=MLA2052536476&sid=search"
  },
  {
    title: "Sartén antiadherente",
    price: 18968,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_612353-MLA95838103987_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/sarten-antiadherente-hudson-22cm-excelente-calidad-color-negro/p/MLA27437846?pdp_filters=item_id:MLA1557150922#reviews"
  },
  {
    title: "Bífera antiadherente",
    price: 22909,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_788797-MLA95398150138_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/bifera-de-aluminio-cantiadherente-26x26cm-color-negro/p/MLA47599503#polycard_client=search-nordic&search_layout=grid&position=13&type=product&tracking_id=e62e51f2-bc0b-4f27-a82c-8bfb8860b15e&wid=MLA2104823780&sid=search"
  },
  {
    title: "Set de espátulas/cucharones (madera/bambú o acero)",
    price: 22950,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_629981-MLA92802609928_092025-F.webp",
    link: "https://www.mercadolibre.com.ar/set-x5-utensilios-cocina-acero-inoxidable-cucharon-espatula/up/MLAU3444158830#polycard_client=search-nordic&search_layout=grid&position=5&type=product&tracking_id=f8ea349c-08cc-4418-96a2-dceefb407856&wid=MLA2389737092&sid=search"
  },
  {
    title: "Frascos herméticos x3 o x6",
    price: 26749,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_856144-MLA96307592080_102025-F.webp",
    link: "https://www.mercadolibre.com.ar/x-6-frascos-transparentes-gadnic-plastico-reforzado-blanco/p/MLA61441371#polycard_client=search-nordic&search_layout=grid&position=21&type=product&tracking_id=5fd89162-0e48-4b61-b1c0-0e41c538d81a&wid=MLA2519369888&sid=search"
  },
  {
    title: "Especieros",
    price: 27899,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_836356-MLA81224486733_122024-F.webp",
    link: "https://www.mercadolibre.com.ar/raitot-especiero-negro-16-16/p/MLA44582605?product_trigger_id=MLA42513648&picker=true&quantity=1"
  },
  {
    title: "Pava eléctrica",
    price: 40199,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/large/00502100/00502191.jpg",
    link: "https://www.cotodigital.com.ar/sitios/cdigi/productos/pava-el%C3%A9ctrica-top-house-hhb1795d-1-7-l-vidrio/_/R-00502191-00502191-200"
  }
];



// Export para que app.js pueda usarlo
window.gifts = gifts;