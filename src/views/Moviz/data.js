import uuid from 'uuid/v1';

export const data = [
  {
    id: 'ttttttt14',
    title: 'Aladin',
    url_picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bset-kids-movies-2019-aladdin-1555082928.jpg',
    rating: '7.1',
    year:'2019',
    like: false,
    updatedAt: '27/03/2019'
  },
  {
    id: 'ttttttt15',
    title: 'Joker',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '8.8',
    year: '2019',
    createdAt: '31/03/2019'
  },
  {
    id: 'ttttttt16',
    title: 'Jumanji',
    url_picture: 'https://cdn10.bigcommerce.com/s-vzuks4/products/3232/images/4052/Jumanji_Welcome_to_the_Jungle_2__93558.1520474978.1280.1280.jpg?c=2',
    like: false,
    rating: '6.9',
    year: '2017',
    createdAt: '03/04/2019'
  },
  {
    id: 'ttttttt17',
    title: 'Avengers EndGame',
    url_picture: 'https://images-na.ssl-images-amazon.com/images/I/81MUlAYh4LL._SL1500_.jpg',
    like: false,
    rating: '8.5',
    year: '2019',
    createdAt: '04/04/2019'
  },
  {
    id: 'ttttttt18',
    title: 'How to Train Your Dragon: The Hidden World',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
    like: false,
    rating: '7.5',
    year: '2019',
    updatedAt: '27/03/2019'
  },
  {
    id: 'tttttttt1',
    title: 'The Irishman',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,682,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '625',
    createdAt: '31/03/2019'
  },
  {
    id: 'tttttttt2',
    title: 'Super Deluxe',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BOGFhYzM1ZDYtNDYzMi00MWEyLTk2NjAtZTg5ZmZmNjljOGE5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'tttttttt3',
    title: 'Dave Chappelle: Sticks & Stones',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BOWQ2NDZhNGMtOWMwNS00ZWJhLTk2ZGEtY2VkOTY3ZTljNDQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX800_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'tttttttt4',
    title: 'Once Upon A Time... In Hollywood',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'tttttttt5',
    title: 'Toy Story 4',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'tttttttt6',
    title: 'Weathering with You',
    url_picture: 'https://i.redd.it/kco1fdcf90131.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'tttttttt7',
    title: 'Waves',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BMWE2OTdiY2MtM2ViNy00NmExLWIxZjYtYTVkNGJkNzgwYjVmXkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'tttttttt8',
    title: 'Spider-Man: Far from Home',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'tttttttt9',
    title: 'A Hidden Life',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BMDk4OTU0ZjctMjhhYS00YmVlLThlMDAtMjU4YzhlN2IyYzI3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,667,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'ttttttt10',
    title: 'Alita: Battle Angel',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'ttttttt11',
    title: 'Shazam!',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 'ttttttt12',
    title: 'Dora and the lost city of gold',
    url_picture: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1562680032/amc-cdn/production/2/movies/56400/56408/PosterDynamic/83473.jpg',
    like: false,
    rating: '7.1',
    year: '625',
    createdAt: '31/03/2019'
  },
  {
    id: 'ttttttt13',
    title: 'Truth and Justice',
    url_picture: 'https://m.media-amazon.com/images/M/MV5BZWJhZWE0YjMtOWMzYy00YzVjLWFkN2UtMjY2N2I1ODg2M2Q1XkEyXkFqcGdeQXVyNjAzNDAyOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    like: false,
    rating: '7.1',
    year: '625',
    createdAt: '31/03/2019'
  },
];
