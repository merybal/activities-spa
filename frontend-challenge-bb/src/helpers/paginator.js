import { paginatorPagesDisplayed } from "../constants/constants";
const parse = require("parse-link-header");

export const getLinkHeader = async (response) => {
  const linkHeader = await response.headers.get("link");
  const parsed = parse(linkHeader);
  return parsed;
};

export const getPageNumbers = (parsedLinkHeader, currentPage) => {
  let numbersArray = [];
  const firstPage = parseInt(parsedLinkHeader.first._page);
  const lastPage = parseInt(parsedLinkHeader.last._page);
  const lateralPages = parseInt(paginatorPagesDisplayed / 2);

  if (currentPage <= lateralPages) {
    for (let i = firstPage; i < firstPage + paginatorPagesDisplayed; i++) {
      numbersArray.push(i);
    }
  } else if (currentPage >= lastPage - lateralPages) {
    for (let i = lastPage - paginatorPagesDisplayed + 1; i <= lastPage; i++) {
      numbersArray.push(i);
    }
  } else {
    for (let i = currentPage - lateralPages; i <= currentPage + lateralPages; i++) {
      numbersArray.push(i);
    }
  }
  return numbersArray;
};

// const test = {
//     "first": {
//         "_page": "1",
//         "_limit": "9",
//         "rel": "first",
//         "url": "http://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=9"
//     },
//     "next": {
//         "_page": "2",
//         "_limit": "9",
//         "rel": "next",
//         "url": "http://json-biglifeapp.herokuapp.com/activity?_page=2&_limit=9"
//     },
//     "last": {
//         "_page": "236",
//         "_limit": "9",
//         "rel": "last",
//         "url": "http://json-biglifeapp.herokuapp.com/activity?_page=236&_limit=9"
//     }
// };
