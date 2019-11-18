import axios from "axios";
import { resolve } from "q";

var apiClient = axios.create({
  baseUrl: "",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  search(searchValue, page = 1, size = 10) {
    let url = `?pageNumber=${page}&pageSize=${size}`;
    if (searchValue) {
      url = `${url}&domain=${searchValue}&keyword=${searchValue}`;
    }

    return apiClient.get(url);
  },
  mockSearch() {
    return resolve({
      "status": true,
      "data": [
        {
          "_index": "microsite_repo",
          "_type": "_doc",
          "_id": "iO8xXm4BTl4n7dtfiM3e",
          "_score": null,
          "_source": {
            "market": "Medicine",
            "country": "US",
            "domain": "https://www.lipitor.com",
            "title": "Activate Savings Card | LIPITOR® (atorvastatin calcium)",
            "brand": "Lipitor",
            "url": "https://www.lipitor.com/copay-card-activate"
          },
          "sort": [
            "2019-11-12 05:58:54.938934"
          ]
        }
      ]
    });
  }
};
