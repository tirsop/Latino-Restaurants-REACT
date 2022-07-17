import mongoose from 'mongoose';
import 'dotenv/config';
import Restaurant from './models/restaurant.js';

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl)
  .then(() => console.log(`--------------console.log\nDatabase connected\n`))
  .catch(err => {
    console.log(`--------------console.log\nMONGO CONNECTION ERROR:`)
    console.log(err + `\n`)
  })

const addRestaurant = async () => {
  const restTotal = await Restaurant.count();
  await Restaurant.deleteMany({});
  console.log(`${restTotal} restaurants deleted.`);
  console.log("Creating new restaurants...");
  await Restaurant.insertMany([
    {
      name: 'Miguel y Juani',
      location: 'Shinjuku',
      country: 'spain',
      url: 'https://www.google.com/maps/place/%E3%83%9F%E3%82%B2%E3%83%AB%E3%83%95%E3%82%A2%E3%83%8B+%E6%96%B0%E5%AE%BF%E3%82%BF%E3%82%AB%E3%82%B7%E3%83%9E%E3%83%A4%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%E5%BA%97/@35.6874274,139.7023764,15z/data=!4m5!3m4!1s0x0:0xe530a241f7a00b9a!8m2!3d35.6874274!4d139.7023764',
      image: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/60113/60113285.jpg?token=0745494&api=v2',
      geometry: {
        type: "Point",
        coordinates: [
          139.7023764,
          35.6874274,
        ]
      },
    },
    {
      name: 'EL ROSSELLO',
      location: 'Meguro',
      country: 'spain',
      url: 'https://goo.gl/maps/BfMftRk9ADCWwxLH8',
      image: 'https://tabelog.com/imgview/original?id=r0234379775327',
      geometry: {
        type: "Point",
        coordinates: [
          139.6840775,
          35.6293508,
        ]
      },
    },
    {
      name: 'Amets',
      location: 'Asakusa',
      country: 'spain',
      url: 'https://goo.gl/maps/qZnwv9aaip1nQdb89',
      image: 'https://tabelog.com/imgview/original?id=r9861131790870',
      geometry: {
        type: "Point",
        coordinates: [
          139.7903485,
          35.7112631,
        ]
      },
    },
    {
      name: 'El Chateo',
      location: 'Ginza',
      country: 'spain',
      url: 'https://g.page/elchateo-ginza?share',
      image: 'https://tabelog.com/imgview/original?id=r5842889524483',
      geometry: {
        type: "Point",
        coordinates: [
          139.7647241,
          35.6730715,
        ]
      },
    },
    {
      name: 'La Pesquera MARISQUERIA',
      location: 'Otemachi',
      country: 'spain',
      url: 'https://g.page/lapesqueramarisqueria?share',
      image: 'https://tabelog.com/imgview/original?id=r93948142018369',
      geometry: {
        type: "Point",
        coordinates: [
          139.7653975,
          35.6855124,
        ]
      },
    },
    {
      name: 'Bar Portillo de sal y amor',
      location: 'Naka-Meguro',
      country: 'spain',
      url: 'https://g.page/Bar-Portillo-Nakameguro?share',
      image: 'https://tabelog.com/imgview/original?id=r53941147584351',
      geometry: {
        type: "Point",
        coordinates: [
          139.6976832,
          35.6471239,
        ]
      },
    },
    {
      name: 'La Coquina cervecería',
      location: 'Shibuya',
      country: 'spain',
      url: 'https://g.page/LaCoquina?share',
      image: 'https://tabelog.com/imgview/original?id=r66711129935433',
      geometry: {
        type: "Point",
        coordinates: [
          139.7022323,
          35.6583189,
        ]
      },
    },
    {
      name: 'La Cabina',
      location: 'Shibuya',
      country: 'mexico',
      url: 'https://g.page/lacabinatokyo?share',
      image: 'https://tabelog.com/imgview/original?id=r52706115508974',
      geometry: {
        type: "Point",
        coordinates: [
          139.6956621,
          35.6621231,
        ]
      },
    },
    {
      name: 'Frijoles',
      location: 'Daikanyama',
      country: 'mexico',
      url: 'https://goo.gl/maps/7uourPg8ednRXFw98',
      image: 'https://tabelog.com/imgview/original?id=r99406119376673',
      geometry: {
        type: "Point",
        coordinates: [
          139.706706,
          35.6486483,
        ]
      },
    },
    {
      name: 'Bépocah',
      location: 'Harayuku',
      country: 'peru',
      url: 'https://g.page/bepocah?share',
      image: 'https://tabelog.com/imgview/original?id=r5077385697241',
      geometry: {
        type: "Point",
        coordinates: [
          139.7101082,
          35.6724984,
        ]
      },
    },
    {
      name: 'Medellin Yokohama',
      location: 'Yokohama',
      country: 'colombia',
      url: 'https://goo.gl/maps/UhfhWReTQbooS53PA',
      image: 'https://tabelog.com/imgview/original?id=r5706365472998',
      geometry: {
        type: "Point",
        coordinates: [
          139.5596572,
          35.444148,
        ]
      },
    },
    {
      name: 'Mi Choripan',
      location: 'Yoyogi',
      country: 'argentina',
      url: 'https://goo.gl/maps/ijZRJcMp4LRLi1jX6',
      image: 'https://tabelog.com/imgview/original?id=r0905886571645',
      geometry: {
        type: "Point",
        coordinates: [
          139.6844185,
          35.6649908,
        ]
      },
    },
    {
      name: 'Casa De Sarasa',
      location: 'Shibuya',
      country: 'mexico',
      url: 'https://www.google.com/maps/place/Casa+De+Sarasa/@35.6564443,139.6982957,16z/data=!3m1!5s0x60188ca9817f8879:0x6df0fa11620df23d!4m9!1m2!2m1!1smexican+restaurant!3m5!1s0x60188ca9819c5ca7:0xa8c296df8d863cb!8m2!3d35.660224!4d139.696557!15sChJtZXhpY2FuIHJlc3RhdXJhbnRaFCISbWV4aWNhbiByZXN0YXVyYW50kgESbWV4aWNhbl9yZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJwTTI4emRuaG5SUkFC',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/147310/320x320_rect_147310388.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.6982957, 35.6564443]
      },
    },
    {
      name: '月島スペインクラブ',
      location: 'Tsukishima',
      country: 'spain',
      url: 'https://www.google.com/maps/place/%E6%9C%88%E5%B3%B6%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%A9%E3%83%96/@35.6658177,139.7823354,15z/data=!4m5!3m4!1s0x0:0xf2f5f0bccd39c79a!8m2!3d35.6658389!4d139.782303',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/90457/320x320_rect_90457895.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.7823354, 35.6658177]
      },
    },
    {
      name: 'Zurriola',
      location: 'Ginza',
      country: 'spain',
      url: 'https://www.google.com/maps/place/Zurriola/@35.6701352,139.7606705,17z/data=!3m2!4b1!5s0x60188be61c350abb:0x1fa7ec239da6c73!4m5!3m4!1s0x60188be61c479097:0x787fb2d183033ddf!8m2!3d35.6701309!4d139.7628592',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/136499/320x320_rect_136499820.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.7594689, 35.6701352]
      },
    },
    {
      name: 'Casa de Eduardo',
      location: 'Shin-Nakano',
      country: 'chile',
      url: 'https://www.google.com/maps/place/Casa+de+Eduardo/@35.6980415,139.6679935,17z/data=!3m1!4b1!4m5!3m4!1s0x6018f2ea028fffff:0xf903d0a79866987e!8m2!3d35.6980372!4d139.6701822',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/159581/320x320_rect_159581608.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.6679935, 35.6980415]
      },
    },
    {
      name: 'Bar Bodeguita',
      location: 'Shimo-Kitazawa',
      country: 'cuba',
      url: 'https://www.google.com/maps/place/Bar+Bodeguita+Cuban+Salsa+Spot/@35.655868,139.6673625,15z/data=!4m5!3m4!1s0x0:0x3fa2ef9d0ad01af0!8m2!3d35.655868!4d139.6673625',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/48362/320x320_rect_48362408.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.6673625, 35.655868]
      },
    },
    {
      name: 'El Pescador',
      location: 'Jiyugaoka',
      country: 'spain',
      url: 'https://www.google.com/maps/place/El+Pescador/@35.6080355,139.6704423,15z/data=!4m5!3m4!1s0x0:0x76654e5f3f903b3!8m2!3d35.6080355!4d139.6704423',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/112538/320x320_rect_112538135.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.6704423, 35.6080355]
      },
    },
    {
      name: 'La Jolla',
      location: 'Hiro-o',
      country: 'mexico',
      url: 'https://www.google.com/maps/place/La+Jolla/@35.6501075,139.7189266,17.16z/data=!3m1!5s0x60188b6d45cc8869:0x947119974a26765c!4m5!3m4!1s0x60188b6d46856c55:0x9b06daa42a680def!8m2!3d35.6500752!4d139.7208022',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/34223/320x320_rect_34223570.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.7189266, 35.6501075]
      },
    },
    {
      name: 'anchoa',
      location: 'Kamakura',
      country: 'spain',
      url: 'https://www.google.com/maps/place/anchoa+%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A7%E3%82%A2/@35.3176037,139.5500623,15z/data=!4m5!3m4!1s0x0:0x812384135dde0b5d!8m2!3d35.3176029!4d139.5500655',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/166773/320x320_rect_0137d9c06a201d354f77cae33c2239a8.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.5500623, 35.3176037]
      },
    },
    {
      name: 'Keimi',
      location: 'Tsuruma',
      country: 'peru',
      url: 'https://www.google.com/maps/place/KEIMI/@35.4923262,139.4391514,15z/data=!4m12!1m6!3m5!1s0x0:0x9fe5b0a4ff11434a!2sKEIMI!8m2!3d35.4922925!4d139.4479307!3m4!1s0x0:0x9fe5b0a4ff11434a!8m2!3d35.4922925!4d139.4479307',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/33646/320x320_rect_33646638.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.4391514, 35.4923262]
      },
    },
    {
      name: 'Fonda Sant Jordi',
      location: 'Ebisu',
      country: 'spain',
      url: 'https://www.google.com/maps/place/Fonda+Sant+Jordi/@35.6467506,139.71214,15z/data=!4m5!3m4!1s0x0:0xb3f2c36e60cfada4!8m2!3d35.6467506!4d139.71214',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/135717/320x320_rect_135717900.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.71214, 35.6467506]
      },
    },
    {
      name: 'Sant Pau',
      location: 'Nagatacho',
      country: 'spain',
      url: 'https://www.google.com/maps/place/Sant+Pau/@35.6791162,139.7408068,15z/data=!4m2!3m1!1s0x0:0xcd9af6901ee10dcf?sa=X&ved=2ahUKEwjc0fCAxv_4AhU0pVYBHRRjD_UQ_BJ6BAhQEAU',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/118025/320x320_rect_118025262.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.7408068, 35.6791162]
      },
    },
    {
      name: 'Estación',
      location: 'Iidabashi',
      country: 'spain',
      url: 'https://www.google.com/maps/place/Estaci%C3%B3n+%E3%82%A8%E3%82%B9%E3%82%BF%E3%82%B7%E3%82%AA%E3%83%B3/@35.7006875,139.7406419,15z/data=!4m5!3m4!1s0x0:0xd60c5dd865342aea!8m2!3d35.7007097!4d139.740632',
      image: 'https://tblg.k-img.com/restaurant/images/Rvw/50083/320x320_rect_50083630.jpg',
      geometry: {
        type: "Point",
        coordinates: [139.7406419, 35.7006875]
      },
    },
    // {
    //   name: '',
    //   location: '',
    //   country: '',
    //   url: '',
    //   image: '',
    //   geometry: {
    //     type: "Point",
    //     coordinates: [,]
    //   },
    // },
  ]);
};

addRestaurant()
  .then(() => {
    return Restaurant.count();
  })
  .then((restTotal) => {
    mongoose.connection.close();
    console.log(`${restTotal} restaurants created!`);
  })
  .catch(e => {
    console.log("ERROR: ", e);
  })

