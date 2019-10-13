import uuid from 'uuid';

export const movies = [
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Avengers',
        rate: '8.6',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Captain Marvel',
        rate: '7',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Shazam!',
        rate: '7.1',
        genres: ["Action", "Adventure", "Comedy"],
        summary: 'We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson\'s case, by shouting out one word - SHAZAM - this streetwise fourteen-year-old foster kid can turn into the grown-up superhero Shazam.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Joker',
        rate: '8.9',
        genres: ["Crime", "Drama", "Thriller"],
        summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. '
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Toy Story 4',
        rate: '8',
        genres: ["Animation", "Adventure", "Comedy"],
        summary: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Spider-Man',
        rate: '7.7',
        genres: ["Adventure", "Action", "Sci-Fi"],
        summary: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Jojo Rabbit',
        rate: '7.1',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNDkwYzBjOTItYTFhZC00ZWZlLTg1YzYtZWU4ZGZhZWI0MmNkXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The Mustang',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Aladdin',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjAyZDUxODQtZjBhMy00NmQ5LTg5MmMtNGUxZjhkODk1NjdiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Paddleton',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BOGZhMWFhMTAtNGM3Ni00MTdhLTg3NmMtMDViYTc5ODVkZWVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The King',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTg4YzEzNDQtZDAxOS00M2YyLTljZWEtNjk4YTc4NDM2NTBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: '21 Bridges',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGNkYTJiNWUtMzZlNi00YmZlLTg3ZTctZTY2MWVkNTQ5MTQyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Stan & Ollie',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjE4M2FjMDQtZGQ5Mi00YTliLWIwZmMtZGJkMjgxYTY5ZTlmXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Anna',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjUzNzA1MDczOF5BMl5BanBnXkFtZTgwODY5OTI2NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Tolkien',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ0NTI0NjkyN15BMl5BanBnXkFtZTgwNzY0MTE0NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Yesterday',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Avengers',
        rate: '8.6',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Captain Marvel',
        rate: '7',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Shazam!',
        rate: '7.1',
        genres: ["Action", "Adventure", "Comedy"],
        summary: 'We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson\'s case, by shouting out one word - SHAZAM - this streetwise fourteen-year-old foster kid can turn into the grown-up superhero Shazam.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Joker',
        rate: '8.9',
        genres: ["Crime", "Drama", "Thriller"],
        summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. '
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Toy Story 4',
        rate: '8',
        genres: ["Animation", "Adventure", "Comedy"],
        summary: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Spider-Man',
        rate: '7.7',
        genres: ["Adventure", "Action", "Sci-Fi"],
        summary: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Jojo Rabbit',
        rate: '7.1',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNDkwYzBjOTItYTFhZC00ZWZlLTg1YzYtZWU4ZGZhZWI0MmNkXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The Mustang',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Aladdin',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjAyZDUxODQtZjBhMy00NmQ5LTg5MmMtNGUxZjhkODk1NjdiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Paddleton',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BOGZhMWFhMTAtNGM3Ni00MTdhLTg3NmMtMDViYTc5ODVkZWVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The King',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTg4YzEzNDQtZDAxOS00M2YyLTljZWEtNjk4YTc4NDM2NTBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: '21 Bridges',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGNkYTJiNWUtMzZlNi00YmZlLTg3ZTctZTY2MWVkNTQ5MTQyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Stan & Ollie',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjE4M2FjMDQtZGQ5Mi00YTliLWIwZmMtZGJkMjgxYTY5ZTlmXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Anna',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjUzNzA1MDczOF5BMl5BanBnXkFtZTgwODY5OTI2NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Tolkien',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ0NTI0NjkyN15BMl5BanBnXkFtZTgwNzY0MTE0NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Yesterday',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Avengers',
        rate: '8.6',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Captain Marvel',
        rate: '7',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Shazam!',
        rate: '7.1',
        genres: ["Action", "Adventure", "Comedy"],
        summary: 'We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson\'s case, by shouting out one word - SHAZAM - this streetwise fourteen-year-old foster kid can turn into the grown-up superhero Shazam.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Joker',
        rate: '8.9',
        genres: ["Crime", "Drama", "Thriller"],
        summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. '
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Toy Story 4',
        rate: '8',
        genres: ["Animation", "Adventure", "Comedy"],
        summary: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Spider-Man',
        rate: '7.7',
        genres: ["Adventure", "Action", "Sci-Fi"],
        summary: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Jojo Rabbit',
        rate: '7.1',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNDkwYzBjOTItYTFhZC00ZWZlLTg1YzYtZWU4ZGZhZWI0MmNkXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The Mustang',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Aladdin',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjAyZDUxODQtZjBhMy00NmQ5LTg5MmMtNGUxZjhkODk1NjdiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Paddleton',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BOGZhMWFhMTAtNGM3Ni00MTdhLTg3NmMtMDViYTc5ODVkZWVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The King',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTg4YzEzNDQtZDAxOS00M2YyLTljZWEtNjk4YTc4NDM2NTBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: '21 Bridges',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGNkYTJiNWUtMzZlNi00YmZlLTg3ZTctZTY2MWVkNTQ5MTQyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Stan & Ollie',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjE4M2FjMDQtZGQ5Mi00YTliLWIwZmMtZGJkMjgxYTY5ZTlmXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Anna',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjUzNzA1MDczOF5BMl5BanBnXkFtZTgwODY5OTI2NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Tolkien',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ0NTI0NjkyN15BMl5BanBnXkFtZTgwNzY0MTE0NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Yesterday',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Avengers',
        rate: '8.6',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Captain Marvel',
        rate: '7',
        genres: ["Action", "Adventure", "Sci-Fi"],
        summary: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Shazam!',
        rate: '7.1',
        genres: ["Action", "Adventure", "Comedy"],
        summary: 'We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson\'s case, by shouting out one word - SHAZAM - this streetwise fourteen-year-old foster kid can turn into the grown-up superhero Shazam.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Joker',
        rate: '8.9',
        genres: ["Crime", "Drama", "Thriller"],
        summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. '
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Toy Story 4',
        rate: '8',
        genres: ["Animation", "Adventure", "Comedy"],
        summary: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Spider-Man',
        rate: '7.7',
        genres: ["Adventure", "Action", "Sci-Fi"],
        summary: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Dumbo',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Jojo Rabbit',
        rate: '7.1',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNDkwYzBjOTItYTFhZC00ZWZlLTg1YzYtZWU4ZGZhZWI0MmNkXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The Mustang',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Aladdin',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjAyZDUxODQtZjBhMy00NmQ5LTg5MmMtNGUxZjhkODk1NjdiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Paddleton',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BOGZhMWFhMTAtNGM3Ni00MTdhLTg3NmMtMDViYTc5ODVkZWVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'The King',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BYTg4YzEzNDQtZDAxOS00M2YyLTljZWEtNjk4YTc4NDM2NTBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: '21 Bridges',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BNGNkYTJiNWUtMzZlNi00YmZlLTg3ZTctZTY2MWVkNTQ5MTQyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Stan & Ollie',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BZjE4M2FjMDQtZGQ5Mi00YTliLWIwZmMtZGJkMjgxYTY5ZTlmXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Anna',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjUzNzA1MDczOF5BMl5BanBnXkFtZTgwODY5OTI2NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
        title: 'Tolkien',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
    {
        id: uuid(),
        url: 'https://m.media-amazon.com/images/M/MV5BMjQ0NTI0NjkyN15BMl5BanBnXkFtZTgwNzY0MTE0NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        title: 'Yesterday',
        rate: '6.3',
        genres: ["Adventure", "Family", "Fantasy"],
        summary: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.'
    },
];