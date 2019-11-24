import uuid from 'uuid/v1';

export const data = [
  {
    id: uuid(),
    title: 'Aladin',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bset-kids-movies-2019-aladdin-1555082928.jpg',
    rating: '7.1',
    year:'2018',
    like: false,
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Joker',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: true,
    rating: '7.1',
    year: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Jumanji',
    imageUrl: 'https://cdn10.bigcommerce.com/s-vzuks4/products/3232/images/4052/Jumanji_Welcome_to_the_Jungle_2__93558.1520474978.1280.1280.jpg?c=2',
    like: true,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Avengers EndGame',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81MUlAYh4LL._SL1500_.jpg',
    like: false,
    rating: '7.1',
    year: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'How to Train Your Dragon: The Hidden World',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'The Irishman',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,682,1000_AL_.jpg',
    like: true,
    rating: '7.1',
    year: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Super Deluxe',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOGFhYzM1ZDYtNDYzMi00MWEyLTk2NjAtZTg5ZmZmNjljOGE5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    like: true,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Dave Chappelle: Sticks & Stones',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWQ2NDZhNGMtOWMwNS00ZWJhLTk2ZGEtY2VkOTY3ZTljNDQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX800_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Once Upon A Time... In Hollywood',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Toy Story 4',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Weathering with You',
    imageUrl: 'https://i.redd.it/kco1fdcf90131.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Waves',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMWE2OTdiY2MtM2ViNy00NmExLWIxZjYtYTVkNGJkNzgwYjVmXkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Spider-Man: Far from Home',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'A Hidden Life',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDk4OTU0ZjctMjhhYS00YmVlLThlMDAtMjU4YzhlN2IyYzI3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,667,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Alita: Battle Angel',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Shazam!',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Dora and the lost city of gold',
    imageUrl: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1562680032/amc-cdn/production/2/movies/56400/56408/PosterDynamic/83473.jpg',
    like: false,
    rating: '7.1',
    year: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Truth and Justice',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWJhZWE0YjMtOWMzYy00YzVjLWFkN2UtMjY2N2I1ODg2M2Q1XkEyXkFqcGdeQXVyNjAzNDAyOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '625',
    createdAt: '31/03/2019'
  },
];
