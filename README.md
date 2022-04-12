# Frontend Mentor - Interactive rating component solution
![Design preview for the Interactive rating component coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

-  [Solution URL](https://your-solution-url.com)
-  [Live site URL](https://your-live-site-url.com)

## My process
I tried to make rating buttons interactive and dynamic with vue.js
check my [Commit history](https://github.com/Sboonny/Interactive-Rating-Front-end-Montor/commit/a7a55aa90683876af12012aebe830e9391b028bc)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [vue.js](https://vuejs.org/) - vue framework


### What I learned
:v-bind
```html
 <button :class="{active: rate == activeClass}" >{{rating[rate -1]}}</button>
```
vue events and v-for
```html
 <button 
       class="circle-bg"
       v-for="[rate, i] in rating" 
       @click="setRating(rate - 1), activeClass = rate"
       :class="{active: rate == activeClass}"
       >{{rating[rate -1]}}</button>
```
how vue script work
```js
Vue.createApp({
  data()
  {
    return{
  }
},
  methods: {
  },
  mounted(){
  }
}).mount('#app')
```


### Useful resources

- [StackOverFlow Question](https://stackoverflow.com/questions/44196600/vuejs-add-remove-class-on-click?newreg=c8968f0c18794b269943206e7ddfcec2) - This helped me with v-for logic and I am plan to use it forward. give that answer a thumbs up if you find it useful as well.
- [vue tutorial](https://vuejs.org/tutorial/#step-1) - following this tutorial explained a lot of concept that is used in this project


## Author

- Website - [Muhammed](https://sboonny.vercel.app/)
- Frontend Mentor - [@Sboonny](https://www.frontendmentor.io/profile/Sboonny)
- github - [@Sboonny](https://github.com/Sboonny)


## Acknowledgments
[freeCodeCamp](https://www.freecodecamp.org/)
