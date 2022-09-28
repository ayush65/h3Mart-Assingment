/** @format */

import axios from "axios";

export const requestGetData = (pageNumber) =>
  axios.get(`https://api.coincap.io/v2/assets?limit=${pageNumber}`);

// export const requestGetData = (pageNumber) =>
//   axios.get(`https://api.coincap.io/v2/assets`);
