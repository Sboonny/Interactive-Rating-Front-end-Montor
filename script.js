const rating = ["1", "2", "3", "4", "5"]
ratingInput = ''
submit="Submit"
exit="Exit"
isVisible = false
Vue.createApp({
  data()
  {
    return{
    rating,
   ratingInput,
   submit,
   exit,
   isVisible
  }
},
  methods: {
    setRating(input){
      this.ratingInput = this.rating[input]
    },
    toggleCard(){
      this.isVisible = !this.isVisible
    }
  },
  mounted(){
    this.setRating()
  }
  
}).mount('#app')