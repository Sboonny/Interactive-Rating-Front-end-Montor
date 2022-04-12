const rating = ["1", "2", "3", "4", "5"]
ratingInput = ''
submit="SUBMIT"
exit="EXIT"
active = false
isVisible = true
Vue.createApp({
  data()
  {
    return{
   rating,
   ratingInput,
   submit,
   exit,
   active,
   isVisible
  }
},
  methods: {
    setRating(input){
      this.ratingInput = this.rating[input]
    },
    toggleCard(){
      this.isVisible = !this.isVisible
    },
    activation(){
      this.active = !this.active
    }
  },
  mounted(){
    this.setRating(),
    this.toggleCard(),
    this.activation()
  }
  
}).mount('#app')