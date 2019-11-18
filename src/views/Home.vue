<template>
  <div class="home">
    <div class="d-flex justify-content-between search-container">
      <input type="text" class="helix--input p-2" placeholder="Search" v-model="searchValue" />
      <span class="p-1"></span>
      <button class="helix--button helix--button-primary" @click="search">Search</button>
    </div>
    <hr />
    <div class="search-results">
      <table class="table table-bordered">
        <thead>
          <tr>
            <td>Market</td>
            <td>Country</td>
            <td>Domain</td>
            <td>Title</td>
            <td>Brand</td>
            <td>Url</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.url">
            <td>{{item.market}}</td>
            <td>{{item.country}}</td>
            <td>{{item.domain}}</td>
            <td>{{item.title}}</td>
            <td>{{item.brand}}</td>
            <td>{{item.url}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SearchService from "@/services/SearchService";

export default {
  name: "home",
  data() {
    return {
      data: [],
      isLoading: false,
      errorMessage: "",
      searchValue: ""
    };
  },
  methods: {
    search() {
      this.isLoading = true;
      this.errorMessage = "";
      this.data = [];
      SearchService.mockSearch()
        .then(response => {
          if (response && response.status) {
            response.data.forEach(item => {
              this.data.push({ ...item._source });
            });
          }
          this.isLoading = false;
        })
        .catch(error => {
          this.isLoading = false;
          this.errorMessage = error.response;
        });
    }
  }
};
</script>
