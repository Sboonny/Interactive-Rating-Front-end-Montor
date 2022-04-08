Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
  
})
.component("rating", {
  template: "#rating-template",
  data() {
    return {
      ratingInput: ""
    }
  }
})
  
  .mount('#app')