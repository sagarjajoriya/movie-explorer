import { Movie } from './movie.interface';

export const MOVIES_LIST: readonly Movie[] = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    rating: 8.8,
    overview:
      "A skilled thief enters people's dreams to steal secrets and is tasked with planting an idea inside someone's mind.",
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    overview:
      'Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos and challenges its moral values.',
  },
  {
    id: 3,
    title: 'Interstellar',
    year: 2014,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    rating: 8.7,
    overview:
      'A team of astronauts travels through a wormhole in search of a habitable planet to save humanity from extinction.',
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    year: 1994,
    genres: ['Drama', 'Crime'],
    rating: 9.3,
    overview:
      'A banker sentenced to life in prison forms an unlikely friendship and holds on to hope while enduring years behind bars.',
  },
  {
    id: 5,
    title: 'The Matrix',
    year: 1999,
    genres: ['Sci-Fi', 'Action'],
    rating: 8.7,
    overview:
      'A computer hacker discovers that reality is a simulated world controlled by machines and joins a rebellion to fight back.',
  },
  {
    id: 6,
    title: 'Parasite',
    year: 2019,
    genres: ['Thriller', 'Drama', 'Comedy'],
    rating: 8.5,
    overview:
      'A poor family gradually infiltrates the household of a wealthy family, setting off a chain of unexpected and dangerous events.',
  },
  {
    id: 7,
    title: 'Forrest Gump',
    year: 1994,
    genres: ['Drama', 'Romance'],
    rating: 8.8,
    overview:
      'A kind-hearted man with a simple outlook on life finds himself involved in several defining moments of American history.',
  },
  {
    id: 8,
    title: 'Avengers: Endgame',
    year: 2019,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.4,
    overview:
      "The remaining Avengers unite for one final mission to reverse the devastating consequences of Thanos's actions.",
  },
  {
    id: 9,
    title: 'Joker',
    year: 2019,
    genres: ['Crime', 'Drama', 'Thriller'],
    rating: 8.3,
    overview:
      "An isolated aspiring comedian struggles with mental health and social rejection, gradually transforming into Gotham's infamous villain.",
  },
  {
    id: 10,
    title: 'The Lion King',
    year: 1994,
    genres: ['Animation', 'Adventure', 'Drama'],
    rating: 8.5,
    overview:
      'A young lion prince flees his kingdom after tragedy strikes and eventually returns to reclaim his rightful place as king.',
  },
];
