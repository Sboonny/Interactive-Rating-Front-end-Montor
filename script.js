const rating = {
  values: {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5"
 }
}
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
    setRating(){
      this.ratingInput = this.rating.values 
    }
  },
  mounted(){
    this.setRating()
  }
  
}).mount('#app')