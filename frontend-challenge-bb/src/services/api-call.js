import { getLinkHeader, getTotalCount } from "../helpers/paginator";
import { activitiesPerPage } from "../constants/constants";

export const getActivities = async (page) => {
  const api = `http://json-biglifeapp.herokuapp.com/activity?_page=${page}&_limit=${activitiesPerPage}`;
  const response = await fetch(api);
  const data = await response.json();
  for (const item of data) {
    const parsedActivity = JSON.parse(item.activity);
    item.activity = parsedActivity;
  }
  const linkHeader = await getLinkHeader(response);
  const totalCount = await getTotalCount(response);
  return { 
    linkHeader: linkHeader, 
    data: data, 
    totalCount: totalCount,
  };
};

export const getActivity = async (id) => {
  const api = `https://json-biglifeapp.herokuapp.com/activity/${id}`;
  const response = await fetch(api);
  const data = await response.json();
  const parsedActivity = JSON.parse(data.activity);
  data.activity = parsedActivity;
  return data;
};
