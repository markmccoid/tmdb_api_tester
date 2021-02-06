import {
  getConfig,
  rawTVSearchByTitle,
  rawTVGetEpisodes,
  rawTVGetShowDetails,
  rawTVGetExternalIds,
  rawTVGetShowCredits,
  rawTVGetCreditDetails,
  rawGetPersonDetails,
  rawGetPersonCombinedCredits,
  rawTVGetShowImages,
  rawGetPersonImages,
  rawMovieWatchProviders,
} from '@markmccoid/tmdb_api';

// Movie API imports
import {
  rawMovieSearchByTitle,
  rawMovieGetDetails,
  rawMovieGetVideos,
  rawMovieGetRecommendations,
  rawMovieGetImages,
  rawMovieGetPersonCredits,
  rawMovieGetCredits,
  rawSearchForPerson,
  rawMovieGetPopular,
  movieGetUpcoming,
  rawMovieGetNowPlaying,
  searchForPersonId,
  getMovieGenres,
} from '@markmccoid/tmdb_api';

// Curated TV API Imports
import {
  getTVGenres,
  getPersonDetails,
  getPersonImages,
  tvGetImages,
  tvSearchByTitle,
  tvGetShowDetails,
  tvGetShowCredits,
} from '@markmccoid/tmdb_api';

// Curated Movie API Imports
import {
  movieSearchByTitle,
  movieGetWatchProviders,
  movieGetDetails,
  movieGetVideos,
  movieGetRecommendations,
  movieGetImages,
  movieGetPersonCredits,
  movieGetCredits,
  movieGetPopular,
  movieGetNowPlaying,
  movieDiscover,
} from '@markmccoid/tmdb_api';

// returns a function that will accept 0 to n arguments
const fuctionFactory = (fn) => {
  let callFunction = async (...rest) => {
    console.log('ARGS', rest);
    // If function is discoverMovies the expect a JSON string
    // NOTE: order of the rest array is important!
    // '{"name": "value"}'
    if (fn.name === 'movieDiscover') {
      let obj = {
        genres: rest[0] ? rest[0].split(',') : undefined,
        genreCompareType: rest[1],
        releaseYear: rest[2],
        releaseDateGTE: rest[3],
        releaseDateLTE: rest[4],
        cast: rest[5] ? rest[5].split(',') : undefined,
        castCompareType: rest[6],
        crew: rest[7] ? rest[7].split(',') : undefined,
        watchProviders: rest[8] ? rest[8].split(',') : undefined,
        regions: rest[9] ? rest[9].split(',') : undefined,
      };
      // let obj = JSON.parse(rest);
      return await fn(obj);
    }
    if (fn.name === 'movieGetWatchProviders') {
      let countryCodes = rest[1] ? rest[1].split(',') : undefined;
      return await fn(rest[0], countryCodes);
    }
    const results = await fn(...rest);
    return results;
  };
  return callFunction;
};

//------ GENERAL RAW ------//
export const generalObj = {
  getConfig: {
    func: fuctionFactory(getConfig),
    parms: [],
  },
  rawSearchForPerson: {
    func: fuctionFactory(rawSearchForPerson),
    parms: ['personName', 'page'],
  },
  rawGetPersonDetails: {
    func: fuctionFactory(rawGetPersonDetails),
    parms: ['personId'],
  },
  rawGetPersonCombinedCredits: {
    func: fuctionFactory(rawGetPersonCombinedCredits),
    parms: ['personId'],
  },
  rawGetPersonImages: {
    func: fuctionFactory(rawGetPersonImages),
    parms: ['personId'],
  },
};

//------ TV RAW ------//
export const TVAPI_ParmsObj = {
  getTVGenres: {
    func: fuctionFactory(getTVGenres),
    parms: [],
  },

  rawTVSearchByTitle: {
    func: fuctionFactory(rawTVSearchByTitle),
    parms: ['title'],
  },
  rawTVGetEpisodes: {
    func: fuctionFactory(rawTVGetEpisodes),
    parms: ['showId', 'seasonNum'],
  },
  rawTVGetShowDetails: {
    func: fuctionFactory(rawTVGetShowDetails),
    parms: ['showId'],
  },
  rawTVGetShowImages: {
    func: fuctionFactory(rawTVGetShowImages),
    parms: ['showId'],
  },
  rawTVGetExternalIds: {
    func: fuctionFactory(rawTVGetExternalIds),
    parms: ['showId'],
  },
  rawTVGetShowCredits: {
    func: fuctionFactory(rawTVGetShowCredits),
    parms: ['showId'],
  },
  rawTVGetCreditDetails: {
    func: fuctionFactory(rawTVGetCreditDetails),
    parms: ['creditId'],
  },
};

//------ MOVIE RAW ------//
export const MovieAPI_ParmsObj = {
  rawMovieSearchByTitle: {
    func: fuctionFactory(rawMovieSearchByTitle),
    parms: ['title'],
  },
  rawMovieWatchProviders: {
    func: fuctionFactory(rawMovieWatchProviders),
    parms: ['movieId'],
  },
  rawMovieGetDetails: {
    func: fuctionFactory(rawMovieGetDetails),
    parms: ['movieId'],
  },
  rawMovieGetVideos: {
    func: fuctionFactory(rawMovieGetVideos),
    parms: ['movieId'],
  },
  rawMovieGetRecommendations: {
    func: fuctionFactory(rawMovieGetRecommendations),
    parms: ['movieId'],
  },
  rawMovieGetImages: {
    func: fuctionFactory(rawMovieGetImages),
    parms: ['movieId'],
  },
  rawMovieGetPersonCredits: {
    func: fuctionFactory(rawMovieGetPersonCredits),
    parms: ['personId'],
  },
  rawMovieGetCredits: {
    func: fuctionFactory(rawMovieGetCredits),
    parms: ['movieId'],
  },
  rawMovieGetPopular: {
    func: fuctionFactory(rawMovieGetPopular),
    parms: ['page'],
  },
  rawMovieGetNowPlaying: {
    func: fuctionFactory(rawMovieGetNowPlaying),
    parms: ['page'],
  },
};

//------ CURATED RAW ------//
export const APIGEN_ParmsObj = {
  searchForPersonId: {
    func: fuctionFactory(searchForPersonId),
    parms: ['personName', 'page'],
  },
  getPersonDetails: {
    func: fuctionFactory(getPersonDetails),
    parms: ['personId'],
  },
  getPersonImages: {
    func: fuctionFactory(getPersonImages),
    parms: ['personId'],
  },
};

//------ TV CURATED ------//
export const APITV_ParmsObj = {
  getTVGenres: {
    func: fuctionFactory(getTVGenres),
    parms: ['convertToObject'],
  },
  tvGetImages: {
    func: fuctionFactory(tvGetImages),
    parms: ['showId', 'imageType'],
  },
  tvSearchByTitle: {
    func: fuctionFactory(tvSearchByTitle),
    parms: ['searchText', 'page'],
  },
  tvGetShowDetails: {
    func: fuctionFactory(tvGetShowDetails),
    parms: ['showId'],
  },
  tvGetShowCredits: {
    func: fuctionFactory(tvGetShowCredits),
    parms: ['showId'],
  },
};

//------ MOVIE CURATED ------//
export const APIMovie_ParmsObj = {
  getMovieGenres: {
    func: fuctionFactory(getMovieGenres),
    parms: ['convertToObject'],
  },
  movieGetWatchProviders: {
    func: fuctionFactory(movieGetWatchProviders),
    parms: ['moveiId', 'countryCodes []'],
  },
  movieSearchByTitle: {
    func: fuctionFactory(movieSearchByTitle),
    parms: ['searchText', 'page'],
  },
  movieGetDetails: {
    func: fuctionFactory(movieGetDetails),
    parms: ['movieId'],
  },
  movieGetVideos: {
    func: fuctionFactory(movieGetVideos),
    parms: ['movieId'],
  },
  movieGetRecommendations: {
    func: fuctionFactory(movieGetRecommendations),
    parms: ['movieId'],
  },
  movieGetImages: {
    func: fuctionFactory(movieGetImages),
    parms: ['movieId', 'imageType'],
  },
  movieGetPersonCredits: {
    func: fuctionFactory(movieGetPersonCredits),
    parms: ['personId'],
  },
  movieGetCredits: {
    func: fuctionFactory(movieGetCredits),
    parms: ['movieId'],
  },
  movieGetPopular: {
    func: fuctionFactory(movieGetPopular),
    parms: ['page'],
  },
  movieGetNowPlaying: {
    func: fuctionFactory(movieGetNowPlaying),
    parms: ['page'],
  },
  movieGetUpcoming: {
    func: fuctionFactory(movieGetUpcoming),
    parms: ['page'],
  },
  movieDiscover: {
    func: fuctionFactory(movieDiscover),
    parms: [
      'genreIds',
      'genreCompareType',
      'ReleaseYear',
      'ReleaseDate GTE',
      'ReleaseDate LTE',
      'castIds',
      'castCompareType',
      'crewIds',
      'watchProviders',
      'regions',
    ],
  },
};
