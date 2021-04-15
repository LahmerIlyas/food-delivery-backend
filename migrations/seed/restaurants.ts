import { Restaurant } from '../../src/database/entities/Restaurant';

const restaurants = [
  {
    name: 'Burger King',
    description: 'Burger King (BK) is an American multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain. After Insta-Burger King ran into financial difficulties in 1954, its two Miami-based franchisees David Edgerton and James McLamore purchased the company and renamed it "Burger King". Over the next half-century, the company changed hands four times, with its third set of owners, a partnership of TPG Capital, Bain Capital, and Goldman Sachs Capital Partners, taking it public in 2002. In late-2010, 3G Capital of Brazil acquired a majority stake in the company, in a deal valued at US$3.26 billion. The new owners promptly initiated a restructuring of the company to reverse its fortunes. 3G, along with partner Berkshire Hathaway, eventually merged the company with the Canadian-based doughnut chain Tim Hortons, under the auspices of a new Canadian-based parent company named Restaurant Brands International.',
    address: 'Boulevard El Fidaiyine, Boufarik',
    phone_number: '0553 17 79 35',
    delivery_duration: 45,
    delivery_cost: 400,
    logo: {
      alt: 'logo-burger-king',
      mime_type: 'image/png',
      name: 'logo-burger-king.png',
      path: 'logo-burger-king.png',
      size: 2400
    },
    cover: {
      alt: 'cover-burger-king',
      mime_type: 'image/jpeg',
      name: 'cover-burger-king.jpeg',
      path: 'cover-burger-king.jpeg',
      size: 2400
    },
    location: {
      type: 'Point',
      coordinates: [50.9416, 1.8374]
    },
    meals: [
      {

      }
    ],
  },
  {
    name: 'Carrows',
    description: 'Carrows is a subsidiary chain of Shari\'s Cafe & Pies and casual dining restaurants that serve breakfast and lunch/dinner in California, United States. As of June 25, 2019, the chain operates 7 restaurants in California',
    address: 'Carrows Restaurants, 2271 S Atlantic Blvd, Monterey Park, CA 91754, United States',
    phone_number: '0553 17 79 35',
    delivery_duration: 45,
    delivery_cost: 400,
    logo: {
      alt: 'logo-carrows',
      mime_type: 'image/png',
      name: 'logo-carrows.png',
      path: 'logo-carrows.png',
      size: 2400
    },
    cover: {
      alt: 'cover-carrows',
      mime_type: 'image/jpeg',
      name: 'cover-carrows.jpeg',
      path: 'cover-carrows.jpeg',
      size: 2400
    },
    location: {
      type: 'Point',
      coordinates: [32.8404768, -117.1147092]
    },
    meals: [
      {

      }
    ],
  },
  {
    name: 'Domino\'s Pizza',
    description: 'Domino\'s Pizza, Inc., branded as Domino\'s, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware domiciled and headquartered at the Domino\'s Farms Office Park in Ann Arbor, Michigan.',
    address: 'Rue Nadjet Slimane, Kouba 16000',
    phone_number: '0558 84 45 11',
    delivery_duration: 45,
    delivery_cost: 400,
    logo: {
      alt: 'logo-domino-pizza',
      mime_type: 'image/png',
      name: 'logo-domino-pizza.png',
      path: 'logo-domino-pizza.png',
      size: 2400
    },
    cover: {
      alt: 'cover-domino-pizza',
      mime_type: 'image/jpeg',
      name: 'cover-domino-pizza.jpeg',
      path: 'cover-domino-pizza.jpeg',
      size: 2400
    },
    location: {
      type: 'Point',
      coordinates: [36.7273046,3.0778835]
    },
    meals: [
      {

      }
    ],
  },
  {
    name: 'KFC',
    description: 'KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken. It is the world\'s second-largest restaurant chain after McDonald\'s, with 22,621 locations globally in 150 countries as of December 2019. The chain is a subsidiary of Yum!',
    address: 'Boulevard de l\'Université, Bab Ezzouar',
    phone_number: '046 46 79 39',
    delivery_duration: 45,
    delivery_cost: 400,
    logo: {
      alt: 'logo-kfc',
      mime_type: 'image/png',
      name: 'logo-kfc.png',
      path: 'logo-kfc.png',
      size: 2400
    },
    cover: {
      alt: 'cover-kfc',
      mime_type: 'image/jpeg',
      name: 'cover-kfc.jpeg',
      path: 'cover-kfc.jpeg',
      size: 2400
    },
    location: {
      type: 'Point',
      coordinates: [37.42110572602797, -122.07184429557687]
    },
    meals: [
      {

      }
    ],
  },
  {
    name: 'McDonald\'s',
    description: 'McDonald\'s Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.',
    address: 'Didouche Mourad Street, El Djazair 16000',
    phone_number: '021 63 21 33',
    delivery_duration: 45,
    delivery_cost: 400,
    logo: {
      alt: 'logo-mcdonald',
      mime_type: 'image/png',
      name: 'logo-mcdonald.png',
      path: 'logo-mcdonald.png',
      size: 2400
    },
    cover: {
      alt: 'cover-mcdonalds',
      mime_type: 'image/jpg',
      name: 'cover-mcdonalds.jpg',
      path: 'cover-mcdonalds.jpg',
      size: 2400
    },
    location: {
      type: 'Point',
      coordinates: [38.634816579680034, 3.624167379388997]
    },
    meals: [
      {

      }
    ],
  },
  {
    name: 'Pizza Hut',
    description: 'Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides pizza and other Italian-American dishes, including pasta, side dishes and desserts.',
    address: 'Mohammadia',
    phone_number: '025 27 68 60',
    delivery_duration: 45,
    delivery_cost: 400,
    logo: {
      alt: 'logo-pizza-hot',
      mime_type: 'image/png',
      name: 'logo-pizza-hot.png',
      path: 'logo-pizza-hot.png',
      size: 2400
    },
    cover: {
      alt: 'cover-pizza-hut',
      mime_type: 'image/jpg',
      name: 'cover-pizza-hut.jpeg',
      path: 'cover-pizza-hut.jpeg',
      size: 2400
    },
    location: {
      type: 'Point',
      coordinates: [38.634816579680034, 3.624167379388997]
    },
    meals: [
      {

      }
    ],
  }
] as Restaurant[];

async function seedRestaurants(){

}
