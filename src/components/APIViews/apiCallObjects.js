import {
  getConfig,
  rawSearchTVByTitle,
  rawGetEpisodes,
  rawGetShowDetails,
  rawGetExternalIds,
  rawGetCredits,
  rawGetCreditDetails,
  getTVGenres,
  rawGetPersonDetails,
  rawGetShowImages
} from "tmdb_api";

// Movie API imports
import {
  rawSearchMovieByTitle,
  rawGetMovieDetails,
  rawGetMovieImages,
  rawGetPersonDetails_Movie,
  rawSearchForPerson,
  searchForPersonId,
  getMovieGenres
} from "tmdb_api";

// Curated TV API Imports
import { getImagesForShow, tvSearchByTitle, tvGetShowDetails } from "tmdb_api";

// Curated Movie API Imports
import {
  movieSearchByTitle,
  movieGetMovieDetails,
  getImagesForMovie,
  discoverMovies
} from "tmdb_api";

// returns a function that will accept 0 to n arguments
const fuctionFactory = fn => {
  let callFunction = async (...rest) => {
    console.log("ARGS", rest);
    // If function is discoverMovies the expect a JSON string
    // '{"name": "value"}'
    if (fn.name === "discoverMovies") {
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
  }
};
export const TVAPI_ParmsObj = {
  getTVGenres: {
    func: fuctionFactory(getTVGenres),
    parms: []
  },
  rawSearchTVByTitle: {
    func: fuctionFactory(rawSearchTVByTitle),
    parms: ["title"]
  },
  rawGetEpisodes: {
    func: fuctionFactory(rawGetEpisodes),
    parms: ["showId", "seasonNum"]
  },
  rawGetShowDetails: {
    func: fuctionFactory(rawGetShowDetails),
    parms: ["showId"]
  },
  rawGetShowImages: {
    func: fuctionFactory(rawGetShowImages),
    parms: ["showId"]
  },
  rawGetExternalIds: {
    func: fuctionFactory(rawGetExternalIds),
    parms: ["showId"]
  },
  rawGetCredits: {
    func: fuctionFactory(rawGetCredits),
    parms: ["showId"]
  },
  rawGetCreditDetails: {
    func: fuctionFactory(rawGetCreditDetails),
    parms: ["creditId"]
  },
  rawGetPersonDetails: {
    func: fuctionFactory(rawGetPersonDetails),
    parms: ["personId"]
  }
};

export const MovieAPI_ParmsObj = {
  rawSearchMovieByTitle: {
    func: fuctionFactory(rawSearchMovieByTitle),
    parms: ["title"]
  },
  rawGetMovieDetails: {
    func: fuctionFactory(rawGetMovieDetails),
    parms: ["movieId"]
  },
  rawGetMovieImages: {
    func: fuctionFactory(rawGetMovieImages),
    parms: ["movieId"]
  },
  rawGetPersonDetails_Movie: {
    func: fuctionFactory(rawGetPersonDetails_Movie),
    parms: ["personId"]
  }
};

export const APITV_ParmsObj = {
  getImagesForShow: {
    func: fuctionFactory(getImagesForShow),
    parms: ["showId", "imageType"]
  },
  tvSearchByTitle: {
    func: fuctionFactory(tvSearchByTitle),
    parms: ["searchText", "page"]
  },
  tvGetShowDetails: {
    func: fuctionFactory(tvGetShowDetails),
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
  getImagesForMovie: {
    func: fuctionFactory(getImagesForMovie),
    parms: ["movieId", "imageType"]
  },
  discoverMovies: {
    func: fuctionFactory(discoverMovies),
    parms: ["genreIds", "ReleaseYear", "ReleaseDate GTE", "castIds"]
  }
};
