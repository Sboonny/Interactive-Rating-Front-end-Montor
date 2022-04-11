const rating = ["1", "2", "3", "4", "5"]
ratingInput = ''
submit="Submit"
Vue.createApp({
  data()
  {
    return{
    rating,
   ratingInput,
   submit
  }
},
  methods: {
    setRating(input){
      this.ratingInput = this.rating[input]
    }
  },
  mounted(){
    this.setRating()
  }
  
}).mount('#app')