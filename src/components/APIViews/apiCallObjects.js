import {
  getConfig,
  rawTVSearchByTitle,
  rawTVGetEpisodes,
  rawTVGetShowDetails,
  rawTVGetExternalIds,
  rawTVGetShowCredits,
  rawTVGetCreditDetails,
  getTVGenres,
  rawGetPersonDetails,
  rawTVGetShowImages
} from "tmdb_api";

// Movie API imports
import {
  rawMovieSearchByTitle,
  rawMovieGetDetails,
  rawMovieGetImages,
  rawMovieGetPersonCredits,
  rawSearchForPerson,
  searchForPersonId,
  getMovieGenres
} from "tmdb_api";

// Curated TV API Imports
import {
  getPersonDetails,
  tvGetImages,
  tvSearchByTitle,
  tvGetShowDetails,
  tvGetShowCredits
} from "tmdb_api";

// Curated Movie API Imports
import {
  movieSearchByTitle,
  movieGetMovieDetails,
  movieGetImages,
  movieGetPersonCredits,
  movieDiscover
} from "tmdb_api";

// returns a function that will accept 0 to n arguments
const fuctionFactory = fn => {
  let callFunction = async (...rest) => {
    console.log("ARGS", rest);
    // If function is discoverMovies the expect a JSON string
    // '{"name": "value"}'
    if (fn.name === "movieDiscover") {
      let obj = {
        genres: rest[0] ? rest[0].split(",") : undefined,
        releaseYear: rest[1],
        releaseDateGTE: rest[2]
      };
      // let obj = JSON.parse(rest);
      return await fn(obj);
    }
    const results = await fn(...rest);
    return results;
  };
  return callFunction;
};

export const generalObj = {
  getConfig: {
    func: fuctionFactory(getConfig),
    parms: []
  },
  rawSearchForPerson: {
    func: fuctionFactory(rawSearchForPerson),
    parms: ["personName", "page"]
  },
  searchForPersonId: {
    func: fuctionFactory(searchForPersonId),
    parms: ["personName", "page"]
  },
  rawGetPersonDetails: {
    func: fuctionFactory(rawGetPersonDetails),
    parms: ["personId"]
  },
  getPersonDetails: {
    func: fuctionFactory(getPersonDetails),
    parms: ["personId"]
  }
};
export const TVAPI_ParmsObj = {
  getTVGenres: {
    func: fuctionFactory(getTVGenres),
    parms: []
  },
  rawTVSearchByTitle: {
    func: fuctionFactory(rawTVSearchByTitle),
    parms: ["title"]
  },
  rawTVGetEpisodes: {
    func: fuctionFactory(rawTVGetEpisodes),
    parms: ["showId", "seasonNum"]
  },
  rawTVGetShowDetails: {
    func: fuctionFactory(rawTVGetShowDetails),
    parms: ["showId"]
  },
  rawTVGetShowImages: {
    func: fuctionFactory(rawTVGetShowImages),
    parms: ["showId"]
  },
  rawTVGetExternalIds: {
    func: fuctionFactory(rawTVGetExternalIds),
    parms: ["showId"]
  },
  rawTVGetShowCredits: {
    func: fuctionFactory(rawTVGetShowCredits),
    parms: ["showId"]
  },
  rawTVGetCreditDetails: {
    func: fuctionFactory(rawTVGetCreditDetails),
    parms: ["creditId"]
  }
};

export const MovieAPI_ParmsObj = {
  rawMovieSearchByTitle: {
    func: fuctionFactory(rawMovieSearchByTitle),
    parms: ["title"]
  },
  rawMovieGetDetails: {
    func: fuctionFactory(rawMovieGetDetails),
    parms: ["movieId"]
  },
  rawMovieGetImages: {
    func: fuctionFactory(rawMovieGetImages),
    parms: ["movieId"]
  },
  rawMovieGetPersonCredits: {
    func: fuctionFactory(rawMovieGetPersonCredits),
    parms: ["personId"]
  }
};

export const APITV_ParmsObj = {
  tvGetImages: {
    func: fuctionFactory(tvGetImages),
    parms: ["showId", "imageType"]
  },
  tvSearchByTitle: {
    func: fuctionFactory(tvSearchByTitle),
    parms: ["searchText", "page"]
  },
  tvGetShowDetails: {
    func: fuctionFactory(tvGetShowDetails),
    parms: ["showId"]
  },
  tvGetShowCredits: {
    func: fuctionFactory(tvGetShowCredits),
    parms: ["showId"]
  }
};

export const APIMovie_ParmsObj = {
  getMovieGenres: {
    func: fuctionFactory(getMovieGenres),
    parms: []
  },
  movieSearchByTitle: {
    func: fuctionFactory(movieSearchByTitle),
    parms: ["searchText", "page"]
  },
  movieGetMovieDetails: {
    func: fuctionFactory(movieGetMovieDetails),
    parms: ["movieId"]
  },
  movieGetImages: {
    func: fuctionFactory(movieGetImages),
    parms: ["movieId", "imageType"]
  },
  movieGetPersonCredits: {
    func: fuctionFactory(movieGetPersonCredits),
    parms: ["[personId]"]
  },
  movieDiscover: {
    func: fuctionFactory(movieDiscover),
    parms: ["genreIds", "ReleaseYear", "ReleaseDate GTE", "castIds"]
  }
};
