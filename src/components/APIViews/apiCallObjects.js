import { getConfig, searchTVByTitle, getEpisodes, getShowDetails, getExternalIds,
  getCredits, getCreditDetails, 
  getPersonDetails, getShowImages } from 'tmdb_api';

// Movie API imports
import {
  searchMovieByTitle, getMovieDetails, getMovieImages, getPersonDetails_Movie
} from 'tmdb_api';

// Curated TV API Imports
import {
  getImagesForShow
} from 'tmdb_api'
// returns a function that will accept 0 to n arguments
const fuctionFactory = (fn) => {
  let callFunction = async (...rest) => {
    console.log('ARGS',  rest)
    const results = await fn(...rest);
    return results;
  }
  return callFunction;
}


export const TVAPI_ParmsObj = {
  getConfig: {
    func: fuctionFactory(getConfig),
    parms: []
  },
  searchTVByTitle: {
    func: fuctionFactory(searchTVByTitle),
    parms: ['title']
  }, 
  getEpisodes: {
    func: fuctionFactory(getEpisodes),
    parms: ['showId', 'seasonNum']
  }, 
  getShowDetails: {
    func: fuctionFactory(getShowDetails),
    parms: ['showId']
  }, 
  getShowImages: {
    func: fuctionFactory(getShowImages),
    parms: ['showId']
  }, 
  getExternalIds: {
    func: fuctionFactory(getExternalIds),
    parms: ['showId']
  },
  getCredits: {
    func: fuctionFactory(getCredits),
    parms: ['showId']
  },
  getCreditDetails: {
    func: fuctionFactory(getCreditDetails),
    parms: ['creditId']
  },
  getPersonDetails: {
    func: fuctionFactory(getPersonDetails),
    parms: ['personId']
  }
}

export const MovieAPI_ParmsObj = {
  searchMovieByTitle: {
    func: fuctionFactory(searchMovieByTitle),
    parms: ['title']
  },
  getMovieDetails: {
    func: fuctionFactory(getMovieDetails),
    parms: ['movieId']
  },
  getMovieImages: {
    func: fuctionFactory(getMovieImages),
    parms: ['movieId']
  },
  getPersonDetails_Movie: {
    func: fuctionFactory(getPersonDetails_Movie),
    parms: ['personId']
  },
}

export const APITV_ParmsObj = {
  getImagesForShow: {
    func: fuctionFactory(getImagesForShow),
    parms: ['showId','imageType']
  }
}