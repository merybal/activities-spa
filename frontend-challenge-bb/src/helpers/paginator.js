import {
  paginatorPagesDisplayed,
  activitiesPerPage,
} from "../constants/constants";
const parse = require("parse-link-header");

export const getLinkHeader = async (response) => {
  const linkHeader = await response.headers.get("link");
  const parsed = parse(linkHeader);
  return parsed;
};

export const getTotalCount = async (response) => {
  const totalCount = await response.headers.get("X-Total-Count");
  return totalCount;
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
    for (
      let i = currentPage - lateralPages;
      i <= currentPage + lateralPages;
      i++
    ) {
      numbersArray.push(i);
    }
  }
  return numbersArray;
};

export const getDisplayedItems = (pageNumber, totalCount, lastPage) => {
  let items = {
    from: 1,
    to: 9,
  };

  if (pageNumber === 1) {
    return items;
  } else if (pageNumber === lastPage) {
    items.from = pageNumber * activitiesPerPage - activitiesPerPage + 1;
    items.to = totalCount;
    return items;
  } else {
    items.from = pageNumber * activitiesPerPage - activitiesPerPage + 1;
    items.to = pageNumber * activitiesPerPage;
    return items;
  }
};
