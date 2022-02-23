const initialStories = [
    {
      img: require('./../img/pc1.jpg'),
      name: 'Millenium Machine 1 Mini Soraka',
      url:'https://www.pccomponentes.com/millenium-machine-1-mini-soraka-amd-ryzen-5-5600x-16gb-1tb-480gb-ssd-rtx-3060ti',
      caract: 'AMD Ryzen 5 5600X/16GB/1TB+480GB SSD/RTX 3060Ti',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 1601,
      points: 4,
      ObjectID: 0,
    },
    {
      img: require('./../img/pc2.jpg'),
      name: 'PcCom Gold',
      url:'https://www.pccomponentes.com/pccom-gold-amd-ryzen-5-5600x-16gb-1tbssd-rtx3060ti',
      caract: 'AMD Ryzen 5 5600X/16GB/1TBSSD/RTX3060Ti',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 1709,
      points: 5,
      ObjectID: 1,
    },
    {
      img: require('./../img/pc3.jpg'),
      name: 'PcCom Bronze SP',
      url:'https://www.pccomponentes.com/pccom-bronze-sp-intel-core-i5-10400f-8gb-480gbssd-gtx1050ti-windows-10-home',
      caract: 'Intel Core i5-10400F/8GB/480GBSSD/GTX1050Ti',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 792,
      points: 3,
      ObjectID: 2,
    },
    {
      img: require('./../img/pc4.jpg'),
      name: 'PcVIP Crusher',
      url:'https://www.pccomponentes.com/pcvip-crusher-intel-core-i5-10400f-16gb-1tb-500gb-ssd-gtx1050ti',
      caract: 'Intel Core i5 10400F/16GB/1TB + 500GB SSD/GTX1050Ti',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 820,
      points: 2,
      ObjectID: 3,
    },
    {
      img: require('./../img/pc5.jpg'),
      name: 'PcCom Silver Ultra',
      url:'https://www.pccomponentes.com/pccom-silver-ultra-intel-core-i7-11700-16gb-1tb-500gb-ssd-rtx2060',
      caract: 'Intel Core i7-11700/16GB/1TB + 500GB SSD/RTX2060',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 1442,
      points: 5,
      ObjectID: 4,
    },
    {
      img: require('./../img/pc6.jpg'),
      name: 'Zone Evil Silver76',
      url:'https://www.pccomponentes.com/zone-evil-silver76-intel-core-i5-11400f-16gb-1tb-500gb-ssd-gtx-1650',
      caract: 'Intel Core i5-11400F/16GB/1TB+500GB SSD/GTX 1650',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 1046,
      points: 4,
      ObjectID: 5,
    },
    {
      img: require('./../img/pc7.jpg'),
      name: 'Legion-Q Tracker Lambda',
      url:'https://www.pccomponentes.com/legion-q-tracker-lambda-intel-core-i5-10400-16gb-1tb-250gb-ssd-gt-1030',
      caract: 'Intel Core i5-10400/16GB/1TB+250GB SSD/GT 1030',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 689,
      points: 4,
      ObjectID: 6,
    },
  
  
  
    {
      img: require('./../img/pc8.jpg'),
      name: 'MSI P50 Creator',
      url:'https://www.pccomponentes.com/msi-creator-p100x-11te-636eu-intel-core-i7-11700k-64gb-2tb-1tb-ssd-rtx-3080',
      caract: 'Intel Core i5-11400/16GB/1TB + 512GB SSD/RTX 3060',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 1657,
      points: 4,
      ObjectID: 7,
    },
    {
      img: require('./../img/pc9.jpg'),
      name: 'MSI Creator P100X',
      url:'https://www.pccomponentes.com/legion-q-tracker-lambda-intel-core-i5-10400-16gb-1tb-250gb-ssd-gt-1030',
      caract: 'Intel Core i7-11700K/64GB/2TB+1TB SSD/RTX 3080',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 3196,
      points: 5,
      ObjectID: 8,
    },
    {
      img: require('./../img/pc10.jpg'),
      name: 'Zone Evil Silver82',
      url:'https://www.pccomponentes.com/zone-evil-silver82-intel-core-i5-11400-32gb-1tb-500gb-ssd-rtx-3060ti',
      caract: 'Intel Core i5-11400/32GB/1TB+500GB SSD/RTX 3060Ti',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 1731,
      points: 3,
      ObjectID: 9,
    },
    {
      img: require('./../img/pc11.jpg'),
      name: 'Legion-Q Oak7 WaterForce',
      url:'https://www.pccomponentes.com/legion-q-oak7-waterforce-intel-core-i7-11700f-32gb-2tb-1tb-ssd-rtx-3060',
      caract: 'Intel Core i7-11700F/32GB/2TB+1TB SSD/RTX 3060',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 1889,
      points: 2,
      ObjectID: 10,
    },
    {
      img: require('./../img/pc12.jpg'),
      name: 'Zone Evil Diamond89ROG',
      url:'https://www.pccomponentes.com/zone-evil-diamond89rog-intel-core-i9-10900f-32gb-1tb-500gb-ssd-rtx-3060ti',
      caract: 'Intel Core i9-10900F/32GB/1TB+500GB SSD/RTX 3060Ti',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 2070,
      points: 5,
      ObjectID: 11,
    },
    {
      img: require('./../img/pc13.jpg'),
      name: 'Dell Vostro 3681',
      url:'https://www.pccomponentes.com/dell-vostro-3681-intel-core-i5-10400-8gb-256gb-ssd ',
      caract: 'Intel Core i5-10400/8GB/256GB SSD',
      text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
      price: 580,
      points: 1,
      ObjectID: 12,
    },
  ];



const getAsyncStories = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({data: {stories: initialStories} });
  }, 2000);
});

const withError = (promise, probError = 0.5) => {
  const isError = Math.random() <= probError;
  return  promise.then(result => {
    if (isError){
      throw new Error("Error!");
    }
    return result;
  })
}

export { getAsyncStories, withError };