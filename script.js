const rating = ["1", "2", "3", "4", "5"]
ratingInput = ''
submit="Submit"
isVisible = false
Vue.createApp({
  data()
  {
    return{
    rating,
   ratingInput,
   submit,
   isVisible
  }
},
  methods: {
    setRating(input){
      this.ratingInput = this.rating[input]
    },
    toggleCard(){
      isVisible = !isVisible
    }
  },
  mounted(){
    this.setRating()
  }
  
}).mount('#app')